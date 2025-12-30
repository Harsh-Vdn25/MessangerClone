'use client'

import { User } from "@prisma/client";
import Image from "next/image";
export const Avatar=({user}:{user:User})=>{
    return (
        <div className="relative">
            <div className="
                relative
                inline
                rounded-full
                overflow-hidden
                h-9
                w-9
                md:h-11
                md:w-11
            ">
                <Image
                    alt="Avatar"
                    src={user?.image || '/placeholder.jpg'}
                    fill
                />
            </div>
        </div>
    )
}