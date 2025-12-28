import { ReactNode } from "react";
import { DesktopSidebar } from "./DesktopSidebar";

export async function Sidebar(children:ReactNode){
    <div className="h-full">
        <DesktopSidebar/>
        <main className="lg:pl-20 h-20">
            {children}
        </main>
    </div>
}