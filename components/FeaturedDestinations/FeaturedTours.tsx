/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-key */
/* eslint-disable prettier/prettier */
import Carousel from 'react-multi-carousel';

import 'react-multi-carousel/lib/styles.css';
import { Section } from '../layout/Section';


const FeaturedTours = (_props: any) => {
  const dataReview = [
    {
      image_url: '/native/ndere-island.jpg',
      name: '$-100',
      description:'Island',
      duration:'9 HOURS',
    },
    {
      image_url: '/native/kit-mikayi.jpg',
      name: '$-100',
      description:'Culture',
      duration:'9 HOURS',
    },
    {
      image_url: '/native/game-park.jpg',
      name: '$-100',
      description:'Game',
      duration:'9 HOURS',
    },
    {
      image_url: '/hero/herop.jpg',
      name: '$-100',
      description:'Hippos',
      duration:'9 HOURS',
    },
    {
      image_url: '/native/city_walk.jpeg',
      name: '$-100',
      description:'City',
      duration:'9 HOURS',
    },
  ];

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
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
    text="Book Now"
    description="Featured "
    title="Most Popular Tours"    
    >
      

      
        <Carousel
          responsive={responsive}
          swipeable={true}
          draggable={true}
          arrows={false}
          showDots={false}
          infinite={true}
          containerClass=" "
          dotListClass="custom-dot-list-style"
          itemClass="rounded-lg"
          autoPlay={true}
          autoPlaySpeed={6000}
          
        >
          {dataReview.map((item, _key) => (
            <div className="bg-white py-2 px-4 mx-auto">
              <img
                    src={item.image_url}
                    alt=""
                    className="h-80 w-full rounded-lg mx-auto object-fit"
              />
              <p className="absolute leading-relaxed italic font-bold text-blue-800 bg-white w-1/4 text-xl -mt-8">
                {item.description}
              </p>              
              
                  <h4 className="mt-4 text-xl font-bold py-2">{item.name}<span className="font-thin">/Per Person</span></h4>
                  <p className="mt-4 py-2 pl-2 mx-auto bg-gray-200 w-1/2 ml-0">{item.duration}</p>
            </div>
              
      
          ))}
        </Carousel>
        
      
    </Section>
  );
};

export { FeaturedTours };
