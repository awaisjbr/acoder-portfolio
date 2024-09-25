import React from 'react';
import { FaMapSigns } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";



const Contact = () => {
  return (
    <div className='flex flex-col items-center mt-5 home'>
      <div className='my-2 text-2xl font-semibold'>
        <p>Contact Me</p>
      </div>

      <div className='flex flex-col md:flex-row gap-5 w-full text-sm font-semibold'>
        <div className='flex-1 flex flex-col gap-2.5 items-center'>
        <div className='flex items-center justify-center gap-3 flex-col bg-slate-200 w-full md:w-[80%] p-2 text-[rgb(108,78,232)]'>
          <div className='h-10 w-10 bg-slate-500 flex items-center justify-center rounded-full'>
          <FaMapSigns className='text-yellow-400'/>
          </div>
          <p>ADDRESS</p>
          <p>Zip#38000 , Faisalabd, Pakistan.</p>
        </div>
        <div className='flex items-center justify-center gap-3 flex-col bg-slate-200 w-full md:w-[80%] text-[rgb(108,78,232)] p-2'>
          <div className='h-10 w-10 bg-slate-500 flex items-center justify-center rounded-full'>
          <FaPhoneAlt className='text-yellow-400'/>
          </div>
          <p>CONTACT NUMBER</p>
          <p className='flex items-center gap-3'><span className='text-green-600'><FaWhatsappSquare size={25} /></span>+92 319 8566946</p>
        </div>
        <div className='flex items-center justify-center gap-3 flex-col bg-slate-200 w-full md:w-[80%] text-[rgb(108,78,232)] p-2'>
          <div className='h-10 w-10 bg-slate-500 flex items-center justify-center rounded-full'>
          <IoIosSend className='text-yellow-400'/>
          </div>
          <p>EMAIL</p>
          <p>awaisjbr@gmail.com</p>
        </div>
        <div className='flex items-center justify-center gap-3 flex-col bg-slate-200 w-full md:w-[80%] text-[rgb(108,78,232)] p-2'>
          <div className='h-10 w-10 bg-slate-500 flex items-center justify-center rounded-full'>
          <FaLinkedin className='text-yellow-400'/>
          </div>
          <p>LINKEDIN</p>
          <a className='bg-[rgb(108,78,232)] text-white p-2 rounded-md' target='_blank' href="https://www.linkedin.com/in/muhammad-awais-790116154/">Check Linkedin</a>
        </div>
        </div>

        <div className='w-full bg-slate-400 items-center mt-1 mb-10 flex-1'>
        <p className='text-center text-xl font-bold underline underline-offset-8 my-5'>Send Message</p>
        <form action="https://api.web3forms.com/submit" className='flex flex-col gap-5 my-2 items-center' method='POST'>
          <input type="text" className='hidden' name="access_key"  value={"9884a3b5-7a8d-4c0f-864f-1488c989b19a"}/>
          <input className='border h-10 w-[80%] p-2 outline-none text-slate-500' type="text" name='name' placeholder='Your Name' autoComplete='off'/>
          <input className='border h-10 w-[80%] p-2 outline-none text-slate-500' type="email" name='email' placeholder='Your Email' autoComplete='off'/>
          <input className='border h-10 w-[80%] p-2 outline-none text-slate-500' type="text" name="subject" placeholder='Subject...' autoComplete='off'/>
          <textarea className='w-[80%] p-2 outline-none text-slate-500' rows={10} name="message" placeholder='Message'/>
          <button className='bg-[rgb(108,78,232)] text-white p-2 rounded-md' type='submit'>Send Message</button>
        </form>
      </div>
      </div>
    </div>
  )
}

export default Contact
