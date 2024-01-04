"use server"

import User from "@/database/user.model";
import { connectToDatabase } from "../mongoose";
import { GetTopInteractedTagsParams } from "./shared.types"

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