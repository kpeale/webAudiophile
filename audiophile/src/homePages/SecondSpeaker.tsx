import Button from '../components/Button';

const SecondSpeaker = () => {
  return (
    <section className='mt-5  mx-auto  max-w-[69.375rem] lg:max-w-[47.2rem] mobile:w-full bg-dark-gray'>
      <div className='flex flex-row'>
        <div>
          <p className='text-[1.75rem] font-bold font-manrope tracking-bold-font '>
            Z x 7 Speaker
          </p>
          <div>
            <Button
              bgColor='#FFFFFF'
              hoverColor='#000000'
              textColor='#000000'
              hoverTextColor='#FFFFFF'
            >
              See product
            </Button>
          </div>
        </div>
        <div>
          <img
            src='/images/secondSpeaker-section.png'
            alt='speaker'
          />
        </div>
      </div>
    </section>
  );
};

export default SecondSpeaker;
