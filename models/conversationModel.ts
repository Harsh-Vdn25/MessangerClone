import mongoose from 'mongoose';

interface conversationType {
    _id: Schema.Types.ObjectId;
    createdAt: Date();
    lastMessageAt: Date();
    name: string;
    isGroup?: Boolean;
    userIds: Types.ObjectId[];
}

const conversationSchema = new Schema <conversationType> ({
    createdAt: Date,
    lastMessageAt: Date
    name: String,
    isGroup: {type:Boolean,default:false},
    userIds: [{type: Schema.Types.ObjectId , ref: "user"}],
},{
    timestamps: true
})

export const conversationModel = mongoose.model("conversation",conversationSchema);