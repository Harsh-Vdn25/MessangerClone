import mongoose,{Schema} from 'mongoose';

interface UserType {
    _id: Schema.Types.ObjectId;
    name: string;
    email: string;
    password: string;
    image?: string;
    createdAt: Date();
}
const userSchema = new Schema<UserType>({
    name: String,
    email: {type: String,unique: true,required: true},
    password: {type: String, required: true},
    image: {type: String,default:""}
    createdAt: {type: Date,default:Date.now}
},{
    timestamps: true
});

export const userModel = mongoose.model('user',userSchema);