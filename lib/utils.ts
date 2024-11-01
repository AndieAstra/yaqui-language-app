import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Function to combine Tailwind classes, resolves conflicting classes
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs)); // Using clsx and twMerge to merge classes
}

// Function to generate an absolute URL, replace with custom logic if needed later
export function absoluteUrl(path: string) {
  // TODO: Replace with your own URL generation logic, if needed
  return `${process.env.NEXT_PUBLIC_APP_URL}${path}`;
}
