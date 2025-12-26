import mongoose from 'mongoose';

interface messageType { 
    _id: Schema.Types.ObjectId;
    body: string;
    image?: string;
    createdAt?: Date;
    seenIds: Schema.Types.ObjectId[];
    conversationId: Schema.Types.ObjectId;
    senderId: Schema.Types.ObjectId;
}

const messageSchema = new Schema<messageType>({
    body: String,
    image: {type:String, default: " "},
    createdAt: {type: Date},
    seenIds: [{type: Schema.Types.ObjectId, ref: "user"}],
    conversationId: {type: Schema.Types.ObjectId, ref: "conversation"},
    senderId: {type: Schema.Types.ObjectId ,ref: "user"}
},{
    timestamps:true
})

export const messageModel = mongoose.model("message",messageSchema);