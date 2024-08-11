import Image from 'next/image';

const CollectionSection = () => (
    <section id="Collection">
        <div className="flex flex-col flex-wrap px-8 w-full py-20 items-center gap-5 max-md:justify-center max-md:px-2">
            <div className="flex flex-col items-center">
                <p className="font-bold text-[4.25rem] max-md:text-[2rem]">New Collection</p>
                <p className="text-[2rem] max-md:text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ullamcorper congue eros</p>
            </div>
            <div className="flex flex-row gap-5 flex-wrap md:justify-center max-sm:justify-center">
                {/* Collection items */}
                {[1, 2, 3].map(num => (
                    <div key={num} className="relative lg:w-[22rem] md:w-[10rem] sm:w-[20rem]">
                        <Image src={`/style${num}.jpeg`} alt={`Style ${num}`} width={320} height={260} className="w-full h-[26rem] object-cover rounded-t-lg" />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <p className="uppercase text-black text-lg font-bold bg-white px-24 py-7 opacity-75">Style {num}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export default CollectionSection;
