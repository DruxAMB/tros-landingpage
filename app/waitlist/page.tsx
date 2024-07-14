"use client";
import Input from '@/components/Input'
import axios, { AxiosError } from 'axios';
import React, { useCallback, useState } from 'react'
import { FaEnvelope } from 'react-icons/fa';
import { FaPhoneVolume } from 'react-icons/fa6';
import { MdAccountCircle } from 'react-icons/md';

const Page = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setNumber] = useState("");
    const submit = useCallback(async()=>{
        try{
            if(firstName === "" || lastName === "" || email === "" || phoneNumber === ""){
                alert("Please fill all fields");
                return;
            }
        await axios.post("https://tros-api.onrender.com/api/v1/account/waitlist",{firstName, lastName, email, phoneNumber});
        }catch(error: any){
            if(error instanceof AxiosError){
                error.status !== 500 && error.response ? alert(error.response.data.message) : alert("Internal Server Error! Try again");
            }
            return;
        }
        setFirstName(""); setLastName(""); setEmail(""); setNumber("");
        alert("Thank you for joining the waitlist");
    }, [firstName, lastName, email, phoneNumber])
    return (
        <div className="rounded-lg md:w-[60dvw] h-auto shadow-lg bg-white-100 mx-auto md:py-10 md:px-20 p-5 flex flex-col items-center justify-center bg-blue-50">
            <div className="text-4xl font-bold">
                Join the waitlist
            </div>
            <div className="font-semibold text-center">Fill the form to be a part of our amazing <span className="text-green-700">ecosystem</span></div>
            <div className="mt-14 flex flex-col gap-2 w-full">
                <div className='flex flex-row w-full gap-5'>
                    <Input
                        id='firstName'
                        label='First Name'
                        value={firstName}
                        onChange={(event: any)=>setFirstName(event.target.value)}
                        type="text"
                        icon={<MdAccountCircle size={30} />}
                    />
                    <Input
                        id='lastName'
                        label='Last Name'
                        value={lastName}
                        onChange={(event: any)=>setLastName(event.target.value)}
                        icon={<MdAccountCircle size={30} />}
                        type="text"
                    />
                </div>
                <Input
                    id='email'
                    label='Email'
                    value={email}
                    onChange={(event: any)=>setEmail(event.target.value)}
                    icon={<FaEnvelope size={25} />}
                    type="email"
                />
                <Input
                    id='phoneNumber'
                    label='Phone phoneNumber'
                    value={phoneNumber}
                    onChange={(event: any)=>setNumber(event.target.value)}
                    icon={<FaPhoneVolume size={25} />}
                    type="text"
                />
            </div>
            <button onClick={submit} className="text-center py-3 w-full bg-green-600 rounded-md hover:bg-opacity-90 mt-7 font-semibold text-blue-50">
                Join Waitlist
            </button>
        </div>
    )
}

export default Page
