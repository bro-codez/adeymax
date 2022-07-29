/* eslint-disable prettier/prettier */
/* eslint-disable unused-imports/no-unused-vars */
/* eslint-disable prettier/prettier */
import React from 'react';

import { Logo } from '../svgs';

const locations = ['Ndere Island', 'Impala Sanctuary', 'Hippo Point', 'Dunga Bay','Kit Mikayi'];
const activities = ['Wildlife', 'Sight-seeing'];
const grades = ['Grade 1', 'Grade 2', 'Grade 3'];
const regions = ['Region 1', 'Region 2', 'Region 3'];


const navigation = [
  { name: 'Home', href: '/', current: false },
  { name: 'Destination', href: '#', current: false },
  { name: 'Tours', href: '#', current: false },
  { name: 'About us', href: '/about', current: false },
  { name: 'Contact us', href: '/contact', current: false },  
  { name: 'Book Now', href: '#', current: true }
];

function classNames(...classNamees:any) {
  return classNamees.filter(Boolean).join(' ');
}

const Hero = () => (
  <>
    

    		<div className="w-full h-75 bg-blue-600">

			<div className="w-full h-full relative flex items-center justify-center py-44">

				<img aria-label="no idea" src="/native/cleanlake.jpg" className="absolute object-cover w-full h-full"/>

				<div className="px-6 max-w-4xl relative z-10 text-center">
					<h1 className="text-3xl md:text-4xl font-black text-[#02044A] leading-tight mb-2">Explore Kisumu Dala</h1>
					<h2 className="text-xl md:text-2xl font-bold text-white leading-tight mb-8">Where would you like to go?</h2>
					<a href="#" className="inline-block bg-white font-condensed text-primary py-2 px-5 text-base rounded-full hover:shadow-lg hover:bg-blue-600 hover:text-white">Find out more</a>
				</div>

			</div>

		</div>


    <div className="relative max-w-7xl mx-10 px-2 bg-white border-4 rounded-lg w/12 lg:mx-auto -mt-10">
      <div className="flex flex-col mx-auto md:flex-row mt-2">

      <fieldset className="h-full w-full md:w-1/4 ">
      <label htmlFor="where" className="block text-md text-gray-900 mb-2">Where to</label>
		  <input id="where" type="text" className="block w-11/12 rounded-sm  bg-white py-2 px-3 text-xl" name="destination" placeholder="Enter key-words" />
      </fieldset>
      
      <fieldset className="w-full md:w-1/4 ">
      <label htmlFor="when" className="block text-sm text-gray-900 mb-2">When</label>
		  <input id="when" type="date" className="block w-11/12 rounded-sm  bg-white py-2 px-3 text-xl" name="date" />
      </fieldset>
         
      <fieldset className="w-full md:w-1/4 ">
      <label htmlFor="type" className="block text-sm text-gray-900 mb-2">Type</label>
      <select id="type" className="block w-11/12 rounded-sm bg-white py-2 px-3 text-xl">
      <option>Adventure</option>
      {activities.map((activity, index) => (
       <option value={activity} key={index}>
                {activity}
              </option>
            ))}
          </select>
      </fieldset>
      <button className="inline-block w-full md:w-1/4 bg-blue-800 text-white uppercase text-lg tracking-widest font-heading px-4 py-4">Explore</button>
    
        </div>

      
    
    
  </div>
  </>
);

export { Hero };
