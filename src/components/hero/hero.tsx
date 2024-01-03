import { heroSection } from "@/constants/features";
import CustomButton from "../customButton/customButton";
import Image from "next/image";

const Hero = () => {
  return (
    <div>
      <div className="hero__image-overlay" />
      <div className="flex-col ">
        <div className="">
          <p className="hero__title">{heroSection?.title}</p>
        </div>
        <div>
          <p className="hero__subtitle">{heroSection?.subTitle}</p>
        </div>
        <div>
          <div className=" flex justify-center space-x-3 ">
            <CustomButton filled={true} buttonSize={"small"}>
              login
            </CustomButton>
            <CustomButton buttonSize={"small"}>Open an Account</CustomButton>
          </div>
        </div>
      </div>
      <div className="">
        <Image
          src={heroSection?.heroImage}
          alt="logo"
          width={350}
          height={400}
        />
      </div>
    </div>
  );
};

export default Hero;
