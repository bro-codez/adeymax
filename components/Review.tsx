/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-key */
/* eslint-disable prettier/prettier */
import Carousel from 'react-multi-carousel';
import { Star, Plus, Circle } from '../svgs';
import { NewspaperIcon, StarIcon, ThumbUpIcon } from '@heroicons/react/outline';

import 'react-multi-carousel/lib/styles.css';
import { Section } from './layout/Section';


export const PeopleReview = (_props: any) => {
  const dataReview = [
    {
      image_url: '/images/client3.jpg',
      name: 'Allison',
    },
    {
      image_url: '/images/client2.jpg',
      name: 'Kattie',
    },
    {
      image_url: '/images/client5.jpg',
      name: 'Letty',
    },
    {
      image_url: '/images/client3.jpg',
      name: 'Letty',
    },
    {
      image_url: '/images/client5.jpg',
      name: 'Letty',
    },
  ];

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 600 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 500, min: 0 },
      items: 1,
    },
  };

  return (
    <Section
    text="Explore"
    description="Client Reviews"
    title="What the are saying"
    >


      
        <Carousel
          responsive={responsive}
          swipeable={true}
          draggable={true}
          arrows={false}
          showDots={false}
          infinite={true}
          containerClass="mt-4 max-w-7xl mx-auto"
          dotListClass="custom-dot-list-style"
          itemClass="rounded-lg "
          autoPlay={true}
          autoPlaySpeed={6000}
          
        >
          {dataReview.map((item, _key) => (
            <div className="bg-white py-2 px-4 mx-auto ">
              <img
                    src={item.image_url}
                    alt=""
                    className="h-60 w-60 rounded-full mx-auto object-cover"
              />
                    <div className="flex items-center mx-auto py-4 justify-center">
          {Array(5)
            .fill(0)
            .map((_, index) => (
              <Star size={16} color="#FFBB0C" key={index} />
            ))}
        </div>
              <p className="leading-relaxed italic font-thin text-xl p-6">
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis.”
              </p>              
              
                  <h4 className="-mt-2 text-xl font-bold text-center w-1/4 mx-auto">{item.name}</h4>
            </div>
              
      
          ))}
        </Carousel>
        
        <div className="lg:grid grid-cols-5 grid-rows-1 gap-2 py-2 mx-6 mt-12 ">
            <div className="flex-1 w-full h-80 py-4 relative">
                <img src="/native/sunsetboat.jpg" className="object-fit w-full h-full rounded-lg"/>
            </div>
            <div className="flex-1 h-full py-4 relative">
                <img src="/hero/heroset.jpg" className="object-fit w-full h-full rounded-lg" />
            </div>
            <div className="flex-1 h-full py-4 relative">
                <img src="/hero/heroseau.jpg" className="object-fit w-full h-full rounded-lg"/>
            </div>
            <div className="flex-1 h-full py-4 relative hidden lg:block">
                <img src="/hero/herop.jpg" className="object-fit w-full h-full rounded-lg" />
            </div>
            <div className="flex-1 h-full py-4 relative hidden lg:block">
                <img src="/native/robin-chat.jpg" className="object-fit w-full h-full rounded-lg" />
            </div>
            <div className="hidden absolute inset-0 w-full h-full  z-20 items-center justify-center">
                <a href="#" className="bg-white px-8 py-3 text-sm tracking-widest font-heading">@novolio</a>
            </div>
        </div>
  
      
    </Section>
  );
};
