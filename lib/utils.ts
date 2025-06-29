import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getCount<T extends { [key: string]: unknown }>(
  arr: T[],
  attribute: keyof T,
  value: string
): number {
  return arr.filter((c) => c[attribute] === value).length;
}
