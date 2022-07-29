
import { Section } from './layout/Section'
import { CameraIcon, MapIcon } from '@heroicons/react/outline';
import { AppConfig } from './../utils/AppConfig';

type IFeaturedProps = {
 title?: string
};

const Featured = (props: IFeaturedProps ) => {
  

  return (
    <>
    <Section
    
    description="Destination List"
    title="CONTRACTORS YOU CAN TRUST"    
    >

   
    <div className="max-w-7xl mx-auto p-6 md:p-24 md:pt-12">
        <div className="w-3/4 lg:grid grid-cols-2 grid-rows-2 gap-2 font-display text-3xl text-white">
            <a href="#" className=" bg-black col-span-1 row-span-1 rounded-lg relative flex items-center justify-right">
                
                <img src="/native/kericho.jpg" className="absolute inset-0 w-full h-full rounded-lg object-cover opacity-50 hover:opacity-75" />
            </a>
            <a href="#" className=" bg-black col-span-1 row-span-1 rounded-lg relative flex items-center justify-left">
                
                <img src="/native/boat_rides.jpg" className="absolute inset-0 w-full h-full rounded-lg object-cover opacity-50 hover:opacity-75" />
            </a>
            <a href="#" className=" bg-black col-span-1 row-span-1 rounded-lg relative flex items-center justify-left py-24">
                
                <img src="/native/ndere-2.jpg" className="absolute inset-0 w-full h-full rounded-lg object-cover opacity-50 hover:opacity-75" />
            </a>
            <a href="#" className=" bg-black col-span-1 row-span-1 rounded-lg relative flex items-center justify-left py-24">
                
                <img src="/native/ndere-2.jpg" className="absolute inset-0 w-full h-full rounded-lg object-cover opacity-50 hover:opacity-75"/>
            </a>
            
        </div>
    </div>
    


    </Section>
    </>
  );
};

export { Featured };
