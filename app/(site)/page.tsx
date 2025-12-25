import Image from "next/image";
import messangerLogo from "../../public/logo.png"
import { AuthForm } from "./Components/AuthForm";
export default function App() {
  return (
    <div className="
        flex
        flex-col
        min-h-full
        justify-center
        items-center 
        py-12
        sm:px-6
        lg:px-8
        bg-gray-100
    ">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <Image
                    alt="Logo"
                    src={messangerLogo}
                    height="48"
                    className="mx-auto w-auto"
                    width="48"
                />
                <h2 className="
                    mt-6
                    text-center
                    font-bold
                    text-3xl 
                    text-gray-900
                ">
                    Sign in to your account
                </h2>
            </div>

            <div>
                <AuthForm/>
            </div>
    </div>
  );
}
