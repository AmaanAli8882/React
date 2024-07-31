import "./HeroSection.css";

const HeroSection = () => {
  return (
    <>
      <div>
        <h1 className="text-center md:text-[50px] md:font-bold mt-20 sm:text-[30px] sm:font-semibold">
          Transform customer feedback into{" "}
        </h1>
        <h1 className="md:text-[50px] md:font-bold md:my-1 md:mb-6 text-center sm:text-[30px] sm:font-semibold sm:my-1 sm:mb-6 mt-5 bg-gradient-to-r from-[#39348f] to-[#f2758b] text-transparent bg-clip-text">
          Product growth with AI
        </h1>

        <p className="text-center md:mx-40 md:px-20 md:text-xl sm:mx-20 sm:text-md">
          All customer feedback unified automatically and categorized accurately
          to empower product orgs to prioritize and build what matters.
        </p>
      </div>
      <div className="flex justify-center mt-10">
        <a 
        href="/#"
        className="border h-10 px-16 py-2 rounded-full mx-4 hover:bg-gradient-to-r hover:from-[#914ac8] hover:to-[#f2758b]"
        >Book a Demo</a>
        <a 
        href="/#"
        className="border h-10 px-16 py-2 rounded-full mx-4 hover:bg-gradient-to-r hover:from-[#914ac8] hover:to-[#f2758b]"
        >Take Product Tour &gt;</a>
      </div>
      <hr className="mx-20 opacity-10 my-12" />
    </>
  );
};

export default HeroSection;
