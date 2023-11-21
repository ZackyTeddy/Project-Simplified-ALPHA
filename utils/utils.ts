import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { GRADIENTS } from "./data";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function randomGradientBg() {
  function randomColor() {
    return '#' + Math.floor(Math.random()*16777215).toString(16);
  }
  let res = [randomColor(), randomColor(), randomColor()];
  console.log('res', res)
  return res;
}
