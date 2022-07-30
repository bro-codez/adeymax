import { Section } from "./layout/Section";


interface CardProps {
  title?: string;
  subtitle?: string;
  image?: string;
  buttonLabel: string;
  reversed?: boolean;
  
}

const CTAMail = () => {






  return (
    <Section
    title="About Us"
    description="We promise the best"
    >
            <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 py-24">
        <div className="hidden lg:grid relative grid-cols-2">
            <div className="pt-24">
                <div className="relative w-full h-full">
                    <img src="https://images.unsplash.com/photo-1536895058696-a69b1c7ba34f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=975&q=80" className="absolute inset-0 w-full h-full object-cover -mt-6 z-10" />
                </div>
            </div>
            <div className="relative">
                <img src="https://images.unsplash.com/photo-1535732759880-bbd5c7265e3f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" className="absolute inset-0 w-full h-full object-cover -ml-12" />
            </div>
        </div>
        <div className="lg:px-32 lg:py-32 flex items-center justify-center">
            <div>
                <h2 className="text-5xl mb-6 font-bold uppercase italic">Contractors you can trust</h2>
                <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <a href="/about" className="mt-8 inline-block rounded-lg border-2 border-indigo-900 text-lg px-8 py-3 hover:bg-black hover:text-white">Our Promise</a>
            </div>
        </div>
    </div>
    <div className="bg-indigo-800 text-white text-center p-12">
        <div className="text-2xl">Join the club</div>
        <form className="max-w-sm mx-auto relative h-12 mt-6 border-b border-white" name="subscribe" method="POST" >
            <input type="text" name="email" className="w-full h-full bg-transparent border-none pr-12" placeholder="Enter your email" />
            <button className="w-12 h-12 flex items-center justify-center absolute top-0 right-0">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
            </button>
        </form>
    </div>





    </Section>
  );
};

export default CTAMail;
