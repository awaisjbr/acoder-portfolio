import React from 'react';
import bg from "../assets/service.jpg";

const Portfolio = () => {
  return (
    <div className='w-[90%] mx-auto home pt-20 md:pt-24'>
      <h1 className='text-white text-center text-xl font-semibold md:text-4xl md:font-bold underline underline-offset-4 decoration-red-600'>Portfolio</h1>

      <div className='flex items-center justify-center flex-wrap gap-5 my-5 lg:mt-10'>

        <div className='bg-[rgb(108,78,232)] h-72 w-80 lg:w-96 pt-2 cursor-pointer group overflow-hidden rounded-sm'>
          <div className='bg-[url("https://res.cloudinary.com/dofovybxu/image/upload/v1740456298/portfolio_ztyjhw.jpg")] bg-center bg-cover h-72 w-80 lg:w-96 hover:scale-125 duration-300 transition-all ease-linear'>
            <div className='w-80 h-72 lg:w-96 hidden group-hover:block' style={{background: "rgba(108,78,232,0.8)"}}>
              <div className='flex items-center justify-center h-full flex-col home text-white text-lg font-semibold relative'>
                  <h1>Portfolio App</h1>
                  <p>React JS</p>
                  <a href="https://acoder-portfolio.vercel.app/" target='_blank' className='absolute bottom-10 right-10 bg-green-500 py-2 px-3 text-sm rounded-md'>Live Preview</a>
              </div>
            </div>
          </div>
        </div>

        <div className='bg-[rgb(108,78,232)] h-72 w-80 lg:w-96 pt-2 cursor-pointer group overflow-hidden rounded-sm'>
          <div className='bg-[url("https://res.cloudinary.com/dofovybxu/image/upload/v1740456301/service_onqegb.jpg")] bg-center bg-cover h-72 w-80 lg:w-96 hover:scale-125 duration-300 transition-all ease-linear'>
            <div className='w-80 h-72 lg:w-96 hidden group-hover:block' style={{background: "rgba(108,78,232,0.8)"}}>
              <div className='flex items-center justify-center h-full flex-col home text-white text-lg font-semibold relative'>
                  <h1>Pick & Deliver Service</h1>
                  <p>React JS & Tailwind CSS</p>
                  <a href="https://igt-errand-service.vercel.app/" target='_blank' className='absolute bottom-10 right-10 bg-green-500 py-2 px-3 text-sm rounded-md'>Live Preview</a>
              </div>
            </div>
          </div>
        </div>

        <div className='bg-[rgb(108,78,232)] h-72 w-80 lg:w-96 pt-2 cursor-pointer group overflow-hidden rounded-sm'>
          <div className='bg-[url("https://res.cloudinary.com/dofovybxu/image/upload/v1740456299/auth_ecmjrt.jpg")] bg-center bg-cover h-72 w-80 lg:w-96 hover:scale-125 duration-300 transition-all ease-linear'>
            <div className='w-80 h-72 lg:w-96 hidden group-hover:block' style={{background: "rgba(108,78,232,0.8)"}}>
              <div className='flex items-center justify-center h-full flex-col home text-white text-lg font-semibold relative'>
                  <h1>Authantication App</h1>
                  <p>MERN Stack</p>
                  <a href="https://acoder-portfolio.vercel.app/" target='_blank' className='absolute bottom-10 right-10 bg-green-500 py-2 px-3 text-sm rounded-md'>Live Preview</a>
              </div>
            </div>
          </div>
        </div>

        <div className='bg-[rgb(108,78,232)] h-72 w-80 lg:w-96 pt-2 cursor-pointer group overflow-hidden rounded-sm'>
          <div className='bg-[url("https://res.cloudinary.com/dofovybxu/image/upload/v1740456309/food_zbthkz.jpg")] bg-center bg-cover h-72 w-80 lg:w-96 hover:scale-125 duration-300 transition-all ease-linear'>
            <div className='w-80 h-72 lg:w-96 hidden group-hover:block' style={{background: "rgba(108,78,232,0.8)"}}>
              <div className='flex items-center justify-center h-full flex-col home text-white text-lg font-semibold relative'>
                  <h1>Food Delivery App</h1>
                  <p>React JS & Firebase 9</p>
                  <a href="https://food-delivery-app-jet-seven.vercel.app/" target='_blank' className='absolute bottom-10 right-10 bg-green-500 py-2 px-3 text-sm rounded-md'>Live Preview</a>
              </div>
            </div>
          </div>
        </div>
     
      </div>
    </div>
  )
}

export default Portfolio
