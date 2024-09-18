import { Link } from 'react-router-dom';
import SectionSpeaker from './SectionSpeaker';
const SectionShop = () => {
  return (
    <>
      <section className='mt-[12rem]  lg:mt-[10rem]'>
        <div className='flex flex-row mobile:flex-col mobile:items-center justify-center gap-[2.1rem] lg:gap-10 md:gap-[2rem]  mobile:gap-24'>
          <div className=' relative'>
            <div className='bg-[#F1F1F1]  w-[21.875rem] lg:w-[13.94rem] mobile:w-[20.4375rem] nsm:w-[18rem]  h-[12.75rem] lg:h-[10.3125rem] mobile:h-[10.3125rem] rounded-lg  pt-28 lg:pt-[5rem] flex flex-col items-center z-10'>
              <p className='font-manrope font-bold text-[1.125rem] uppercase'>
                Headphones
              </p>
              <Link
                to='/'
                className='flex flex-row gap-2 pt-4 '
              >
                <p className='font-manrope text-[13px] uppercase text-dark-gray  hover:text-dark-orange'>
                  shop
                </p>
                <img
                  src='/images/path-shop.png'
                  alt='path'
                />
              </Link>
            </div>
            <div className='absolute z-40 top-[-5rem] lg:top-[-6rem] left-[7rem]  lg:left-[3rem] mobile:ml-16  nsm:ml-10'>
              <img
                src='/images/headphone-shop.png'
                alt='headphone'
                className='md:w-[4.995rem] mobile:mt-8 '
              />
            </div>
          </div>

          {/* second div */}
          <div className=' relative'>
            <div className='bg-[#F1F1F1]  w-[21.875rem] lg:w-[13.94rem] mobile:w-[20.438rem]  nsm:w-[18rem] h-[12.75rem] lg:h-[10.3125rem] mobile:h-[10.3125rem] rounded-lg  pt-28 lg:pt-[5rem] flex flex-col items-center z-10'>
              <p className='font-manrope font-bold text-[1.125rem] uppercase'>
                speakers
              </p>
              <Link
                to='/'
                className='flex flex-row gap-2 pt-4'
              >
                <p className='font-manrope text-[13px] uppercase text-dark-gray  hover:text-dark-orange'>
                  shop
                </p>
                <img
                  src='/images/path-shop.png'
                  alt='path'
                />
              </Link>
            </div>
            <div className='absolute z-40 top-[-5rem] mobile:mt-10  left-[7rem]  lg:left-[3.5rem]  mobile:ml-16 nsm:ml-10'>
              <img
                src='/images/speaker-shop.png'
                alt='speaker'
                className='mobile:w-[4.995rem]'
              />
            </div>
          </div>
          {/* third div */}
          <div className=' relative'>
            <div className='bg-[#F1F1F1] w-[21.875rem] lg:w-[13.94rem] mobile:w-[20.438rem]  nsm:w-[18rem] h-[12.75rem] lg:h-[10.3125rem] mobile:h-[10.3125rem] rounded-lg  pt-28 lg:pt-[5rem] flex flex-col items-center z-10'>
              <p className='font-manrope font-bold text-[1.125rem] uppercase'>
                earphones
              </p>
              <Link
                to='/'
                className='flex flex-row gap-2 pt-4'
              >
                <p className='font-manrope text-[13px] uppercase text-dark-gray  hover:text-dark-orange'>
                  shop
                </p>
                <img
                  src='/images/path-shop.png'
                  alt='path'
                />
              </Link>
            </div>
            <div className='absolute z-40 top-[-4rem] mobile:mt-8 left-[7rem]  lg:left-[4rem] mobile:ml-16 nsm:ml-10'>
              <img
                src='/images/earphones-shop.png'
                alt='earphone'
                className='mobile:w-[4.995rem] '
              />
            </div>
          </div>
        </div>
      </section>
      <SectionSpeaker />
    </>
  );
};

export default SectionShop;
