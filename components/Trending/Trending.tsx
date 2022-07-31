/* eslint-disable prettier/prettier */
import React from 'react';
import { Section } from '../layout/Section';
import { CameraIcon, MapIcon, NewspaperIcon } from '@heroicons/react/outline';

const stories = [
  {
    title: 'Things to do when visiting Kisumu',
    description:
      '‘Healing holidays’ are on the rise to help maximise your health and happines...',
    image: '/images/news-one-img-1.jpg',
  },
  {
    title: "Journeys are Best Measured in New Friends",
    description:
      'From tofu to teahouses, here’s our guide to Kyoto’s best restaurants to visit...',
    image: '/images/news-one-img-2.jpg',
  },
  {
    title: 'Tour the Most Beatiful Places in the World',
    description:
      'It’s remote and challenging to get, but braving the jungle and exploring these ruins without the...',
    image: '/images/news-one-img-3.jpg',
  },
];

const Trending = () => (
  <Section
  text="View all"
  description="From the blog posts"
  title="News and Articles">


<div className="pt-20 pb-36 bg-indigo-800 overflow-hidden">
  <div className="container mx-auto px-4">
    <div className="md:max-w-lg mx-auto text-center mb-20">
      <h2 className="mb-4 font-heading font-semibold text-white text-6xl sm:text-7xl">Latest news</h2>
      <p className="text-lg text-gray-400">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim.</p>
    </div>
    <div className="flex flex-wrap -m-3">
      <div className="w-full md:w-1/2 xl:w-1/4 p-3">
        <a className="group" href="#">
          <div className="group flex flex-col justify-end h-full relative overflow-hidden rounded-10">
            <img className="mx-auto w-full transform group-hover:scale-110 transition ease-out duration-500" src="/hero/heros (7).jpg" alt=""/>
            <div className="absolute bottom-0 left-0 w-full p-2.5">
              <div className="p-5 w-full bg-black bg-opacity-80 rounded-md">
                <h2 className="mb-2 font-heading font-medium text-xs uppercase text-gray-400 tracking-px">Technology . 4 min read</h2>
                <p className="font-heading font-semibold text-lg text-white group-hover:underline">You will never believe these bizarre truth of travel.</p>
              </div>
            </div>
          </div>
        </a>
      </div>
      <div className="w-full md:w-1/2 xl:w-1/4 p-3">
        <a className="group" href="#">
          <div className="group flex flex-col justify-end h-full relative overflow-hidden rounded-10">
            <img className="mx-auto w-full transform group-hover:scale-110 transition ease-out duration-500" src="/hero/heros (7).jpg" alt=""/>
            <div className="absolute bottom-0 left-0 w-full p-2.5">
              <div className="p-5 w-full bg-black bg-opacity-80 rounded-md">
                <h2 className="mb-2 font-heading font-medium text-xs uppercase text-gray-400 tracking-px">Technology . 4 min read</h2>
                <p className="font-heading font-semibold text-lg text-white group-hover:underline">You will never believe these bizarre truth of travel.</p>
              </div>
            </div>
          </div>
        </a>
      </div>
      <div className="w-full md:w-1/2 xl:w-1/4 p-3">
        <a className="group" href="#">
          <div className="group flex flex-col justify-end h-full relative overflow-hidden rounded-10">
            <img className="mx-auto w-full transform group-hover:scale-110 transition ease-out duration-500" src="/hero/heros (7).jpg" alt=""/>
            <div className="absolute bottom-0 left-0 w-full p-2.5">
              <div className="p-5 w-full bg-black bg-opacity-80 rounded-md">
                <h2 className="mb-2 font-heading font-medium text-xs uppercase text-gray-400 tracking-px">Technology . 4 min read</h2>
                <p className="font-heading font-semibold text-lg text-white group-hover:underline">You will never believe these bizarre truth of travel.</p>
              </div>
            </div>
          </div>
        </a>
      </div>
      <div className="w-full md:w-1/2 xl:w-1/4 p-3">
        <a className="group" href="#">
          <div className="group flex flex-col justify-end h-full relative overflow-hidden rounded-10">
            <img className="mx-auto w-full transform group-hover:scale-110 transition ease-out duration-500" src="/hero/heros (7).jpg" alt=""/>
            <div className="absolute bottom-0 left-0 w-full p-2.5">
              <div className="p-5 w-full bg-black bg-opacity-80 rounded-md">
                <h2 className="mb-2 font-heading font-medium text-xs uppercase text-gray-400 tracking-px">Technology . 4 min read</h2>
                <p className="font-heading font-semibold text-lg text-white group-hover:underline">You will never believe these bizarre truth of travel.</p>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
</div>
  
  </Section>
);

export default Trending;
