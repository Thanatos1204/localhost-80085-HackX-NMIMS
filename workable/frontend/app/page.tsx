'use client'
import Image from "next/image";
import Head from 'next/head';
import { FloatingNav } from "./components/ui/floating-navbar";
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
   <FloatingNav navItems={navItems} className="nav-bar"/>
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
      </div>
    </div>

    {/* Right side of the page */}
    <div className="w-1/2 h-full bg-black flex justify-center items-center">
      <div className="text-white text-center">
        <h1 className="text-5xl font-bold mb-4">Discover the Future</h1>
        <Player
                   autoplay
                   speed={1.5}
                   loop
                   src="https://lottie.host/dbb38e73-188a-477f-8176-c1ed61d2e894/QvyYggnAHL.json"
                   style={{ height: "300px", width: "300px" }}
                                 /> 
        <p className="text-lg p-4">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
      </div>
    </div>
  </div>  
</div>
<section className="h-screen w-screen">Hello</section>
  </>
  );
}
