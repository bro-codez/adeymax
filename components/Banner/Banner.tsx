import Image from 'next/image';
import { Section} from '../layout/Section'

import { Circle, Plus } from '../../svgs';

const locations = ['Ndere Island', 'Impala Sanctuary', 'Hippo Point', 'Dunga Bay','Kit Mikayi'];
const activities = ['Wildlife', 'Sight-seeing'];
const grades = ['Grade 1', 'Grade 2', 'Grade 3'];
const regions = ['Region 1', 'Region 2', 'Region 3'];

const Banner = () => (
  <Section>
    
    
    <div className="relative bg-white border-4 rounded-lg w/12 mx-6 -mt-20">
      <div className="flex flex-col mx-auto md:flex-row mt-6">

      <fieldset className="h-full w-full md:w-1/4 mb-4">
      <label className="block text-md text-gray-900 mb-2">Where to</label>
		  <input id="destination" type="text" className="block w-11/12 rounded-sm  bg-white py-2 px-3 text-xl" name="destination" placeholder="Enter key-words" />
      </fieldset>
      
      <fieldset className="w-full md:w-1/4 mb-4">
      <label className="block text-sm text-gray-900 mb-2">When</label>
		  <input id="date" type="date" className="block w-11/12 rounded-sm  bg-white py-2 px-3 text-xl" name="date" />
      </fieldset>
         
      <fieldset className="w-full md:w-1/4 mb-4">
      <label className="block text-sm text-gray-900 mb-2">Type</label>
      <select className="block w-11/12 rounded-sm bg-white py-2 px-3 text-xl">
      <option>Adventure</option>
      {activities.map((activity, index) => (
       <option value={activity} key={index}>
                {activity}
              </option>
            ))}
          </select>
      </fieldset>
      <button className="inline-block w-full md:w-1/4  bg-[#0FCD900] text-white uppercase text-sm tracking-widest font-heading px-8 py-4">Explore</button>
    
        </div>

      
    
    
  </div>
  </Section>
);

export default Banner;
