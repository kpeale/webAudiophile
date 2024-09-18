import Button from '../components/Button';

const SectionSpeaker = () => {
  return (
    <>
      <section className=' mt-[10rem] mx-auto  max-w-[69.375rem] lg:max-w-[47.2rem] mobile:w-full bg-dark-orange relative rounded-md lg:pb-[8rem]'>
        <div className='absolute lg:hidden  '>
          <img
            src='/images/oval-big.png'
            alt='oval'
          />
        </div>
        <div className='absolute top-[6.2rem] left-[6rem] lg:left-[7rem] mobile:left-[14rem]   mobile:top-4 lg:top-0 fsm:left-[11rem] ysm:left-[9rem] rsm:left-[7rem] psm:left-[5rem] xsm:left-[3rem] bsm:left-[2rem] nsm:hidden'>
          {/* inner circle */}
          <img
            src='/images/oval-small.png'
            alt='oval'
            className='lg:hidden'
          />
          <img
            src='/images/oval-mobileouter.png'
            alt='oval'
            className='hidden lg:block mobile:hidden'
          />

          <img
            src='/images/oval-Mobile-for-inner.png'
            alt='oval'
            className='hidden mobile:block nsm:hidden'
          />
        </div>

        <div className='absolute top-[7.8rem]  left-[8rem]  lg:left-[9rem] mobile:left-[13rem] fsm:left-[10rem]  lg:top-0  ysm:left-[8rem] rsm:left-[6rem] psm:left-[4rem] xsm:left-[2rem] bsm:left-[1rem] nsm:hidden'>
          {/* outer */}
          <img
            src='/images/oval-verySmall.png'
            alt='oval'
            className='lg:hidden'
          />
          <img
            src='/images/Oval-mobile.png'
            alt='oval'
            className='hidden lg:block mobile:hidden'
          />

          <img
            src='/images/oval-Mobile-for-outer.png'
            alt='oval'
            className='hidden mobile:block nsm:hidden'
          />
        </div>
        <div className='flex flex-row lg:flex-col lg:content-center lg:items-center gap-[11rem] lg:gap-0  '>
          <div className='z-40 ml-[10rem] pt-[2rem] lg:pl-0 mobile:pt-12 mobile:pr-9 sm:ml-7 gsm:ml-12 ysm:ml-6 qsm:ml-12 rsm:ml-6 tsm:ml-12 psm:mr-10 csm:mr-2 dsm:ml-12 dsm:mr-0 xsm:ml-6 nsm:ml-1'>
            <img
              src='/images/image-shopSpeaker.png'
              alt='speaker'
              className='lg:w-[12.326rem] mobile:hidden '
            />

            <img
              src='/images/speaker-mobile.png'
              alt='speaker'
              className='hidden mobile:block nsm:w-[5rem]'
            />
          </div>
          <div className=' z-50 pt-[5rem] lg:flex lg:flex-col lg:pt-[5.5rem] lg:content-center lg:items-center mobile:pt-8 gsm:ml-4 ysm:ml-2 psm:mr-2 nsm:ml-0 nsm:mr-0'>
            <div className='text-white font-manrope text-[56px] mobile:text-[2.25rem] nsm:text-[1.8rem]  mobile:leading-none tracking-bold-font leading-regular-font lg:flex lg:flex-col lg:items-center font-bold'>
              <h2>ZX9 </h2>
              <h2>SPEAKER</h2>
              <div className='max-w-[21.813rem] nsm:max-w-[10rem] nsm:pl-0 lg:pl-12 leading-medium-font mt-4 lg:flex lg:justify-center'>
                <p className='text-white font-manrope text-[15px]'>
                  Upgrade to premium speakers that are phenomenally built to
                  deliver truly remarkable sound.
                </p>
              </div>
              <div className='mt-2'>
                <Button
                  bgColor='#000000'
                  hoverColor='#4C4C4C'
                  textColor='#FFFFFF'
                >
                  See product
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className='hidden lg:block lg:absolute lg:top-[-3rem] mobile:top-[26%] mobile:transform  mobile:-translate-y-1/2 sm:mt-[2rem] ysm:mt-[3.5rem] qsm:mt-16 rsm:mt-[5.5rem] tsm:mt-[6.8rem] csm:mt-[7.5rem] dsm:mt-[8.5rem] xsm:mt-[9.5rem] bsm:mt-[10.5rem] nsm:hidden'>
          <img
            src='/images/Oval Copy 2.png'
            alt='oval'
          />
        </div>
      </section>
      <SectionSpeaker />
    </>
  );
};

export default SectionSpeaker;
