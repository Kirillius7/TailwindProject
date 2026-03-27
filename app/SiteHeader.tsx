'use client';
import Image from 'next/image';
import { useState } from 'react';
export default function SiteHeader(){
    const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }
return <header className="bg-gray-900">
        <div className="flex items-center relative">
          <div className="px-4 py-3">
            <Image 
              src="/workcation.jpg" 
              alt="My photo"
              width={250}
              height={50}
              />
          </div>
          <div className="flex pl-20 pr-3 py-2">
            <button onClick = {toggleMenu} type = "button" className="text-gray-300 py-2 bg-gray-400 rounded-full text-gray-900 w-16">
                {!isOpen ? "Menu" : "Close"
                }
            </button>
          </div>
        </div>
    {isOpen &&(
      <nav>
        <div className="px-2 py-3 flex flex-col border-b border-gray-800">
          <a href = "#" className="px-2 py-1 text-white text-xl font-semibold rounded-lg hover:bg-gray-500"> List your property</a>
          <a href = "#" className="px-2 py-1 mt-4 text-xl text-white font-semibold rounded-lg hover:bg-gray-500"> Trips</a>
          <a href = "#" className="px-2 py-1 mt-4 text-white text-xl font-semibold rounded-lg hover:bg-gray-500"> Messages</a>
        </div>
        <div className="px-4 py-4">
          <div className="flex flex items-center">
            <Image 
              src = "/a woman.jpg" 
              alt = "Woman"
              width = {30}
              height = {30}
              className="rounded-full border-2 border-gray-600"
            />
            <span className="ml-3 text-gray-300 font-bold text-xl">Isla Schoger</span>
          </div>
          <div className="flex flex-col mt-3">
            <a href = "#" className="mt-3 font-semibold text-gray-400 hover:text-red-500"> Account settings</a>
            <a href = "#" className="mt-3 font-semibold hover:text-white text-gray-400"> Support</a>
            <a href = "#" className="mt-3 font-semibold hover:text-white text-gray-400"> Sign out</a>
          </div>
        </div>
      </nav>
        )}
      </header>
}

methods:{
    
}