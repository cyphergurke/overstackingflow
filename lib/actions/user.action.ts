"use server"


import User from "@/database/user.model";
import { connectToDatabase } from "../mongoose"
import { CreateUserParams, DeleteUserParams, GetAllUsersParams, UpdateUserParams } from "./shared.types";
import { revalidatePath } from "next/cache";
import Question from "@/database/question.model";

export async function getAllUsers(params: GetAllUsersParams) {
    try {
        connectToDatabase()
       // const {page = 1, pageSize = 20, filter, searchQuery } = params;
        const users = await User.find({ })
            .sort({ createdAt: -1})
        return {users};
    } catch (err: any) {
        console.log(err.message)
        throw err
    }
}

export async function getUserById(params: any) {
    try {
        connectToDatabase()
        const { userId } = params;
        const user = await User.findOne({ clerkId: userId });
        return user;
    } catch (err: any) {
        console.log(err.message)
        throw err
    }
}


export async function createUser(userData: CreateUserParams) {
    try {
        connectToDatabase()
        const newUser = await User.create(userData);
        return newUser;
    } catch (err: any) {
        console.log(err.message)
        throw err
    }
}

export async function updateUser(params: UpdateUserParams) {
    try {
        connectToDatabase()

        const { clerkId, updateData, path } = params;
        await User.findOneAndUpdate({ clerkId }, updateData, {
            new: true,
        })
        revalidatePath(path);
    } catch (err: any) {
        console.log(err.message)
        throw err
    }
}

export async function deleteUser(params: DeleteUserParams) {
    try {
        connectToDatabase();
        const { clerkId } = params
        const user = await User.findOneAndDelete({ clerkId });
        if (!user) {
            throw new Error('User not found')
        }

        // Delete the user data: questions, comments etc.
        // eslint-disable-next-line no-unused-vars
        const userQuestionIds = await Question.find({ author: user._id }).distinct('_id');
        await Question.deleteMany({autor: user._id});
        const deletedUser = await User.findByIdAndDelete(user._id)
        return deletedUser

    } catch (err: any) {
        console.log(err.message)
        throw err
    }
}