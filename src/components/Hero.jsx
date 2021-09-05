const Hero = () => {
  return (
    <>
      {/* <div><img  src = ""  alt=""/></div>
        <div><img  src = ""  alt=""/></div>
        <div><img  src = ""  alt=""/></div>
        <div><img  src = ""  alt=""/></div> */}
      <section>
        <container className="grid grid-cols-3 gap-4 h-screen my-20">
          <div
            className="left-image "
            style={{
              backgroundImage: `url(/images/home-page-left.png)`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <div className="flex h-full justify-around">
              <div className="justify-self-start">
                <img
                  src="/images/home-left-top1.png"
                  alt=""
                  className="absolute bottom-0.5 left-8  h-24 animate__animated animate__slideInDown animate__infinite animate__slow animate__delay-3s"
                />
              </div>
              <div>
                <img
                  src="/images/home-left-top2.png"
                  alt=""
                  className="absolute bottom-0 h-24  animate__animated animate__slideInDown animate__infinite animate__slow animate__delay-3s"
                />
              </div>
            </div>
          </div>
          <div className="center-text text-green-600 mx-20 my-10 ">
            <div>
              <img
                src="/images/home-left-top.png"
                alt=""
                className="h-32  animate__animated animate__slideInDown animate__infinite animate__slow animate__delay-3s"
              />
              <img
                src="/images/home-left-top3.png"
                alt=""
                className="w-40  animate__animated animate__slideInDown animate__infinite animate__slow animate__delay-3s"
              />
            </div>
            <h1 className="text-5xl leading-relaxed">Sharing the &nbsp;</h1>
            <span className="text-6xl text-black font-bold block py-4">
              GOODNESS OF NATURE&nbsp;
            </span>
            <h1 className="text-5xl px-28 ">Across the globe</h1>

            <div>
              <img
                src="/images/home-page-center-bottom.png"
                alt=""
                className="h-32 w-40 mx-auto my-8  animate__animated animate__slideInDown animate__infinite animate__slow animate__delay-3s"
              />
            </div>
          </div>
          <div
            className="right-image"
            style={{
              backgroundImage: `url(/images/home-page-right1.png)`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <div>
              <img
                src="/images/Home-page-right-top1.png"
                alt=""
                className="absolute h-28 w-40 right-3  animate__animated animate__slideInDown animate__infinite animate__slow animate__delay-3s"
              />
            </div>
            <div>
              <img
                src="/images/Home-page-right-bottom.png"
                alt=""
                className="absolute bottom-0  animate__animated animate__slideInDown animate__infinite animate__slow animate__delay-3s"
              />
            </div>
          </div>
        </container>
      </section>
    </>
  );
};

export default Hero;
