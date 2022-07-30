import type{ NextPage } from 'next';
import { Carousel1 } from '../components/Carousel'


import {
  Banner,
  Trending,
  Testimonials,
  Footer,
  Card,
  FeaturedTours,
} from '../components';
import Navbar from '../components/Navbar';
import { Hero2 } from '../components/Hero2';
import  Hero  from '../components/Hero';
import  Featured  from '../components/Featured';

import { PeopleReview } from '../components/Review';
import Card2 from '../components/Card/Card2';
import CTAMail from '../components/CTAMail';

const Home: NextPage = () => {
  return(
  <>
    <div className=" ">
      <Navbar />
      <Hero />
      <Featured /> 
      <Banner />
      <Card2 
          title="Plan your epic tour with us"
          image="/hero/worker.jpg"
          subtitle={''}
          buttonLabel={'hi'}      
      />
      <CTAMail />
      <Footer />
     </div>
  </>
)};

export default Home;