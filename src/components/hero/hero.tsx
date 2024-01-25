import { heroSection } from "@/constants/features";
import CustomButton from "../customButton/customButton";
import Image from "next/image";
import TextButton from "../customButton/textButton";
import UserBrands from "../userBrands/userBrands";
import { handleLogin } from "@/utils/customFunctions";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="">
      <div className="hero__image-overlay" />

      <div className=" flex flex-col justify-center items-center w-full lg:flex-row gap-6 mt-10 lg:px-20 h-[100vh] lg:h-[100vh] ">
        <div className="flex flex-col justify-center gap-10  lg:w-1/2 items-center  lg:items-start  ">
          <div className="hero__title ">
            <p>Your one stop,</p>
            <p>Integrated Payment</p>

            <p>solution</p>
            <Image
              src={heroSection?.lineImage}
              alt="logo"
              width={150}
              height={40}
              className="mx-auto md:w-auto lg:mx-0 align-middle"
            />
          </div>
          <div className="px-2">
            <p className="hero__subtitle">
              Simplify transactions, streamline payments, where integration
              meets ease, making it your all-in-one payment solution.
            </p>
          </div>
          <div className="my-1">
            <div className=" flex justify-center gap-3 md:justify-start">
              <CustomButton
                onClick={handleLogin}
                filled={true}
                buttonMedium={true}
              >
                Get started
              </CustomButton>
              <TextButton endIcon={true}>
                <Link href={"/products/collection"}>Our features</Link>
              </TextButton>
            </div>
          </div>
        </div>
        <div className=" lg:w-1/2  ">
          {/* <Image
            src={heroSection?.heroImage}
            alt="logo"
            width={80}
            height={80}
            // className="w-auto"
            layout="responsive"
          /> */}
          <object
            aria-label="Admin panel display"
            width={80}
            height={80}
            className="b3_gs w-full h-full "
            type="image/svg+xml"
            data="/vampayhome.svg"
          ></object>
        </div>
      </div>

      {/* <object aria-label="SVGator astronaut animation" width="1404" height="948" className="b3_gs" type="image/svg+xml" data="//cdn.svgator.com/assets/main-page/fold1/astronaut-hero.svg">

</object> */}
      {/* <object aria-label="SVGator astronaut animation" width="1404" height="948" className="b3_gs" type="image/svg+xml" data="/vampayhome.svg">

</object> */}
    </section>
  );
};

export default Hero;
