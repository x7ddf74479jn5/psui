import clsx, { ClassValue } from "clsx";
import React, { isValidElement } from "react";
import { twMerge } from "tailwind-merge";

export function findSubcomponent(
  children: React.ReactNode | React.ReactNode[],
  displayName: string
) {
  return React.Children.map(children, (child) => {
    if (!isValidElement(child)) return null;
    // @ts-ignore
    return child?.type?.displayName === displayName ? child : null;
  });
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getKeys = Object.keys as <T extends object>(
  obj: T
) => Array<keyof T>;
