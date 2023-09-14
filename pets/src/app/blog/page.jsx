'use client';
import './Blog.css';
import LatestPets from '@/components/LatestPets';
import Hero from '@/components/HeroImage';
import Who from '@/components/Who';
import Middle from '@/components/Middle';
import Footer from '@/components/Footer';

export default function Bloger() {
  return (
    <div className="flex flex-col h-min w-full">
      <div className="w-full">
        <Hero />
      </div>

      <div className="justify-self-center m-auto items-center p-3 h-2/3">
        <LatestPets />
      </div>
      <div className="ayo h-1/3 w-full">
        <Middle />
      </div>
      <div className="dawg h-5/6 flex justify-center ">
        <Who />
      </div>
      <div className="justify-self-end">
        <Footer />
      </div>
    </div>
  );
}
