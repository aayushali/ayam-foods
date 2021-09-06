const OurBrands = () => {
  return (
    <>
      <section
        className="max-w-7xl mx-auto flex items-center flex-col justify-center relative"
        style={{
          backgroundImage: "url(/images/home-product-bg.png)",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          minHeight: "900px",
        }}
      >
        <h1 className="text-4xl font-bold capitalize w-full pb-20 -mt-32">
          Our Brands
        </h1>
        <div className="flex space-x-2 min-h-1/2 ">
          <a href="/">
            <img src="/images/Logo-with-pack-01.png" alt="" />
          </a>
          <a href="/">
            <img src="/images/Logo-with-pack-02.png" alt="" />
          </a>
          <a href="/">
            <img src="/images/Logo-with-pack-03.png" alt="" />
          </a>
        </div>
      </section>
    </>
  );
};

export default OurBrands;
