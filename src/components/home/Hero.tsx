const Hero = () => {
  return (
    <section className="relative h-[calc(100vh-101px)] flex items-center">
      <div className="absolute top-0 left-0 w-full h-full bg-cover bg-center bg-hero-bg-image z-0" />
      <div className="relative z-10 text-white p-4 md:p-8 md:pr-3 md:pb-10">
        <div className="bg-brand-east-bay opacity-[78%] absolute top-0 left-0 w-full h-full z-0" />
        <div className="relative z-10 space-y-3">
          <p className="text-lg leading-6">
            Quantum Pulse Consulting: Empowering Futures, Digitally Defined
          </p>
          <h1 className="text-4xl 2xl:text-6xl font-acumin-sc">
            Progress & Innovate with Quantum Pulse
          </h1>
          <p className="leading-5">
            Where your {`business's`} digital aspirations become groundbreaking
            realities, setting you apart in {`today's`} competitive market
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
