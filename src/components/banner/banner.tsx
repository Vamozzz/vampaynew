import Image from "next/image";

const Banner = () => {
  return (
    <section className="flex flex-col gap-6">
      <div className="features_title">
        <p>Accept All International & Domestic Cards</p>
      </div>
      <div className="features_card_content">
        <p className="text-center" >
          Elevate your business by embracing a broad spectrum of payment
          options, ensuring a global and inclusive transaction experience.
        </p>
      </div>
      <div className="w-full p-8">
        <Image src={"/cards.svg"} width={100} height={100} alt={"."} layout="responsive" />
      </div>
    </section>
  );
};

export default Banner;
