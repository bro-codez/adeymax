import { ReactNode } from 'react';
import Image from 'next/image';
import { Section } from './../layout/Section'
import Feature from '/svgs/feature.svg'


import { Plus, Circle } from '../../svgs';

interface CardProps {
  title: string;
  subtitle: string;
  image: string;
  buttonLabel: string;
  reversed?: boolean;
  children?: ReactNode;
}

const Card2 = ({ title, subtitle, image, children, buttonLabel, reversed }: CardProps) => {



    const dataReview = [
        {
          image_url: '/images/home.png',
          name: 'BUILDING',
          description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
         },
        {
          image_url: '/images/paint-brush.png ',
          name: 'RENOVATION',
          description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
          },
        {
          image_url: '/images/jackhammer.png',
          name: 'DIGGING',
          description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
          },
        {
          image_url: '/images/home.png',
          name: 'INTERIOR',
          description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
          },
        
      ];



  return (
    <Section
    title="About Us"
    description="We promise the best"
    >
    <div
      className="bg-white flex max-w-7xl mx-auto">

<div className="w-1/2 h-full lg:grid grid-cols-2 gap-4 grid-rows-1  mx-auto mt-24 mb-4  ">
{dataReview.map((item, _key) => (
            <div className="w-full bg-white py-4 mt-4 border-slate-800 border-2 ">
              <img
                    src={item.image_url}
                    alt=""
                    className="h-16 w-16 mx-auto "
              />

              <h4 className="text-center mb-2 bg-white text-lg font-bold ">{item.name}</h4>
              <p className="leading-relaxed italic font-thin text-slate-800 text-center bg-white text-md px-2  ">
                {item.description}
              </p>              
              
                
                
            </div>
              
      
          ))}
      </div>
      <div className="lg:block">
      <Image
    width={600}
    height={600} 
    className="h-full w-full object-cover "
    src={image} alt={title} />
    {children}
    </div>


    </div>
    </Section>
  );
};

export default Card2;
