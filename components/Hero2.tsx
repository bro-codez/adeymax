/* eslint-disable prettier/prettier */
/* eslint-disable unused-imports/no-unused-vars */
/* eslint-disable prettier/prettier */
import React from 'react';

import { Logo } from '../svgs';
import { Carousel1 } from '../components/Carousel'

const Hero2 = () => (
<>
<div className="pt-24">
      <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
        
        <div className="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left">
          <p className="uppercase tracking-loose w-full">Travel and Tours</p>
          <h1 className="my-4 text-5xl font-bold leading-tight">
            Blissfull Lakeside
          </h1>
          <p className="leading-normal text-2xl mb-8">
            We give you the best travel experience in Western Kenya!
          </p>
          <button className="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
            Book Now
          </button>
        </div>
        
        <div className="w-full md:w-3/5 py-6 text-center">
          <Carousel1 />
        </div>
      </div>
    </div>
</>

);

export { Hero2 };
