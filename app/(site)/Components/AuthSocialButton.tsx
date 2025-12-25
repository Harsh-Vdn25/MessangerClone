import {IconType} from 'react-icons';

interface AuthSocialButtonProps {
    Icon: IconType;
    onClick:()=>void;
}
export const AuthSocialButton=({Icon,onClick}:AuthSocialButtonProps)=>{
    return (
        <button
            type='button'
            onClick={onClick}
            className="
                inline-flex
                w-full
                justify-center
                rounded-md
                bg-white
                px-4 py-2 
                text-gray-600
                shadow-sm  
                hover:bg-gray-50
                focus:outline-offset-0 
            "
        >
            <Icon/>
        </button>
    );
}