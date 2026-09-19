"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import foods from "./data/foods";
import Image from "next/image";

const HomePage = () => {
  const texts = ["Welcome to", "Enjoy Fresh Food"];

  const [textIndex, setTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [activeFood, setActiveFood] = useState(0);

  // Hero typing animation
  useEffect(() => {
    let index = 0;

    setDisplayText("");

    const typing = setInterval(() => {
      setDisplayText(texts[textIndex].slice(0, index + 1));
      index++;

      if (index === texts[textIndex].length) {
        clearInterval(typing);

        setTimeout(() => {
          setTextIndex((prev) => (prev + 1) % texts.length);
        }, 1500);
      }
    }, 100);

    return () => clearInterval(typing);
  }, [textIndex]);

  // Popular foods animation
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFood((prev) => (prev + 1) % 8);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='text-center'>
      {/* Hero */}
      <section className='min-h-[80vh] px-6 bg-orange-400'>
        <div className='max-w-6xl mx-auto min-h-[80vh] flex flex-col md:flex-row items-center justify-between gap-10'>
          {/* Left Side */}
          <div className='hero-text text-center md:text-left'>
            <h1 className='text-5xl md:text-6xl font-extrabold mb-4 text-black'>
              {displayText}
              <span className='animate-pulse'>|</span>
            </h1>

            <h1 className='text-5xl md:text-6xl font-extrabold mb-4 text-black'>
              Foody<span className='text-white'>Hub</span>
            </h1>

            <p className='text-lg md:text-xl font-medium mb-8 text-black'>
              Delicious food, delivered to your door.
            </p>

            <Link
              href='/foods'
              className='inline-block px-6 py-3 text-xl font-bold bg-blue-500 hover:bg-blue-600 rounded-xl'>
              Order Now
            </Link>
          </div>

          {/* Right Side */}
          <div className='hero-image self-end'>
            <Image
              src='/banner.png'
              alt='banner'
              width={400}
              height={500}
              className='w-[350px] h-[520px] object-cover'
            />
          </div>
        </div>
      </section>

      {/* Popular Foods */}
      <section className='py-16 px-4 overflow-hidden'>
        <h2 className='text-4xl font-bold mb-12'>Popular Foods</h2>

        <div className='food-carousel'>
          {foods.slice(0, 8).map((food, index) => {
            const position = (index - activeFood + 8) % 8;

            let positionClass = "";

            if (position === 0) {
              positionClass = "food-center";
            } else if (position === 1) {
              positionClass = "food-right";
            } else if (position === 7) {
              positionClass = "food-left";
            } else {
              positionClass = "food-hidden";
            }

            return (
              <div key={food.id} className={`food-card ${positionClass}`}>
                <div className='card bg-base-100 shadow-lg overflow-hidden h-full'>
                  <figure>
                    <Image
                      src={food.image}
                      alt={food.name}
                      width={400}
                      height={250}
                      className='w-full h-52 object-cover'
                    />
                  </figure>

                  <div className='card-body text-left'>
                    <h2 className='card-title'>{food.name}</h2>

                    <p className='font-semibold'>{food.price} Taka</p>

                    <div className='card-actions justify-end mt-2'>
                      <Link
                        href={`/foods/${food.id}`}
                        className='btn btn-primary'>
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
