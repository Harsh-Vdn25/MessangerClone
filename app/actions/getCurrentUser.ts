import {prisma} from '../libs/db';
import getSession from './getSession';
//This gonna be a server action so better no err return
export const getCurrentUser = async()=>{
    try{
        const session = await getSession();

        if(!session?.user?.email){
            return null;
        }

        const currentUser = await prisma.user.findUnique({
            where:{
                email: session.user.email as string
            }
        })

        if(!currentUser){
            return null;
        }
        return currentUser;
    }catch(err){
        return null;
    }
}