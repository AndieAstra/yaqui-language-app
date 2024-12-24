import {cn} from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"
import { SidebarItem } from "./sidebar-item";
import { Loader } from "lucide-react";
// import {
// ClerkLoading
// ClerkLoaded
//UserButton
// } from "@clerk/nextjs";

type Props = {
   className?: string;
};

export const Sidebar = ({ className }: Props) => {
   return (
      <div className={cn("flex h-full lg:w-[256px] lg:fixed left-0 top-0 px-4 border-r-2 flex-col",
         className,
      )}>

         <Link href="/learn">
         <div className="pt-8 pl-4 pb-7 flex items-center gap-x-3">
         
                     <Image src="/mascot.svg" height={40} width={40} alt="Mascot"/> 
         
                     <h1 className="text-2xl font-extrabold text-green-600 tracking-wide">A'aniame</h1>
         
               </div>
         </Link>

      <div className="flex flex-col gap-y-2 flex-1">
         
         <SidebarItem 
         label="Learn" 
         iconSrc="/learn.svg" 
         href="/learn"/>

         <SidebarItem 
         label="Leaderboard" 
         iconSrc="/leaderboard.svg" 
         href="/leaderboard"/>

         <SidebarItem 
         label="Quests" 
         iconSrc="/quests.svg" 
         href="/quests"/>

         <SidebarItem 
         label="Shop" 
         iconSrc="/shop.svg" 
         href="/shop"/>



{/*  This is where the user profile icon will be located */}
         <div className="padding-4">
            {/* Clerkloading */}
         <Loader className="h-5 w-5 text-muted-foreground animate-spin"/>
          {/* Clerkloading */}

         {/* Clerkloaded */}
            {/* UserButton afterSignOutUrl="/" */}
         {/* Clerkloaded */}
         </div>

      </div>
      </div>
   );
};