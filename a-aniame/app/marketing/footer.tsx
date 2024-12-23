import Image from "next/image"
import { Button } from "@/components/ui/button"

export const Footer = () => {
   return (
      <footer className="hidden lg:block h-20 w-full border-t-2 border-slate-200 p-2">

<div className="hidden lg:block h-20 w-full border-t-2 border-slate-200 p-2">

<div className="max-w-screen-lg mx-auto flex items-center justify-evenly h-full">

<Button size="lg" variant="defaultOutline" className="w-full">
      <Image
      src="/yo.svg"
      alt="Yoem Noki"
      height={32}
      width={40}
      />
   Yoem Noki
</Button>

<Button size="lg" variant="defaultOutline" className="w-full">
      <Image
      src="/mx.svg"
      alt="Spanish"
      height={32}
      width={40}
      />
   Espanol
</Button>

<Button size="lg" variant="defaultOutline" className="w-full">
      <Image
      src="/us.svg"
      alt="English"
      height={32}
      width={40}
      />
   English
</Button>

</div>

</div>




      </footer>
   )
}