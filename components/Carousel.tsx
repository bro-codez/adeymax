
import Carousel from 'react-multi-carousel';



const locations = ['Ndere Island', 'Impala Sanctuary', 'Hippo Point', 'Dunga Bay','Kit Mikayi'];
const activities = ['Wildlife', 'Sight-seeing'];
const grades = ['Grade 1', 'Grade 2', 'Grade 3'];
const regions = ['Region 1', 'Region 2', 'Region 3'];



export const Carousel1 = (_props: any) => {
  const mainImgs = [
    {
      image_url: '/hero/heros (1).jpg',
      name: 'BUILDING CONTRACTORS',
      description: `We build your dreams.`,
    },
    {
      image_url: '/hero/heros (4).jpg',
      name: 'BUILDING CONTRACTORS',
      description: `Certified and Professional.`,
    },
    {
      image_url: '/hero/heros (7).jpg',
      name: 'BUILDING CONTRACTORS',
      description: `Construction done right.`,
    },
    {
      image_url: '/hero/heros (8).jpg',
      name: 'BUILDING CONTRACTORS',
      description: `Construction done right.`,
    },
    {
      image_url: '/hero/heros (4).jpg',
      name: 'BUILDING CONTRACTORS',
      description: `Construction done right.`,
    },
  ];

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
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
        <div className="">
        <Carousel
          responsive={responsive}
        
          swipeable={true}
          draggable={true}
          arrows={false}
          showDots={false}
          infinite={true}
          
          dotListClass="bg-black"
          itemClass="text-center"
          additionalTransfrom={0}
          autoPlay={true}
          autoPlaySpeed={2000}
          centerMode={false}
          className=" text-center mx-auto lg:h-1/2"
          containerClass=""
          rewindWithAnimation={true}
          focusOnSelect={false}
          keyBoardControl
          minimumTouchDrag={80}
          renderButtonGroupOutside={false}
          renderDotsOutside={true}
                   
        >
          {mainImgs.map((item, _key) => (
            <div className=" bg-blue-900 ">
             
              
              <div className="relative z-10 text-center py-40 " >
                <h1 className="text-white text-center text-6xl font-display font-bold mb-12 animate-fade-in-down">{item.name}</h1>
              
              <p className=" leading-relaxed  font-bold text-white text-lg pt-2 lg:text-4xl">
                  {item.description}
              </p>
              </div>
              <img
                src={item.image_url}
                alt=""
                className="w-full h-full absolute inset-0 object-fit opacity-70"
               />
            </div>

                          
            
          ))}
        </Carousel>
        {/*  <div className="relative max-w-7xl mx-10 px-2 bg-white border-4 rounded-lg w/12 lg:mx-auto -mt-16">
     <div className="flex flex-col mx-auto md:flex-row mt-6">

      <fieldset className="h-full w-full md:w-1/4 mb-4">
      <label htmlFor="where" className="block text-md text-gray-900 mb-2">Where to</label>
		  <input id="where" type="text" className="block w-11/12 rounded-sm  bg-white py-2 px-3 text-xl" name="destination" placeholder="Enter key-words" />
      </fieldset>
      
      <fieldset className="w-full md:w-1/4 mb-4">
      <label htmlFor="when" className="block text-sm text-gray-900 mb-2">When</label>
		  <input id="when" type="date" className="block w-11/12 rounded-sm  bg-white py-2 px-3 text-xl" name="date" />
      </fieldset>
         
      <fieldset className="w-full md:w-1/4 mb-4">
      <label htmlFor="type" className="block text-sm text-gray-900 mb-2">Type</label>
      <select id="type" className="block w-11/12 rounded-sm bg-white py-2 px-3 text-xl">
      <option>Adventure</option>
      {activities.map((activity, index) => (
       <option value={activity} key={index}>
                {activity}
              </option>
            ))}
          </select>
      </fieldset>
      <button className="inline-block w-full md:w-1/4 bg-blue-800 text-white uppercase text-sm tracking-widest font-heading px-8 py-4">Explore</button>
    
      </div> 

      
    
    
  </div>*/}
        
        </div>
      
  );
};