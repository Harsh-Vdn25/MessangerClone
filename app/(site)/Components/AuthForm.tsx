"use client"
import { useEffect, useState } from "react"
import { Variant } from "../helper/types";
import {  FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { Input } from "@/app/components/Input";
import {Button} from '@/app/components/Button'
import {AuthSocialButton} from './AuthSocialButton'
import { BsFacebook, BsGithub, BsGoogle } from "react-icons/bs";
export const AuthForm = () => {
    const [variant,setVariant] = useState<Variant>('LOGIN');
    const [isLoading,setIsLoading] = useState(false);

    function changeEntryType(){
        if( variant === "LOGIN" ){
            setVariant("REGISTER");
        }else{
            setVariant("LOGIN");
        }
    }
    const {
        register,
        handleSubmit,
        formState:{
            errors
        }
    } = useForm <FieldValues>({
        defaultValues:{
            name : "",
            email : "",
            password : ""
        }
    })
    const onSubmit:SubmitHandler<FieldValues> = (data) =>{
        setIsLoading(true);
        if( variant === "REGISTER" ){
            
        }
        if( variant === "LOGIN"){
            
        }
    }
    const socialAction=(action:string)=>{
        setIsLoading(true);

    }
    return (
        <div 
            className="
            mt-8 
            sm:mx-auto 
            sm:w-full
            sm:max-w-md
        ">
            <div
            className="
                bg-white
                px-4
                py-8
                shadow
                sm:rounded-lg
                sm:px-10
            ">
                <form 
                className="space-y-6"
                onSubmit={handleSubmit(onSubmit)}>
                { variant ==="REGISTER" && (
                    <Input 
                    label="Name" 
                    register={register} 
                    id="name" 
                    errors={errors}
                />
                )}
                <Input 
                    label="Email" 
                    register={register} 
                    id="email" 
                    errors={errors}
                />
                <Input 
                    label="Password" 
                    register={register} 
                    id="password" 
                    errors={errors}
                />
                <div>
                    <Button //No on submit needed cuz you have given the type 
                        onClick= {onSubmit}
                        type= 'submit'
                    >
                        { variant === "LOGIN" ? "Sign in" : "Register"}
                    </Button>
                </div>
                </form>
                <div className="mt-6">
                    <div className="relative">
                        <div className="w-full border-t border-gray-300 ">
                            <p className= " text-sm text-gray-500">Or continue with</p>
                        </div>
                        <div className="mt-6 flex gap-2">
                                <AuthSocialButton
                                    Icon={BsGithub}
                                    onClick={()=>socialAction('github')}
                                />
                                <AuthSocialButton
                                    Icon={BsGoogle}
                                    onClick={()=>socialAction('google')}
                                />
                        </div>
                        <div 
                            className="
                                flex gap-2
                                justify-center
                                text-sm
                                mt-6
                                px-2
                                text-gray-500
                            ">
                            <div>
                                { variant === 'LOGIN' ? 'New to messanger?' : 'Already have an account?'}
                            </div>
                            <div 
                                onClick={changeEntryType}
                                className="
                                    text-gray-500
                                    hover:text-sky-500
                                    cursor-pointer
                                ">
                            {variant === 'LOGIN' ? 'Create an account' : 'Login' }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}