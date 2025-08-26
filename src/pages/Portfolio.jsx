import React from 'react';

const data = [
  {title: "Portfolio App", description: "React JS & Tailwind CSS", image: "https://res.cloudinary.com/dofovybxu/image/upload/v1740456298/portfolio_ztyjhw.jpg", url: "https://acoder-portfolio.vercel.app"},
  {title: "Pick & Deliver Service", description: "React JS & Tailwind CSS", image: "https://res.cloudinary.com/dofovybxu/image/upload/v1740456301/service_onqegb.jpg", url: "https://igt-errand-service.vercel.app"},
  {title: "Authantication App", description: "MERN Full Stack", image: "https://res.cloudinary.com/dofovybxu/image/upload/v1740456299/auth_ecmjrt.jpg", url: "https://mern-authentication-app-virid.vercel.app"},
  {title: "E-Commerce App", description: "MERN Full Stack", image: "https://res.cloudinary.com/dofovybxu/image/upload/v1756183092/e-commerce_d6lxhw.jpg", url: "https://mern-ecommerce-frontend-lovat.vercel.app"}
]

const Portfolio = () => {
  return (
    <div className='w-[90%] mx-auto home pt-20 md:pt-24'>
      <h1 className='text-white text-center text-xl font-semibold md:text-4xl md:font-bold underline underline-offset-4 decoration-red-600'>Portfolio</h1>

      <div className='flex items-center justify-center flex-wrap gap-5 my-5 lg:mt-10'>
        {data.map((item, i) => {
          return  <div key={i} className='bg-[rgb(108,78,232)] h-72 w-80 lg:w-96 pt-2 cursor-pointer group overflow-hidden rounded-sm'>
                    <div className={`bg-center bg-cover h-72 w-80 lg:w-96 hover:scale-125 duration-300 transition-all ease-linear`} style={{backgroundImage: `url(${item.image})`}}>
                      <div className='w-80 h-72 lg:w-96 hidden group-hover:block' style={{background: "rgba(108,78,232,0.8)"}}>
                        <div className='flex items-center justify-center h-full flex-col home text-white text-lg font-semibold relative'>
                            <h1>{item.title}</h1>
                            <p>{item.description}</p>
                            <a href={item.url} target='_blank' className='absolute bottom-10 right-10 bg-green-500 py-2 px-3 text-sm rounded-md'>Live Preview</a>
                        </div>
                      </div>
                    </div>
                  </div>
        })}
      </div>
    </div>
  )
}

export default Portfolio
