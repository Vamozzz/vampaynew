import { heroSection } from "@/constants/features";
import CustomButton from "../customButton/customButton";
import Image from "next/image";
import TextButton from "../customButton/textButton";
import UserBrands from "../userBrands/userBrands";

const Hero = () => {
  return (
    <section className="pt-16">
      <div className=" flex flex-col justify-between w-full lg:pl-20 gap-10 lg:gap-6 lg:flex lg:flex-row  pt-10 ">
        <div className="hero__image-overlay" />
        <div className="flex flex-col gap-8 my-2  md:w-1/2 md:gap-8 ">
          <div className="hero__title">
            <p>Your one stop,</p>
            <p>Integrated Payment</p>
            <span>
              {" "}
              <p>solution</p>
              <Image
                src={heroSection?.lineImage}
                alt="logo"
                width={150}
                height={40}
                className="mx-auto lg:w-auto md:mx-0"
              />
            </span>
          </div>
          <div className="px-2">
            <p className="hero__subtitle">
              Simplify transactions, streamline payments, where integration
              meets ease, making it your all-in-one payment solution.
            </p>
            {/* <p className="hero__subtitle">
            Simplify transactions, streamline payments, where
          </p>
          <p className="hero__subtitle">
            integration meets ease, making it your all-in-one
          </p>
          <p className="hero__subtitle">payment solution.</p> */}
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
      </div>
      <div className="py-4">
      <UserBrands />
      </div>
    </section>
  );
};

export default Hero;
