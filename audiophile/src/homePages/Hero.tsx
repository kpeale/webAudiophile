import Button from '../components/Button';
import SectionShop from './SectionShop';

const Hero = () => {
  return (
    <>
      <div className='bg-[#141414] px-[7.2rem] lg:px-0 flex flex-row gap-8 lg:flex-col lg:items-center lg:justify-center pb-[1.5rem] lg:pb-[45rem] fsm:pb-[40rem] ysm:pb-[35rem] tsm:pb-[30rem] xsm:pb-[24rem] lsm:pb-[18rem] '>
        <div className='pt-[6rem]  w-[40%] lg:order-2 lg:pt-0 lg:relative  '>
          <div className='lg:absolute lg:z-40 lg:pt-[12rem] md:mt-[-3rem] fsm:pt-[-2rem] ysm:mt-[-2rem]  tsm:mt-[-5rem]  xsm:mt-[-5rem] bsm:mt-[-6.5rem] lsm:mt-[-9rem] lg:mx-14 ysm:ml-12  tsm:mx-9 xsm:mx-8 bsm:mx-4  '>
            <p className='font-manrope text-white-10 text-[14px] ysm:text-[12px] xsm:text-[10px] uppercase leading-regular-font tracking-regular-font lg:text-center  md:tracking-regular-mobile md:leading-none fsm:tracking-normal'>
              New product
            </p>
          </div>

          <div className='lg:absolute z-40 lg:pt-[15rem] md:mt-[-4rem] ysm:mt-[-2.5rem] tsm:mt-[-6rem] xsm:mt-[-6.5rem] bsm:mt-[-8.2rem]  lsm:mt-[-10.5rem] md:mx-0 md:px-0  '>
            <p className='font-bold font-manrope text-[3.5rem] md:text-[3rem] fsm:text-[2.5rem] ysm:text-[2rem] tsm:text-[1.5rem] bsm:text-[1.2rem] lsm:text-[1rem] md:mx-[-1rem]  uppercase leading-bold-font lg:leading-none tracking-bold-font text-white max-w-[396px] tsm:ml-1 xsm:ml-[-1rem] lsm:ml-[-10px]'>
              XX99 Mark II
            </p>
            <p className='font-bold font-manrope text-[3.5rem] md:text-[3rem] fsm:text-[2.5rem] ysm:text-[2rem] tsm:text-[1.5rem] bsm:text-[1.2rem] lsm:text-[1rem]  md:mx-[-1rem]    uppercase leading-bold-font tracking-bold-font text-white max-w-[396px] mt-[-1.8rem] tsm:mt-[5px] lg:mt-[-10px] tsm:ml-1 xsm:ml-[-1rem] lsm:ml-[-10px]'>
              Headphones
            </p>
          </div>
          <div className=' max-w-[349px] lg:max-w-[500px] md:max-w-[800px] pt-4 lg:absolute lg:z-40 lg:pt-[24rem] md:mt-[-6.5rem] ysm:mt-[-6rem]   md:mx-[-1rem] tsm:mt-[-10rem] xsm:mt-[-11rem] bsm:mt-[-13rem] lsm:mt-[-16.5rem]'>
            <p className='font-manrope font-medium text-[15px] tsm:text-[11px] bsm:text-[10px] leading-medium-font tsm:leading-3 lg:leading-5  text-white '>
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast.
            </p>
          </div>
          <div className='pt-8 lg:absolute lg:z-40  lg:top-[30rem] md:mt-[-3rem] lg:left-[8.8rem] md:ml-[-2rem] fsm:ml-[-4rem] fsm:mt-[-5rem] ysm:mt-[-8rem] ysm:ml-[-5rem] tsm:mt-[-13rem] tsm:ml-[-6rem] xsm:mt-[-15rem] xsm:ml-[-7rem] bsm:mt-[-17rem] bsm:ml-[-7.5rem] lsm:mt-[-20rem] lsm:ml-[-8rem]  '>
            <Button
              bgColor='#D87D4A'
              hoverColor='#FBAF85'
              textColor='#FFFFFF'
            >
              see product
            </Button>
          </div>
        </div>
        <div className='w-[60%] lg:hidden'>
          <img
            src='/images/headphonesII.png'
            alt='headphones'
          />
        </div>

        <div className='hidden lg:flex lg:justify-center lg:order-1  lg lg:w-full lg:pt-[44rem] md:mt-[-7rem] ysm:mt-[-12rem] tsm:mt-[-20rem] xsm:mt-[-20rem] bsm:mt-[-25rem] lsm:mt-[-30rem]  lg:absolute lg:z-10  '>
          <img
            src='/images/headphone-mobile.png'
            alt='headphones'
          />
        </div>
      </div>
      <SectionShop />
    </>
  );
};

export default Hero;
