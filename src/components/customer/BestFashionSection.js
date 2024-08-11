import Image from 'next/image';

const BestFashionSection = () => (
    <section id="Best-Fashion" className="py-10 px-4 sm:px-6 md:px-8 lg:px-20 xl:px-24">
        <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 relative mb-8 md:mb-0">
                <Image src="/bestfashion.jpeg" alt="Best Fashion Image" width={640} height={320} className="rounded-lg h-[32rem] w-full object-cover" />
                <div className="hidden md:block h-24 w-24 bg-[#e9b9a8] absolute -bottom-8 -right-8"></div>
            </div>
            <div className="md:w-1/2 md:pl-12">
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">Best Fashion<br />Since 2014</h2>
                <p className="text-base sm:text-lg font-normal leading-relaxed mb-8">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ullamcorper congue eros, eget tincidunt ipsum eleifend ut orem ipsum dolor sit amet consectetur adipiscing elit Sed ullamcorper congue eros eleifend ut tincidunt ipsum.
                </p>
                <div className="flex justify-between">
                    <div className="text-center">
                        <p className="text-3xl font-bold">2014</p>
                        <p className="text-sm">FiFash Founded</p>
                    </div>
                    <div className="text-center">
                        <p className="text-3xl font-bold">8900+</p>
                        <p className="text-sm">Product Sold</p>
                    </div>
                    <div className="text-center">
                        <p className="text-3xl font-bold">3105+</p>
                        <p className="text-sm">Best Reviews</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default BestFashionSection;
