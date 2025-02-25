import React from 'react';
import {FiPhoneCall} from "react-icons/fi";
import {FaMapLocation} from "react-icons/fa6"
import { HiOutlineMailOpen } from "react-icons/hi";

const Footer = () => {
  return (
    <div>
      <FiPhoneCall className='text-purple-500'/>
      <FaMapLocation />
      {/* <FaVoicemail /> */}
    </div>
  )
}

export default Footer
