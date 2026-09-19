import foods from '@/app/data/foods';
import Image from 'next/image';
import React from 'react';
import { notFound } from "next/navigation";
import ConfirmOrder from './confirmOrder';


export const metadata = {
  title: "Choose your test",
  description: "",
};


const FoodIdPage = async({params}) => {

    const {foodId} = await params;
    const food = foods.find(food => food.id === Number(foodId));

    if (!food) {
        notFound();
    }
    

    return (
      <div className='flex flex-col justify-center items-center my-6'>
        <h1 className='text-3xl font-bold mb-8'>Food Details</h1>

        
          <div className='card bg-base-100 w-96 shadow-sm'>
            <figure>
              <Image
                src={food.image}
                width={300}
                height={300}
                alt={food.name}
                className='w-82 h-52 object-cover mt-4 rounded-md'
              />
            </figure>
            <div className='card-body'>
              <h2 className='card-title'>{food.name}</h2>
              <h3>{food.price} Taka</h3>
              <p>{food.category}</p>
              <p>{food.description}</p>
              <div className='card-actions justify-end'>
                <ConfirmOrder />
              </div>
            </div>
          </div>
        </div>
      
    );
};

export default FoodIdPage;