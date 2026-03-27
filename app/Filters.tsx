'use client';
import { useState } from "react";
export function Filters(){
const [isOpenFilters, setIsOpenFilters] = useState(false);
function toggleFilters(){
    setIsOpenFilters(!isOpenFilters);
}
return  <section className="bg-gray-700">
        <div>       
          <div className="px-4 py-3 flex justify-between" >
            <div className="relative w-62">
              <div className="absolute inset-y-0 left-0 flex items center pl-3">
                <div className="text-gray-400 mt-2">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M3 10a7 7 0 1 0 14 0 7 7 0 1 0 -14 0" strokeWidth="2" />
                    <path d="m21 21 -6 -6" strokeWidth="2" />
                </svg>
                </div>
              </div>
              <input className="focus:outline-none focus:text-gray-900 focus:bg-white bg-gray-900 text-white rounded-lg pl-12 pr-3 py-2" placeholder="Search by keywords"/>
            </div>
            <div className="relative bg-gray-900 text-gray-500 rounded-lg">
              <div className="fill-current text-gray-400 absolute inset-y-0 left-0 flex items center pl-3">
                <div className="mt-2">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M4 20h16" strokeWidth="2" />
                    <path d="M4 12h16" strokeWidth="2" />
                    <path d="M4 4h16" strokeWidth="2" />
                </svg>
                </div>
              </div>
              <button onClick = {toggleFilters} type = "button" className="pl-12 pr-3 py-2">Filters</button>
            </div>
          </div>
        </div>
    {isOpenFilters &&
      <form>
          <div className="px-4">
            <div className="flex -mx-2">
              <label className="block w-1/2 px-2">
                <span className="text-gray-500 text-sm font-semibold">Bedrooms</span>
                <select className="form-select block w-full bg-gray-100 rounded-lg">
                  <option>4</option>
                </select>
              </label>
              <label className="block w-1/2 px-2">
                <span className="text-gray-500 text-sm font-semibold">Bathrooms</span>
                <select className="form-select block w-full bg-gray-100 rounded-lg">
                  <option>2</option>
                </select>
              </label>
            </div>
            <label>
                <span className="text-gray-500 text-sm font-semibold">Price range</span>
                <select className="form-select block w-full bg-gray-100 rounded-lg">
                  <option>Up to $2,000/wk</option>
                </select>
              </label>
          </div>
          <div className="text-gray-300 px-4 py-2">
            <span>
              Property Type
            </span>
            <label className="block">
              <input className="mr-2" type = "radio" name = "property" value = "house"/>
              House
            </label>
            <label className="block">
              <input className="mr-2" type = "radio" name = "property" value = "apartment"/>
              Apartment
            </label>
            <label className="block">
              <input className="mr-2" type = "radio" name = "property" value = "loft"/>
              Loft
            </label>
            <label>
              <input className="mr-2" type = "radio" name = "property" value = "townhouse"/>
              Townhouse
            </label>
          </div>
           <div className="text-gray-300 px-4 py-2">
            <span>
              Amenities
            </span>
            <label className="block">
              <input className="mr-2" type = "checkbox" name = "balcony" value = "house"/>
              Balcony
            </label>
            <label className="block">
              <input className="mr-2" type = "checkbox" name = "ac" value = "apartment"/>
              Air conditioning
            </label>
            <label className="block">
              <input className="mr-2" type = "checkbox" name = "pool" value = "loft"/>
              Pool
            </label>
            <label className="block">
              <input className="mr-2" type = "checkbox" name = "beach" value = "townhouse"/>
              Beach
            </label>
            <label className="block">
              <input className="mr-2" type = "checkbox" name = "pf" value = "townhouse"/>
              Pet friendly
            </label>
            <label className="block">
              <input className="mr-2" type = "checkbox" name = "kf" value = "townhouse"/>
              Kid friendly
            </label>
          </div>
          <div className="bg-gray-800 px-2 py-2">
            <button className="bg-gray-200 w-full py-1 rounded-full">
              Update results
            </button>
          </div>
</form>
}
</section>
}