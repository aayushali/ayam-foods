const LeadingSection = () => {
  return (
    <>
      <section className="grid grid-cols-2 max-w-7xl mx-auto">
        <div>
          <img src="/images/farmers.png" alt="" className="h-full" />
        </div>
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-4xl font-bold capitalize w-1/2 mx-auto  min-h-28">
            Leading sustainably
          </h1>
          <p className="text-xl text-gray-500 pr-10 pb-10 pl-5 text-justify font-bold">
            We have always strived towards attaining sustainability and having a
            positive impact on the communities we serve. It's our goal that we
            enrich the lives of our partners, suppliers, and customers through
            sustainable practices.
          </p>
          <button className="text-blue-500 text-xl">Learn More</button>
        </div>
      </section>
    </>
  );
};

export default LeadingSection;
