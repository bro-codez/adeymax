import React from 'react';
import  Navbar  from '../Navbar'; 
import  Footer  from '../Footer/Footer'; 
import { ReactNode } from 'react';
import { Meta } from './Meta';
import { AppConfig } from '../../utils/AppConfig';

type IBaseProps={
    children: ReactNode;
};

const Base = (props: IBaseProps) =>{
    

    return (
        <>
         <Meta title={AppConfig.title} description={AppConfig.description}/>
         <main>
         <Navbar />
        <div>{props.children}</div>
         <Footer />      
         </main>
        </>

    )

}

export { Base };