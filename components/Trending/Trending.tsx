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



    <div className="lg:grid grid-cols-3 grid-rows-1 gap-2 py-2 mx-auto mt-12 max-w-7xl">
      {stories.map(({ title, description, image }, index) => (
        <div className="mt-5 mx-auto" key={index}>
          <div className="w-full h-full mx-auto">
            <img src={image} alt={title} className="object-contain rounded-lg mx-auto" />
            <div className=" relative">
              <p className="label text-2xl text-white font-bold mt-4 w-3/4 mx-auto">{title}</p>
              
              <p className="mt-4 text-lg text-orange-800 w-1/4  ml-16 mx-auto">Read more</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  
  </Section>
);

export default Trending;
