import React, { useState } from 'react'
import { TbSend } from "react-icons/tb";

const ContactForm = () => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    })
    function onChangeHandler(event){
        const {name, value} = event.target;
        setFormData((prev) => {
            return{
                ...prev,
                [name]: value,
            }
        })
    }
    function submitHandler(e){
        e.preventDefault();
        console.log("Form Data : ",formData);
        //reset fields
        setFormData({name:"",email: "", subject: "", message: ""});
    }

  return (
    <div className='lg:w-2/3 lg:mx-auto w-full relative'>
        <form  onSubmit={submitHandler} className='flex flex-col'>
            <div className='relative flex flex-col gap-8'>
                <div className='flex flex-col gap-4'>
                    <input 
                        required
                        type="text" 
                        name="name"
                        value={formData.name}
                        onChange={onChangeHandler}
                        placeholder="Enter your name"
                        className='w-full p-4 text-[18px] rounded-[5px] font-medium shadow-[2px_2px_10px_#1f1f1f]
                        outline-purple-700'
                    />
                    <input 
                        required
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={onChangeHandler}
                        placeholder="Enter your email address"
                        className='w-full p-4 text-[18px] rounded-[5px] font-medium shadow-[2px_2px_10px_#1f1f1f]
                        outline-purple-700'
                    />
                    <input 
                        required
                        type="text" 
                        name="subject" 
                        value={formData.subject}
                        onChange={onChangeHandler}
                        placeholder="Enter your subject"
                        className='w-full p-4 text-[18px] rounded-[5px] font-medium shadow-[2px_2px_10px_#1f1f1f]
                        outline-purple-700'
                    />
                </div>
                <div>
                    <textarea
                        required
                        name="message"
                        value={formData.message}
                        cols={30} rows={10}
                        onChange={onChangeHandler}
                        placeholder="Enter your message"
                        className='w-full p-6 text-[18px] rounded-[5px] font-medium shadow-[2px_2px_10px_#1f1f1f]
                        outline-purple-700 h-64'
                    />    
                </div> 
            </div>

            <button 
                type="submit"
                className='px-4 py-2 bg-[#9929fb] rounded-[4px] text-white font-semibold md:text-[20px] my-6
                relative read-btn z-10 hover:text-gray-900 hover:scale-[0.9] transition-transform duration-300 border-2 border-purple-700 self-center flex items-center gap-2'
            >
                Send Message
                <TbSend/>
            </button>
        </form>
    </div>
  )
}

export default ContactForm