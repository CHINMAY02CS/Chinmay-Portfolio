import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-100 bg-gradient-to-b from-gray-800 to-black text-white about"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-5">
        I am a final year student, working in both, backend and frontend programming. Excited for improving my skills and learning new technologies. I'm open to learn any web technology.
        </p>

        <br />

        <p className="text-xl">
        I like to code matters from scratch and love the idea of bringing thoughts to life.  <br /> <br />
        I value minimalistic designs, thoughtful branding of the content, and customer relatable experience. Let’s discover together how we can make a project better!<br /> <br />
        </p>
      </div>
    </div>
  );
};

export default About;
