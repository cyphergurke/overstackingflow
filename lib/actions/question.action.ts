"use server"

import { connectToDatabase } from "../mongoose"
import Question from "@/database/question.model";
import { CreateQuestionParams, GetQuestionsParams } from "./shared.types";
import Tag from "@/database/tag.model";
import User from "@/database/user.model";
import { revalidatePath } from "next/cache";

export async function getQuestions(params?: GetQuestionsParams) {
    try {
        connectToDatabase();
        const questions = await Question.find({})
            .populate({ path: 'tags', model: Tag })
            .populate({ path: 'author', model: User })
            .sort({ createdAt: -1 })

        return {questions};
    } catch (err: any) {
        console.log(err.message);
        throw err
    }
}

export async function createQuestion(params: CreateQuestionParams) {
    try {
        connectToDatabase();
        const { title, content, tags, author, path } = params;
        const question = await Question.create({ title, content, author })
        const tagDocuments = [];

        for (const tag of tags) {
            const existingTag = await Tag.findOneAndUpdate(
                { name: { $regex: new RegExp(`^${tag}$`, "i") } }, // find the existing tag
                { $setOnInsert: { name: tag }, $push: { question: question._id } },
                { upsert: true, new: true },
            )
            tagDocuments.push(existingTag._id);
        }
        await Question.findByIdAndUpdate(question._id, {
            $push: { tags: { $each: tagDocuments } }
        })

        revalidatePath(path);
    } catch (err: any) {
        console.log(err.message)
    }
}

