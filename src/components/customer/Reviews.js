// components/Reviews.js

const Reviews = () => (
    <section id="Reviews" className="py-10 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-40">
      <div className="flex flex-col items-center gap-8 max-w-4xl mx-auto">
        <div className="text-center">
          <h2 className="font-bold text-3xl sm:text-4xl md:text-5xl mb-4">
            What People Say About Us
          </h2>
          <p className="font-normal text-sm sm:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ullamcorper congue eros
          </p>
        </div>
        <div className="w-full">
          <div className="bg-pink p-6 sm:p-10 rounded-lg shadow-md max-w-2xl mx-auto">
            <div className="flex flex-col gap-6 text-center">
              <p className="font-black text-sm sm:text-base leading-7">
                Comfortable and met all my expectations!<br /> I ordered a medium and it fit perfectly
              </p>
              <p className="font-normal text-sm sm:text-base leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lacus, auctor pretium ac
                ultrices. Dui lacus dignissim tincidunt urna, at enim tempo. Pellentesque amet Lorem ipsum
                dolor sit amet,
              </p>
            </div>
            <div className="mt-8 text-center">
              <p className="text-base font-bold">Anisa Zahra</p>
              <p className="font-normal text-sm">Founder milenial</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
  
  export default Reviews;
  