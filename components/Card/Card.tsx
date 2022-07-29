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

const Card = ({ title, subtitle, image, children, buttonLabel, reversed }: CardProps) => {
  return (
    <Section>




    <div
      className="bg-white flex max-w-7xl flex-wrap mx-auto">

<div className="max-w-md mx-auto">
  
      <div className="w-24 h-2 bg-white mb-8"></div>
        <h2 className="font-display font-bold text-4xl mb-6">{title}</h2>
        <div className="flex">
        <Plus size={16} color="#FFBB0C"  />
        <Circle size={16} color="#FFBB0C"  />
        <Plus size={16} color="#FFBB0C"  />
        </div>
        <p className="font-light text-gray-600 mb-6 leading-relaxed">
          {subtitle}
        </p>
        <button className="block md:inline-block text-center font-semibold rounded-lg bg-[#02044A] transform transition hover:scale-105 duration-300 ease-in-out no-underline text-white px-5 py-3 mb-8 border-2 border-blue-900 hover:bg-blue-900 hover:text-blue-100">{buttonLabel}</button>
      </div>
      <div className="lg:block">
      <Image
    width={600}
    height={600} 
    className="h-full w-full object-cover"
    src={image} alt={title} />
    {children}
    </div>


    </div>
    </Section>
  );
};

export default Card;
