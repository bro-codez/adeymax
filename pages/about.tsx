
import { Base }  from '../components/layout/Base'
import { Section }  from '../components/layout/Section'
import { AppConfig } from '../utils/AppConfig';

const About = () => {
    return(
    <>
    <Base>
    <Section>
    <div className="w-full h-full">

    <div className="w-full h-full ">

<div className="w-full h-full relative flex items-center justify-left py-24">

  <img aria-label="no idea" src="/hero/heros (8).jpg" className="absolute object-fill bg-indigo-800 w-full h-full"/>

  <div className="px-6 max-w-4xl relative z-10 text-center">
    <h1 className="text-3xl md:text-4xl font-bold text-indigo-800 leading-tight mb-2">About us</h1>
  </div>

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
        <div className=" text-slate-900 md:h-full w-full md:flex-1 flex justify-left items-left">
    <div className=" md:px-16">
        <h1 className="font-bold text-slate-900 text-4xl md:text-6xl mb-6">LET US BUILD YOURS DREAM</h1>
        
        <p className="mb-6 leading-normal text-slate-900 text-lg md:text-base">We are trusted by our clients and have a reputation for the best services in the field. </p>
        <p className="mb-6 leading-normal  text-lg md:text-base">{AppConfig.about.description}<a href="#more" className="text-orange-800 text-md">Read More</a></p>
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