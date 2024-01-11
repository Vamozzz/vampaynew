


import Image from "next/image";
import CustomButton from "../customButton/customButton";
import TextButton from "../customButton/textButton";


interface HeroItem {
  title1: string;
  spannedTitle: string;
  title2: string;
  content: string;
  lineImage: string;
}

interface HeroAllSectionProps {
  heroContent: HeroItem[];
}

const HeroAllSection: React.FC<HeroAllSectionProps> = ({ heroContent }) => {

  const gradientTextStyle = {
    background: "linear-gradient(to bottom, #FF9DD3, #866AE8)",
    WebkitBackgroundClip: "text", // For Safari
    color: "transparent",
  };

  return (
    <section className="" style={{ background: "linear-gradient(to right, #A5ADFF, #ECCAFF)" }}>
      {heroContent.map((item, index) => (
        <div key={index}   className="flex flex-col gap-10 lg:w-2/3  justify-center h-[100vh]  items-center m-auto p-4 ">
          <div className=" lg:w-5/6 flex flex-col items-center">
            <p className="hero__title" style={{textAlign:"center"}}>
              {item.title1}
              <span style={gradientTextStyle} className="pl-3">{item.spannedTitle}</span> {item.title2}
            </p>
            <Image
                src={item?.lineImage}
                alt="logo"
                width={150}
                height={40}
                className="mx-auto lg:w-auto md:mx-0"
              />
          </div>
          <div>
            <p className="hero__subtitle" style={{textAlign:"center"}}>{item.content}</p>
          </div>
          <div className="my-1 ">
            <div className="flex justify-center gap-3 md:justify-start button_Font">
              <CustomButton  filled={true} buttonMedium={true}>
                Get Started
              </CustomButton>
              <TextButton endIcon={true}>Contact Us</TextButton>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default HeroAllSection;
