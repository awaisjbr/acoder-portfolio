import React, { useState } from 'react';
import { FaMapSigns } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import Loading from '../components/Loading';



const Contact = () => {
  const phoneNumber = "923198566946";
  const message = encodeURIComponent("Hey there! I'am intersted in your on-demand pick & deliver service!");

  const handleWhatsAppClick = () => {
    window.open(`https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`, "_blank");
  };
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange  = (e) => {
    const {name, value} = e.target;
    setFormData({...formData, [name]:value})
  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    setLoading(true);

    const formURL = 'https://api.web3forms.com/submit';
    const data = {access_key: '9884a3b5-7a8d-4c0f-864f-1488c989b19a', // Replace with your API key
      ...formData,};

    try {
      const response = await fetch(formURL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        navigate('/success'); // Navigate to custom success page
      } else {
        throw new Error('Form submission failed.');
      }
    } catch (err) {
      alert(err.message);
    } finally{
      setLoading(false);
    }
  };

  if(loading){
    return <Loading />
  };


  return (
    <div className='flex flex-col items-center mt-5 home pt-20'>
    <div className='my-2 text-2xl font-semiboldb text-white'><p>Contact Me</p></div>

    <div className='flex flex-col md:flex-row gap-5 text-sm font-semibold w-[90%]'>
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
        <p className='flex items-center gap-3'><span className='text-green-600 cursor-pointer'><FaWhatsappSquare size={25} onClick={handleWhatsAppClick}/></span><a href="tel:+923198566946">+92 319 8566946</a></p>
      </div>
      <div className='flex items-center justify-center gap-3 flex-col bg-slate-200 w-full md:w-[80%] text-[rgb(108,78,232)] p-2'>
        <div className='h-10 w-10 bg-slate-500 flex items-center justify-center rounded-full'>
        <IoIosSend className='text-yellow-400'/>
        </div>
        <p>EMAIL</p>
        <a href="mailto:awaisjbr@gmail.com">awaisjbr@gmail.com</a>
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
      <form onSubmit={handleSubmit} className='flex flex-col gap-5 my-2 items-center'>
        {/* <input type="text" className='hidden' name="access_key"  value={"9884a3b5-7a8d-4c0f-864f-1488c989b19a"} onChange={() => ""}/> */}
        <input className='border h-10 w-[80%] p-2 outline-none text-slate-500' type="text" name='name' onChange={handleChange} value={formData.name} placeholder='Your Name' autoComplete='off' required/>
        <input className='border h-10 w-[80%] p-2 outline-none text-slate-500' type="email" name='email' onChange={handleChange} value={formData.email} placeholder='Your Email' autoComplete='off' required/>
        <input className='border h-10 w-[80%] p-2 outline-none text-slate-500' type="text" name="subject" onChange={handleChange} value={formData.subject} placeholder='Subject...' autoComplete='off' required/>
        <textarea className='w-[80%] p-2 outline-none text-slate-500' rows={10} name="message" onChange={handleChange} value={formData.message} placeholder='Message' autoComplete='off' required/>
        <button className='bg-[rgb(108,78,232)] text-white p-2 rounded-md' type='submit'>Send Message</button>
      </form>
    </div>
    </div>
    <div onClick={handleWhatsAppClick} className="fixed bottom-8 right-6 bg-white rounded-md text-5xl lg:text-7xl cursor-pointer text-green-500">
        <FaWhatsappSquare />
    </div>
  </div>
  )
}

export default Contact
