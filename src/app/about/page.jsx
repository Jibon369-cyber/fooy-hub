
export const metadata = {
  title: "About FoodyHub",
  description: "About our qualities and our service",
};

const AboutPage = () => {
  return (
    <main className='min-h-[70vh] px-6 py-16'>
      <div className='max-w-4xl mx-auto text-center'>
        <h1 className='text-4xl md:text-5xl font-extrabold mb-6'>
          About <span className='text-orange-400'>FoodyHub</span>
        </h1>

        <p className='text-lg leading-8 mb-8'>
          FoodyHub is a simple and convenient food delivery platform where you
          can discover your favorite foods and order delicious meals from the
          comfort of your home.
        </p>

        <div className='grid md:grid-cols-2 gap-8 text-left'>
          <div className='p-6 rounded-2xl shadow-md bg-base-100'>
            <h2 className='text-2xl font-bold mb-3'>Our Mission</h2>

            <p className='leading-7'>
              Our mission is to make food ordering simple, convenient, and
              enjoyable. We want to help people find delicious food without
              making the ordering process complicated.
            </p>
          </div>

          <div className='p-6 rounded-2xl shadow-md bg-base-100'>
            <h2 className='text-2xl font-bold mb-3'>Why FoodyHub?</h2>

            <p className='leading-7'>
              From burgers and pizza to pasta, biriyani, snacks, and desserts,
              FoodyHub brings a variety of delicious foods together in one
              place.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AboutPage;
