import { heroSection } from "@/constants/features";
import CustomButton from "../customButton/customButton";
import Image from "next/image";
import TextButton from "../customButton/textButton";

const Hero = () => {
  return (
    <section className="h-[90vh] flex flex-col w-full gap-4 md:flex md:flex-row md:mt-2  ">
      <div className="hero__image-overlay" />
      <div className="flex flex-col gap-3 my-2 mx-2 md:w-1/2 md:gap-8 md:m-10">
        <div className="hero__title">
          <p>Your one stop,</p>
          <p>Integrated Payment</p>
          <p>solution</p>
          <Image
            src={heroSection?.lineImage}
            alt="logo"
            width={150}
            height={40}
            className="mx-auto w-auto md:mx-0"
          />
        </div>
        <div>
          <p className="hero__subtitle">
            Simplify transactions, streamline payments, where integration meets ease, making it your all-in-one payment solution.
          </p>
          {/* <p className="hero__subtitle">
            
          </p>
          <p className="hero__subtitle"></p> */}
        </div>
        <div className="my-1 ">
          <div className=" flex justify-center gap-3 md:justify-start">
            <CustomButton filled={true} buttonMedium={true}>
              login
            </CustomButton>
            <TextButton endIcon={true}>Our features</TextButton>
          </div>
        </div>
      </div>
      <div className=" w-auto md:w-1/2 ">
        <Image
          src={heroSection?.heroImage}
          alt="logo"
          width={100}
          height={100}
          className="w-auto"
        />
      </div>
    </section>
  );
};

export default Hero;
