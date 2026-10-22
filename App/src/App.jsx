
import React from 'react'
import { useNavigate } from 'react-router-dom'


const App = () => {

    const navigate = useNavigate()

  return (
    <div className='px-4 sm:px-20 xl:px-32 relative inline-flex flex-col w-full justify-center bg-[url(/gradientBackground.png)] bg-cover bg-no-repeat min-h-screen'>

      <button className='bg-white inline-block text-emerald-600 rounded-md border border-emerald-600 hover:bg-emerald-50 hover:scale-105 active:scale-95 transition duration-200 cursor-pointer mx-110 mb-10'>
       Trusted by 100+ Global Enterprises
     </button>

        <div className='text-center mb-6'>
            <h1 className='text-3xl sm:text-5xl font-bold'>Innovating Your <br /> <span className='text-blue-400'>Digital Futur</span></h1>

            <p className='mt-4 max-w-xs sm:max-w-lg 2xl:max-w-xl m-auto max-sm:text-xs text-gray-600'>We provide cutting-cetting IT solutions, cloud infrastrcture, and custom sofware designed to scale your business and secure yor digital assets.</p>
        </div>

        <div className='flex flex-wrap justify-center gap-4 text-sm max-sm:text-xs'>
            <button onClick={()=> navigate('/ai')} className='bg-blue-500 text-amber-50 px-10 py-3 rounded-lg hover:scale-102 active:scale-95 transition cursor-pointer'> Geting Started now </button>

            <button className='bg-white px-10 py-3 rounded-lg border border-blue-400 hover:scale-102 active:scale-95 transition cursor-pointer'>View Our Service</button>
        </div>



      <div className="w-full py-10 bg-gray-50 flex flex-col items-center gap-8">
    
        <div className="flex items-center w-full max-w-3xl">
        <div className="flex-1 h-[1px] bg-gray-300"></div>
        
        <p className="px-4 text-gray-500 font-medium whitespace-nowrap">
          Powering Industry Leaders
        </p>
        
        <div className="flex-1 h-[1px] bg-gray-300"></div>
       </div>

     
      <div className="flex items-center justify-center gap-10 opacity-60">
        <img src="/logo1.png" alt="logo1" className="h-8" />
        <img src="/logo2.png" alt="logo2" className="h-8" />
        <img src="/logo3.png" alt="logo3" className="h-8" />
        <img src="/logo4.png" alt="logo4" className="h-8" />
      </div>

     </div>
        
      
    </div>
  )
}

export default App
