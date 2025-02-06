const Banner = () => {
  return (
    <div className="grid grid-cols-1  gap-6 lg:gap-4  lg:grid-cols-2 items-center w-[90%] mx-auto py-10">
      {/* Text Container */}
      <div className="space-y-6 order-1">
        <p className="text-sm lg:text-base uppercase text-gray-500 tracking-wider">
          Welcome to my world
        </p>
        {/* Title */}
        <div className="flex items-center gap-2">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Hi, I’m{" "}
          </h1>
          <span className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#FF014F]">
            Rajib Sardar
          </span>
        </div>
        {/* Subtitle */}
        <div className="flex items-center gap-2">
          <span className="text-xl md:text-2xl lg:text-4xl font-semibold text-[#FF014F]">
            a
          </span>
          <h2 className="text-xl md:text-2xl lg:text-4xl font-semibold">
            Junior Front-end Developer
          </h2>
        </div>
        {/* Description */}
        <p className="text-gray-600 leading-relaxed">
          I am a passionate and detail-oriented Junior Frontend Developer and
          Web Developer, dedicated to crafting visually appealing and
          user-friendly websites. With a strong foundation in modern web
          technologies, I am creating responsive and dynamic interfaces that
          deliver seamless user experiences. While my primary focus lies in
          frontend development, I am also expanding my expertise to backend
          technologies, making me a budding Junior Full Stack Developer...
        </p>
      </div>
      {/* Image Container */}
      <div className="flex justify-center w-full lg:order-1 items-center rounded-lg relative">
        <div className="relative ">
          <img
            src="https://i.ibb.co/rKChCcDw/my-image-1-1.png"
            alt="Rajib Sardar"
            className=" lg:w-full h-screen md:pl-12 p-2 object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
