import mongoose from 'mongoose';

interface accountType {
    _id: Schema.Types.ObjectId;
    userId: Schema.Types.ObjectId;
    type: string;
    provider: string;
    providerAccountId: string;
    refresh_token: string;
    access_token: string;
    expires_at: number;
    session_state?: string; 
}

const accountSchema = new Schema<accountType>({
    userId: {type:Schema.Types.ObjectId ,required:true, ref: "user"},
    type: String,
    provider: String,
    providerAccountId: String,
    refresh_token: String,
    access_token: String,
    expires_at: Number,
    session_state: {type:String, default:""}
})

export const accountModel = mongoose.model("account",accountSchema);