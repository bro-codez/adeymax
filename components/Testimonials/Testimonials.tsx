/* eslint-disable prettier/prettier */
import React from 'react';

import { Star, Plus, Circle } from '../../svgs';

const Testimonials = () => (
<section className="relative pt-24 pb-32 overflow-hidden">
  <div className="container mx-auto px-4">
    <h2 className="mb-5 max-w-2xl mx-auto font-heading font-extrabold text-center text-2xl sm:text-4xl text-indigo-800">12k+ Happy Clients</h2>
    <p className="mb-16 text-base max-w-md mx-auto text-center text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
    <div className="flex flex-wrap -m-5">
      <div className="w-full md:w-1/3 p-5">
        <div className="h-full p-0.5 bg-gradient-cyan transform hover:-translate-y-3 rounded-10 transition ease-out duration-1000">
          <div className="h-full px-7 py-8 bg-white rounded-lg">
            <img className="mb-8" src="gradia-assets/images/testimonials/avatar.png" alt="" />
            <p className="mb-8 text-lg text-gray-900">&ldquo;Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.&rdquo;</p>
            <h3 className="mb-1.5 font-heading font-bold text-lg text-gray-900">Darrell Steward</h3>
            <p className="text-sm text-gray-600">Product Designer</p>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/3 p-5">
        <div className="h-full p-0.5 bg-gradient-cyan transform hover:-translate-y-3 rounded-10 shadow-5xl transition ease-out duration-1000">
          <div className="h-full px-7 py-8 bg-white rounded-lg">
            <img className="mb-8" src="gradia-assets/images/testimonials/avatar2.png" alt="" />
            <p className="mb-8 text-lg text-gray-900">&ldquo;Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.&rdquo;</p>
            <h3 className="mb-1.5 font-heading font-bold text-lg text-gray-900">Ronald Richards</h3>
            <p className="text-sm text-gray-600">Software Engineer</p>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/3 p-5">
        <div className="h-full p-0.5 bg-gradient-cyan transform hover:-translate-y-3 rounded-10 transition ease-out duration-1000">
          <div className="h-full px-7 py-8 bg-white rounded-lg">
            <img className="mb-8" src="gradia-assets/images/testimonials/avatar3.png" alt="" />
            <p className="mb-8 text-lg text-gray-900">&ldquo;Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.&rdquo;</p>
            <h3 className="mb-1.5 font-heading font-bold text-lg text-gray-900">Darrell Steward</h3>
            <p className="text-sm text-gray-600">Product Designer</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
);

export default Testimonials;
