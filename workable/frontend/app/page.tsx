import Image from "next/image";
import Head from 'next/head';
import { FloatingNav } from "./components/ui/floating-navbar";

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
   <FloatingNav navItems={navItems}/>
  <div className="h-screen flex items-center justify-center">
  <Head>
    <title>Workable Landing</title>
    <link rel="icon" href="/favicon.ico" />
  </Head>

  <div className="w-full h-full flex justify-center items-center">
    {/* Left side of the page */}
    <div className="w-1/2 h-full bg-white flex justify-center items-center">
      <div className="text-black text-center">
        <h1 className="text-5xl font-bold mb-4">Welcome to Our Site</h1>
        <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis lorem ut libero malesuada feugiat.</p>
      </div>
    </div>

    {/* Right side of the page */}
    <div className="w-1/2 h-full bg-black flex justify-center items-center">
      <div className="text-white text-center">
        <h1 className="text-5xl font-bold mb-4">Discover the Future</h1>
        <p className="text-lg">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
      </div>
    </div>
  </div>
</div>
  </>
  );
}
