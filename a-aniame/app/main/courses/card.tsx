import { cn } from "@/lib/utils";
import Image from "next/image";

type Props = {
  title: string;
  id: number;
  imageSrc: string;
  onClick: (id: number) => void;
  disabled?: boolean;
  active?: boolean;
};

export const Card = ({
  title,
  id,
  imageSrc,
  disabled,
  onClick,
}: Props) => {
  const fallbackImage = "/hero.svg"; // Set a fallback image URL here

  console.log("imageSrc in Card: ", imageSrc); // Should show the image URL

  return (
    <div
      onClick={() => onClick(id)}
      className={cn(
        "h-full border-2 rounded-xl border-b-4 hover:bg-black/5 cursor-pointer active:border-b-2 flex flex-col items-center justify-between p-3 pb-6 min-h-[217px] min-w-[200px]",
        disabled && "pointer-events-none opacity-50"
      )}
    >
      <Image
        src={imageSrc || fallbackImage}
        alt={title}
        className="object-cover w-full h-32 rounded-md"
        width={200}
        height={128}
      />
      <h2 className="mt-2 text-xl font-semibold">{title}</h2>
    </div>
  );
};
