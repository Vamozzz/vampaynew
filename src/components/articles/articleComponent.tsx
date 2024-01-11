import Image from "next/image";

export default function Article() {
  const bolgData = [
    {
      image: "/rafiki.svg",
      title: "Unlocking Efficiency: The Offline Integration Revolution",
      content:
        "Discover the simplicity of offline integration with Vampay Revolutionize your payment processes with this game-changing feature...",
      writerImage: "/blogger.svg",
      writerName: "Sanika Jadhav",
      time: "8",
    },
    {
      image: "/rafiki.svg",
      title: "Unlocking Efficiency: The Offline Integration Revolution",
      content:
        "Discover the simplicity of offline integration with Vampay Revolutionize your payment processes with this game-changing feature...",
      writerImage: "/blogger.svg",
      writerName: "Sanika Jadhav",
      time: "8",
    },
    {
      image: "/rafiki.svg",
      title: "Unlocking Efficiency: The Offline Integration Revolution",
      content:
        "Discover the simplicity of offline integration with Vampay Revolutionize your payment processes with this game-changing feature...",
      writerImage: "/blogger.svg",
      writerName: "Sanika Jadhav",
      time: "8",
    },
    {
        image: "/rafiki.svg",
        title: "Unlocking Efficiency: The Offline Integration Revolution",
        content:
          "Discover the simplicity of offline integration with Vampay Revolutionize your payment processes with this game-changing feature...",
        writerImage: "/blogger.svg",
        writerName: "Sanika Jadhav",
        time: "8",
      },
  ];

  const gradientStyle = {
    background: "linear-gradient(to right, #A5ADFF, #ECCAFF)",
  };
  return (
    <div className="flex flex-col gap-20 lg:flex-row justify-center items-center w-full">
      {bolgData.map((item, index) => (
        <div key={index} className="w-1/2">
          <div className="" style={gradientStyle}>
            <Image
              src={item.image}
              alt="blog"
              height={100}
              width={100}
                layout="responsive"
            />
          </div>
          <div>
            <p className="features_card_header">{item.title}</p>
            <p className="features_card_content ">{item.content}</p>
            <div>
              <div>
                <Image
                  src={item.writerImage}
                  alt="blog"
                  height={100}
                  width={100}
                    layout="responsive"
                />
                <p>{item.writerName}</p>
              </div>
              <div>
                <Image
                  src={"/bookmark.svg"}
                  alt="blog"
                  height={100}
                  width={100}
                    layout="responsive"
                />
                <p>{item.time} mins read</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
