const Introduction = () => {
  return (
    <>
      <section>
        <div className="flex justify-between max-w-7xl mx-auto mt-24 text-center">
          <div>
            <h1 className="text-4xl font-bold capitalize w-1/4	mx-auto  min-h-28">
              Who we are
            </h1>
            <p className="text-xl text-gray-500 pr-10 pb-10 pl-5 ">
              Khanal Foods Pvt. Ltd established in 2015 is one of the leading
              producers of natural human and pet products. Our mission is to
              produce premium quality products that are 100% natural and which
              meet the highest quality standards...
            </p>
          </div>
          <div>
            <h1 className="text-4xl font-bold capitalize w-1/3	mx-auto  min-h-28">
              how it all began
            </h1>
            <p className="text-xl text-gray-500 pr-10 pb-10 pl-5 ">
              Dogsee Chew was born when founder Bhupendra Khanal, on a trek in
              the Himalayaas, came across Churpi being fed to dogs. With Bhupi's
              aim to provide the best nutrition to dogs, Dogsee Chew was born...
            </p>
          </div>
        </div>
        <div className="py-5">
          <button className="py-3 px-6 text-blue-500 border-2 border-blue-500 rounded-2xl text-xl hover:border-black hover:text-black hover:underline">
            Learn More
          </button>
        </div>
      </section>
    </>
  );
};

export default Introduction;
