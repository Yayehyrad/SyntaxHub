import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";
import {motion , useScroll} from 'framer-motion'

const HeroSection = () => {
  const { scrollYProgress } = useScroll();
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide my-10">
      Empowering Developers with 
        <span className="bg-gradient-to-r from-blue-500 to-blue-900 text-transparent bg-clip-text">
          {" "}
          Smart Tools
        </span>
      </h1>
      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
      Ignite your coding journey and transform your ideas into reality with our powerful, user-friendly IDE. Dive in today and watch your creativity soar!
      </p>
      <div className="flex justify-center my-14">
        <a
          href="#"
          className="bg-gradient-to-r from-blue-800 to-blue-900 py-3 px-4 mx-3 rounded-md hover:shadow-sm hover:shadow-blue-700 border border-blue-950"
        >
          Get Started
        </a>
        <a href="#" className="py-3 px-4 mx-3 rounded-md border shadow-sm shadow-green-400 hover:border-green-400 text-green-400">
        Learn More
        </a>
      </div>
      <div className="flex mt-10 justify-center">
        <motion.div initial={{x : -100 }} whileInView={{x:0}} viewport={{once : true}} transition={{type : "spring" , duration:2}} className="w-1/2 h-full mx-2 my-4 ">
        <video
          autoPlay
          loop
          muted
          className="rounded-lg   border border-blue-700 shadow-sm shadow-blue-400 "
        >
          <source src={video1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
        Discover how our IDE seamlessly integrates coding and creativity! Watch as we build stunning applications with intuitive tools that enhance your workflow. Unlock your potential and start coding like a pro!
        </p>
        </motion.div>
        <motion.div className="w-1/2 h-full mx-2 my-4 " initial={{x : +100 }} whileInView={{x:0}} transition={{type : "spring" , duration:2}} viewport={{once : true}}>
        <video
          autoPlay
          loop
          muted
          className="rounded-lg   border border-green-700 shadow-sm shadow-green-400  "
        >
          <source src={video2} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
        Explore the future of development with our AI-powered IDE! See how advanced features help you code smarter, automate tasks, and elevate your projects to new heights.
        </p>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
