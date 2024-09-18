import { useState } from 'react';
import { Link } from 'react-router-dom';
import useMediaQuery from '../hooks/useMediaQuery';

const Navigation = () => {
  const isAboveMediumScreens = useMediaQuery('(min-width:1060px)');
  const [showLinks, setShowLinks] = useState(false);

  return (
    <>
      <nav className='bg-[#141414]'>
        {/* general div */}
        <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-7'>
          {/* div for logo and menu */}
          <div className='flex flex-row gap-7 sm:gap-24 xsm:gap-10 lsm:gap-5'>
            <div className='hidden lg:block'>
              <button onClick={() => setShowLinks(!showLinks)}>
                <img
                  src='/images/menu.png'
                  alt='menu'
                />
              </button>
            </div>
            {/* div for logo */}
            <div>
              <img
                src='/images/audiophile.png'
                alt='logo'
              />
            </div>
          </div>

          <div className=' flex items-center gap-8 text-white uppercase font-manrope font-bold lg:hidden'>
            <Link
              to='/'
              className='hover:text-dark-orange'
            >
              Home
            </Link>
            <Link
              to='/headphones'
              className='hover:text-dark-orange'
            >
              Headphones
            </Link>
            <Link
              to='/speakers'
              className='hover:text-dark-orange'
            >
              Speakers
            </Link>
            <Link
              to='/earphones'
              className='hover:text-dark-orange'
            >
              Earphones
            </Link>
          </div>

          {/* cart */}
          <div>
            <Link to='/cart'>
              <img
                src='/images/cart.png'
                alt='cart'
              />
            </Link>
          </div>
        </div>

        {/* border */}
        <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='border-b-2 border-dark-gray'></div>
        </div>

        {/* Mobile Menu */}
        {!isAboveMediumScreens && showLinks && (
          <div className='bg-black drop-shadow-xl w-[300px] h-full z-30 left-0 bottom-0'>
            <div className='text-white uppercase font-manrope flex flex-col gap-8 font-bold py-5 px-4'>
              <Link
                to='/'
                className='hover:text-dark-orange'
              >
                Home
              </Link>
              <Link
                to='/headphones'
                className='hover:text-dark-orange'
              >
                Headphones
              </Link>
              <Link
                to='/speakers'
                className='hover:text-dark-orange'
              >
                Speakers
              </Link>
              <Link
                to='/earphones'
                className='hover:text-dark-orange'
              >
                Earphones
              </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navigation;
