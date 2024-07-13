import React, { useState } from "react";

interface InputProps{
    id: string;
    onChange: any;
    value: string,
    label: string,
    icon?: React.ReactNode,
    type?: string
}


const Input: React.FC<InputProps> = ({
    id,
    onChange,
    value,
    label,
    type,
    icon
})=>{
    const [emailFocused, setEmailFocused] = useState(false);
    return(
        <div className={`relative flex-1`}>
            <div className="absolute top-4 left-2 text-neutral-400">
            {icon} 
            </div>
            <input 
            value={value}
            type={type}
            onChange={onChange}
            onFocus={()=>{setEmailFocused(true)}}
            onBlur={()=>{setEmailFocused(false)}}
            id={id}
            required
            className={`rounded-md ps-12 pe-6 pt-6 pb-1 border-2 border-neutral-300 text-neutral-700 focus:outline-none focus:ring-0 peer w-full`}
            placeholder={`${id === "email" && emailFocused ? "example@example.com" : ""}`}
            />
            <label className= {`absolute text-zinc-800 duration-150 transaform -translate-y-3 scale-75 top-[18px] z-10 origin-[0] left-12 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3`}
            htmlFor={id}>
                {label}
            </label>
        </div>
        
    )
}

export default Input;