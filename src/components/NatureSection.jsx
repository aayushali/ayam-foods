const NatureSection = () => {
  return (
    <>
      <section
        className="max-w-7xl mx-auto -mt-56 flex items-center"
        style={{
          backgroundImage: `url(/images/Home-fiest.png)`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "850px",
        }}
      >
        <div>
          <h1 className="text-5xl py-2">Sourcing only from</h1>
          <span className="block text-6xl font-bold py-3">NATURE'S FINEST</span>
          <p className="text-2xl px-20">
            Khanal Foods produces premium foods that meet the highest quality
            standards. All products are sourced tranditionally from the 100%
            natural and pure ingredients without any modern intervention.
          </p>
          <button className="text-blue-600 text-2xl font-bold p-6">
            Learn More
          </button>
        </div>
      </section>
    </>
  );
};

export default NatureSection;
