import Image from "next/image";
import foods from "../data/foods";
import Link from "next/link";


export const metadata = {
  title: "Foods",
  description: "Our Foods List",
};

const HomePage = () => {
  return (
    <div className='my-10 px-4'>
      <h1 className='text-center text-3xl md:text-4xl font-extrabold mb-8'>
        Welcome to FoodyHub
      </h1>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto'>
        {foods.map((food) => (
          <div key={food.id} className='card bg-base-100 w-full shadow-sm'>
            <figure className='px-4 pt-4'>
              <Image
                src={food.image}
                alt={food.name}
                width={300}
                height={200}
                className='w-full h-52 object-cover rounded-md'
              />
            </figure>

            <div className='card-body'>
              <h2 className='card-title'>{food.name}</h2>

              <p>{food.price} Taka</p>

              <p>{food.category}</p>

              <div className='card-actions justify-end'>
                <Link href={`/foods/${food.id}`}>
                  <button className='bg-green-500 hover:bg-green-600 px-4 py-2 rounded-md cursor-pointer'>
                    Order Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
