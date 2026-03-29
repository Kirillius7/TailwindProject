'use client';
import Image from 'next/image';
import { useState } from 'react';
export default function SiteHeader(){
    const [isOpen, setIsOpen] = useState(false);
    const [isOpenSettings, setIsOpenSettings] = useState(false);
    function toggleMenu() {
      setIsOpen(!isOpen);
    }
    
  function toggleSettings(){
    setIsOpenSettings(!isOpenSettings)
  }
return <header className="bg-gray-900">
        <div className="flex items-center justify-between">
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
        <div className="px-4 py-4 relative">
          <div className="flex flex items-center">
            <button
              onClick={toggleSettings}
              className="rounded-full focus:outline-none focus:ring-2"
              >
              <Image 
                src = "/a woman.jpg" 
                alt = "Woman"
                width = {30}
                height = {30}
                className="rounded-full border-2 border-gray-600"
              />
            </button>
            <span className="ml-3 text-gray-300 font-bold text-xl">Isla Schoger</span>
          </div>
          {
            isOpenSettings && <div className="mt-5 sm:bg-white sm:rounded-lg sm:absolute sm:left-4 w-48 sm:mt-3 py-2 px-2 z-50">
              <a href = "#account" className="px-2 py-2 block font-semibold text-gray-600 sm:hover:bg-indigo-500 hover:text-white rounded-lg"> Account settings</a>
              <a href = "#support" className="px-2 py-2 block font-semibold sm:hover:bg-indigo-500 hover:text-white text-gray-600 rounded-lg"> Support</a>
              <a href = "#sign-out" className="px-2 py-2 block font-semibold sm:hover:bg-indigo-500 hover:text-white text-gray-600 rounded-lg"> Sign out</a>
            </div>
          }
        </div>
      </nav>
        )}
      </header>
}
