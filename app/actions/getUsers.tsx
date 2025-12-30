import {prisma} from '../libs/db';
import getSession from './getSession';
export const getUser=async()=>{
    const session = await getSession();

    if (!session?.user?.email){
        return [];
    }

    try{
        const user = await prisma.user.findMany({
            orderBy:{
                createdAt: 'desc'
            },
            where:{
                NOT: {
                    email: session.user.email
                }
            }
        })
        return user;
    }catch(err){
        return [];
    }
}