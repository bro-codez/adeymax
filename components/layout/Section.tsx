/* eslint-disable prettier/prettier */
import { ReactNode } from 'react';

type ISectionProps = {
  display?:string;
  title?: string;
  description?: string;
  yPadding?: string;
  xPadding?: string;
  children: ReactNode;
  className?:string;
  flex?:string;
  color?:string;
  text?:string;
  
};

const Section = (props: ISectionProps) => (
  <div
    className={`max-w-screen text-[#035397] border-b ${props.yPadding ? props.yPadding : 'py-0'} ${props.xPadding}`}
  >
   
    {(props.title || props.description) && (
      <div className="mb-2 tracking-widest text-center text-white">
         {props.description && (
          <div className=" font-acrosmyth  text-xl text-center  underline">{props.description}</div>
        )} {props.title && (
          <>
          <h2 className="text-2xl md:text-4xl tracking-widest text-white text-center font-bold w-full mx-auto">{props.title}</h2>
          
          </>
        )}

      </div>
    )}

    {props.children}
  </div>
);

export { Section };
