
import { Base }  from '../components/layout/Base'
import { Section }  from '../components/layout/Section'
import { AppConfig } from '../utils/AppConfig';

const About = () => {
    return(
    <>
    <Base>
    <Section>
    <div className="w-full h-full bg-blue-800">

<div className="w-full h-full relative flex items-center justify-center py-24">

  <img aria-label="no idea" src="/native/cleanlake.jpg" className="absolute object-cover w-full h-full"/>

  <div className="px-6 max-w-4xl relative z-10 text-center">
    <h1 className="text-3xl md:text-4xl font-black text-[#02044A] leading-tight pl-0 mb-2">About Us</h1>
  </div>

</div>

</div>
   
   	<div className="relative z-10 rounded-md shadow-md  p-4 max-w-7xl mx-auto mt-4">
       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="md:ml-4">
          <img
            src="/native/boatrides (7).jpg"
            alt=""
            className="w-full right-0 object-cover"
            style={{ borderRadius: "0px 0px 0px 7rem" }}
          />
            
          </div>
        <div className=" text-white md:h-full w-full md:flex-1 flex justify-center items-center">
    <div className="px-8 md:px-16">
        <h1 className="font-bold text-4xl md:text-6xl mb-6">Dare to Explore with Us</h1>
        <p className="mb-4"><span className="font-bold text-2xl md:text-4xl">A Simply Perfect Place to Get Lost</span> </p>
        <p className="mb-6 leading-normal text-lg md:text-base">We are trusted by our clients and have a reputation for the best services in the field. </p>
        <p className="mb-6 leading-normal text-lg md:text-base">{AppConfig.about.description}<a href="#more" className="text-orange-800 text-md">Read More</a></p>
        <a href="#" className="block md:inline-block text-center no-underline bg-[#FCD900] transform transition hover:scale-105 duration-300 ease-in-out text-[#035397] uppercase text-lg tracking-widest font-heading px-4 py-4 items-end border-2 border-blue-900 hover:bg-blue-900 hover:text-blue-100">Explore</a>
    </div>
        </div>
        </div>

    </div>

    </Section>
    </Base>
    </>
    )
};

export default About;