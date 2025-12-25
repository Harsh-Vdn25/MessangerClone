"use client"
import clsx from 'clsx';
import { FC } from 'react';
import {
    FieldErrors,
    UseFormRegister,
} from 'react-hook-form';
interface InputProps{
    label: string;
    id: string;
    type?: string;
    required?: boolean;
    disabled?: boolean;
    register: UseFormRegister<FieldErrors>;
    errors: FieldErrors;
}
export const Input= ({
    label,
    id,
    type,
    required,
    register,
    errors,
    disabled
}:InputProps) => {
  return (
    <div>
        <label htmlFor={id}
        className='
            block
            text-sm
            font-medium
            leading-6
            text-shadow-gray-900'
        >{label}</label>
        <div className="mt-2">
            <input 
                id={id}
                type={type}
                autoComplete={id}
                disabled={disabled}
                {...register(id,{ required })}
                className={clsx(`
                    form-input
                    block
                    w-full
                    rounded-md
                    border
                    border-gray-600 
                    py-1.5 px-1
                    text-gray-900
                    `, errors[id] && "focus-ring-500")}
            />
        </div>
    </div>
  )
}
