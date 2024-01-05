"use server"

import User from "@/database/user.model";
import { connectToDatabase } from "../mongoose";
import { GetAllTagsParams, GetTopInteractedTagsParams } from "./shared.types"
import Tag from "@/database/tag.model";


export async function getTopInteractedTags(params: GetTopInteractedTagsParams) {
    try {
        connectToDatabase();
    const {userId /* , limit = 3 */} = params;

        const user = await User.findById(userId);
        if (!user) throw new Error(`User ${userId} does not exist`)
       
        // find interaction and group by tags...
        // later...

        return [{_id:"awdaw", name: 'tag1'}, {_id:"awdaw", name: 'tag2'}];
     
    } catch (err: any) {
        console.log(err.message)
        throw err
    }
}

export async function getAllTags(params: GetAllTagsParams) {
    try {
        connectToDatabase();
        const tags = await Tag.find({});
        return {tags}
    } catch (err: any) {
        console.log(err.message)
        throw err
    }
}