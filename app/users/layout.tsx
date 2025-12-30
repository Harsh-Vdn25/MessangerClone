import { ReactNode } from "react";
import {Sidebar} from '../components/sidebar/Sidebar';
import { getUser } from "../actions/getUsers";
export default async function Userslayout({children}:{children: ReactNode}){
    const users = await getUser();

    return (
        //@ts-expect-error 
        <Sidebar>
            <div className="h-full">
                <UserList items={users}/>
                {children}
            </div>
        </Sidebar>
    );
}