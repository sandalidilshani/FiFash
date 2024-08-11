import Image from 'next/image';

const HomeSection = () => (
    <section id="Home" className="bg-pink w-full flex flex-row px-8 sm:px-16 lg:px-32 py-20 gap-3 justify-between lg:flex-nowrap max-lg:flex-col-reverse max-md:items-center">
        <div className="w-full lg:w-[34rem] min-[450px]:w-[20rem]">
            <p className="capitalize text-3xl lg:text-4xl xl:text-7xl font-bold leading-tight">Find the Best<br /> Fashion Style<br /> for You</p>
            <p className="text-lg lg:text-2xl font-normal pt-6 max-lg:pt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ullamcorper congue eros, eget tincidunt ipsum eleifend ut.
            </p>
            <button className="w-full lg:w-[15rem] h-[3rem] lg:h-[5rem] text-white text-lg lg:text-xl font-black rounded-xl bg-brown p-4 mt-6 lg:mt-10 drop-shadow-xl">
                Shop Now
            </button>
        </div>
        <div className="flex justify-center lg:justify-end w-[32rem] h-[37rem] max-lg:w-[27rem]">
            <Image src="/hero.jpeg" alt="Fashion Hero Image" width={320} height={370} className="w-full h-auto max-md:w-[20rem] max-md:h-[27rem] lg:max-lg:w-[27rem] lg:max-lg:h-[37rem] custom-rounded" />
        </div>
    </section>
);

export default HomeSection;
