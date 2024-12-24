import { StickyWrapper } from "@/components/sticky-wrapper"
import { FeedWrapper } from "@/components/feed-wrapper"
import { UserProgress } from "@/components/user-progress"

import { Header } from "./header"

export default function Home() {

   return(
   
   <div className="flex flex-row-reverse gap-[48px] px-6">

    <StickyWrapper>
      <UserProgress
      activeCourse={{ title: "Spanish", imageSrc: "/mx.svg" }}
      hearts={5}
      points={100}
      hasActiveSubscription={false}
      />
      </StickyWrapper>

      <FeedWrapper>
      <Header title="Spanish"/>
         <div className="space-y-4">


         </div>
      </FeedWrapper>

   </div>
   
   )
   
   }
   