import { ReactNode } from "react";
import {Sidebar} from '../components/Sidebar';
export default async function Userslayout(children:ReactNode){
    return (
        //@ts-expect-error 
        <Sidebar>
            <div className="h-full">
                {children}
            </div>
        </Sidebar>
    );
}