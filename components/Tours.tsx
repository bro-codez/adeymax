
import { Base }  from '../components/layout/Base'
import { Section }  from '../components/layout/Section'
import { AppConfig } from '../utils/AppConfig';



const locations = ['Ndere Island', 'Impala Sanctuary', 'Hippo Point', 'Dunga Bay','Kit Mikayi'];
const activities = ['Wildlife', 'Sight-seeing'];
const grades = ['Grade 1', 'Grade 2', 'Grade 3'];
const regions = ['Region 1', 'Region 2', 'Region 3'];




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
      image_url: '/hero/herop.jpg',
      name: '$-100',
      description:'Hippos',
      duration:'9 HOURS',
    },
  ];


const Tours = () => {
    return(

    
    <Section>
    <div className="flex w-screen bg-blue-600">

<div className="w-full h-full relative flex items-center justify-center py-24">

  <img aria-label="no idea" src="/native/cleanlake.jpg" className="absolute object-cover w-full h-full"/>

  <div className="px-6 max-w-4xl relative z-10 text-center">
    <h1 className="text-3xl md:text-4xl font-black text-[#02044A] leading-tight pl-0 mb-2">About Us</h1>
  </div>

</div>

</div>
   
   	<div className="relative w-screen z-10 rounded-md shadow-md  p-4 max-w-7xl mx-auto mt-4 flex">
     
       
       
       
       <div className="w-full grid grid-cols-1  md:grid-cols-3 gap-4">
       {dataReview.map((item, _key) => (
            <div className="bg-white py-2 px-4 mx-auto">
              <a classsName="pointer ">
              <img
                    src={item.image_url}
                    alt=""
                    className="h-80 w-full rounded-lg mx-auto object-fit"
              />
              </a>
              <p className="absolute leading-relaxed italic font-bold text-blue-800 bg-white text-xl -mt-8">
                {item.description}
              </p>              
              
                  <h4 className="mt-4 text-xl font-bold py-2">{item.name}<span className="font-thin">/Per Person</span></h4>
                  <p className="mt-4 py-2 pl-2 mx-auto bg-gray-200 w-1/2 ml-0">{item.duration}</p>
            </div>
              
      
          ))}


    </div>
    </div>

    </Section>

   
    )
};

export { Tours };