'use client'
import Image from "next/image";
import Head from 'next/head';
import { FloatingNav } from "./components/ui/floating-navbar";
import { Navbar }from './components/Navbar'
import { Footer }from './components/Footer'
import { Player, Controls } from '@lottiefiles/react-lottie-player';

export default function Home() {
  const navItems = [
    {
      itemName: "Home",
      link: "/home",
    },
    {
      itemName: "About",
      link: "/about",
      // icon property omitted for this item
    },
    // Add more navigation items as needed
  ];
  return (<>
   <Navbar/>
  <div className="h-screen flex items-center justify-center">
  <Head>
    <title>Workable Landing</title>
    <link rel="icon" href="/favicon.ico" />
  </Head>
 
  <div className="w-full h-full flex justify-center items-center">
    {/* Left side of the page */}
    <div className="w-1/2 h-full bg-white flex justify-center items-center">
      <div className="text-black text-center">
        <h1 className="text-5xl font-bold mb-4">Welcome HR&apos;s</h1>
        <Player
                   autoplay
                   speed={1.5}
                   loop
                   src="https://lottie.host/e8b16c97-b290-4ac4-b573-7df929029e14/LzbW0QUqqD.json"
                   style={{ height: "300px", width: "300px" }}
                                 /> 
        <p className="text-lg p-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis lorem ut libero malesuada feugiat.</p>
        <button
  className="relative px-8 py-2 rounded-md bg-white text-black border-2 border-black isolation-auto z-10 overflow-hidden transition-all duration-700 hover:bg-black hover:text-white"
>
  Log In
</button>


      </div>
    </div>

    {/* Right side of the page */}
    <div className="w-1/2 h-full bg-indigo-600 flex justify-center items-center">
      <div className="text-white text-center">
        <h1 className="text-5xl font-bold mb-4">Applicants Here</h1>
        <Player
                   autoplay
                   speed={1.5}
                   loop
                   src="https://lottie.host/dbb38e73-188a-477f-8176-c1ed61d2e894/QvyYggnAHL.json"
                   style={{ height: "300px", width: "300px" }}
                                 /> 
        <p className="text-lg p-4">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
        <div className="flex justify-center gap-4">
        <a href="/applypage">
          <button className="relative px-8 py-2 rounded-md bg-indigo-600 text-white border-2 border-white isolation-auto z-10 overflow-hidden transition-all duration-700 hover:bg-white hover:text-indigo-600">
            Apply Here
          </button>  
        </a>  
        
        <button className="relative px-8 py-2 rounded-md bg-white text-indigo-600 border-2 border-indigo-600 isolation-auto z-10 overflow-hidden transition-all duration-700 hover:bg-white hover:text=indigo-600">
           Check Status
        </button>
        </div>
        

      </div>
    </div>
  </div>  
</div>
<section className="bg-white">
                    <div className="max-w-screen-xl mx-auto px-4 py-28 gap-12 text-gray-600 overflow-hidden bg-white md:px-8 md:flex">
                        <div className='flex-none space-y-5 max-w-xl'>
                            <a href="javascript:void(0)" className='inline-flex gap-x-6 items-center rounded-full p-1 pr-6 border text-sm font-medium duration-150 hover:bg-white'>
                                <span className='inline-block rounded-full px-3 py-1 bg-indigo-600 text-white'>
                                    News
                                </span>
                                <p className='flex items-center justify-between'>
                                    Read the launch post from here
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                        <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                                    </svg>
                                </p>
                            </a>
                            <h1 className="text-4xl text-gray-800 font-extrabold sm:text-5xl">
                                Build your SaaS exactly how you want
                            </h1>
                            <p>
                                Sed ut perspiciatis unde omnis iste natus voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.
                            </p>
                            <div className='flex items-center gap-x-3 sm:text-sm'>
                                <a href="javascript:void(0)" className="flex items-center justify-center gap-x-1 py-2 px-4 text-white font-medium bg-gray-800 duration-150 hover:bg-gray-700 active:bg-gray-900 rounded-full md:inline-flex">
                                    Get started
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                        <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                                    </svg>
                                </a>
                                <a href="javascript:void(0)" className="flex items-center justify-center gap-x-1 py-2 px-4 text-gray-700 hover:text-gray-900 font-medium duration-150 md:inline-flex">
                                    Contact sales
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                        <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div className='flex-1 hidden md:block'>
                            {/* Replace with your image */}
                            <img src="https://www.workable.com/static/images/home/mobile/features/find-mobile-home.svg" className="max-w-xl" />
                        </div>
                    </div>
                </section>
<Footer/>
  </>
  );
}
