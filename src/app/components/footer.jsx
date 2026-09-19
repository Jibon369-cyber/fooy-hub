import Link from "next/link";

const Footer = () => {
  return (
    <footer className='bg-zinc-900 text-white mt-16'>
      <div className='max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8'>
        {/* Brand */}
        <div>
          <h2 className='text-2xl font-black tracking-tighter'>
            Foody<span className='text-orange-400'>Hub</span>
          </h2>

          <p className='mt-3 text-zinc-400'>
            Delicious food, delivered to your door.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className='text-lg font-bold mb-3'>Quick Links</h3>

          <div className='flex flex-col gap-2 text-zinc-400'>
            <Link href='/' className='hover:text-white'>
              Home
            </Link>

            <Link href='/foods' className='hover:text-white'>
              Foods
            </Link>

            <Link href='/reviews' className='hover:text-white'>
              Reviews
            </Link>

            <Link href='/about' className='hover:text-white'>
              About
            </Link>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h3 className='text-lg font-bold mb-3'>Contact Us</h3>

          <p className='text-zinc-400'>Email: support@foodyhub.com</p>
          <p className='text-zinc-400 mt-2'>Phone: +880 1234-567890</p>
        </div>
      </div>

      <div className='border-t border-zinc-700 text-center py-4 text-sm text-zinc-400'>
        © 2026 FoodyHub. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
