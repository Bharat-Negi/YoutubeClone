import React from 'react'
import { IoHomeOutline } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";

function sidebar() {
    const sidebarItems = [
        {
            id: 1,
            name: "Home",
            icon: <IoHomeOutline />
        },
        {
            id: 2,
            name: "Shorts",
            icon: <IoHomeOutline />
        },
        {
            id: 3,
            name: "Subscription",
            icon: <IoHomeOutline />
        }
    ]

  return (
    <div className='px-6 w-[18%] h-[calc(100vh-4.5rem)] overflow-y-scroll overflow-x-hidden'>
        <div className='space-y-3 items-center'>
            {
                sidebarItems.map((item)=>{
                    return(
                        <div className='flex items-center space-x-6 hover:bg-gray-300 duration-200 rounded-xl p-1' key={item.id}>
                            <div className='text-xl cursor-pointer'>
                                {item.icon}
                            </div>
                            <span className='cursor-pointer'>{item.name}</span>
                        </div>
                    )
                })
            }                 
        </div>

        <hr className='my-3'/>

        <div className='space-y-3 items-center'>
            <div className='flex items-center space-x-2'>
                <h1 className='font-semibold'>You</h1>
                <IoIosArrowForward />
            </div>
            {
                sidebarItems.map((item)=>{
                    return(
                        <div className='flex items-center space-x-6 hover:bg-gray-300 duration-200 rounded-xl p-1' key={item.id}>
                            <div className='text-xl cursor-pointer'>
                                {item.icon}
                            </div>
                            <span className='cursor-pointer'>{item.name}</span>
                        </div>
                    )
                })
            }                 
        </div>

        <hr className='my-3'/>
        
        <div className='space-y-3 items-center'>
            <div className='flex items-center space-x-2'>
                <h1 className='font-semibold'>Explore</h1>
                <IoIosArrowForward />
            </div>
            {
                sidebarItems.map((item)=>{
                    return(
                        <div className='flex items-center space-x-6 hover:bg-gray-300 duration-200 rounded-xl p-1' key={item.id}>
                            <div className='text-xl cursor-pointer'>
                                {item.icon}
                            </div>
                            <span className='cursor-pointer'>{item.name}</span>
                        </div>
                    )
                })
            }                 
        </div>

        <hr className='my-3'/>
        
        <div className='space-y-3 items-center'>
            <div className='flex items-center space-x-2'>
                <h1 className='font-semibold'>More from YouTube</h1>
            </div>
            {
                sidebarItems.map((item)=>{
                    return(
                        <div className='flex items-center space-x-6 hover:bg-gray-300 duration-200 rounded-xl p-1' key={item.id}>
                            <div className='text-xl cursor-pointer'>
                                {item.icon}
                            </div>
                            <span className='cursor-pointer'>{item.name}</span>
                        </div>
                    )
                })
            }                 
        </div>

        <hr className='my-3'/>
        
        <div className='space-y-3 items-center'>
            {
                sidebarItems.map((item)=>{
                    return(
                        <div className='flex items-center space-x-6 hover:bg-gray-300 duration-200 rounded-xl p-1' key={item.id}>
                            <div className='text-xl cursor-pointer'>
                                {item.icon}
                            </div>
                            <span className='cursor-pointer'>{item.name}</span>
                        </div>
                    )
                })
            }                 
        </div>

    </div>
  )
}

export default sidebar