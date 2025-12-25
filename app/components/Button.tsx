"use client"
import clsx from 'clsx';
import { FC } from 'react';
interface ButtonProps {
    type: 'button' | 'submit' | undefined;
    children?: React.ReactNode;
    secondary?: boolean;
    disabled?: boolean;
    onClick?: ()=>void;
}
export const Button=({
    type,
    children,
    secondary,
    disabled,
    onClick,
}:ButtonProps)=>{
    return (
        <button
        onClick={onClick}
        type={type}
        disabled={disabled}
        className={clsx(`
            w-full //Change if needed
            flex 
            justify-center
            rounded-md
            px-3 py-2
            text-sm
            font-semibold
            focus-visible:outline
            focus-visible:outline-2
            focus-visible:outline-offset-2
            cursor-pointer
        `,
        disabled && 'opacity-50 cursor-default',
        secondary ? "text-gray-900": "text-white" ,
        !secondary && "bg-sky-500 hover:bg-sky-600 focus-visible:outline-sky-600")}>
            {children}
        </button>
    );
}