import { useEffect, useState } from "react";
import Image from "next/image";

// interface Article {
//   title: string;
//   description: string;
//   image: string;
//   writerName: string;
//   writerImage: string;
//   time: number;
// }

// interface BlogData {
//   title: string;
// }

interface BlogData {
  title: string;
  blogs: {
    title: string;
    description: string;
    image: string;
    writerImage: string;
    writerName: string;
    time: string; // Change this to string if your data is in string format
  }[];
}

const gradientTextStyle = {
  background: "linear-gradient(to bottom, #FF9DD3, #866AE8)",
  WebkitBackgroundClip: "text",
  color: "transparent",
};

const gradientStyle = {
  background: "linear-gradient(to right, #A5ADFF, #ECCAFF)",
  borderTopLeftRadius: 10,
  borderTopRightRadius: 10,
};

const Article: React.FC = () => {
  // const [articles, setArticles] = useState<Article[]>([]);

  // useEffect(() => {
  //   const fetchArticles = async () => {
  //     try {
  //       const response = await fetch(
  //         "https://backend.vaamozdevelop.xyz/Website/viewBlogs",
  //         {
  //           method: "GET",
  //           headers: {
  //             Token:
  //               "caf2c3b95fb3894ae308323a1a9a8241040ff08ddbeffa86b508fedd9df57265",
  //           },
  //         }
  //       );

  //       if (!response.ok) {
  //         throw new Error(`HTTP error! Status: ${response.status}`);
  //       }

  //       const data = await response.json();

  //       if (data.status && data.data && data.data.all_blogs) {
  //         const blogs: Article[] = data.data.all_blogs;
  //         setArticles(blogs);
  //       } else {
  //         console.error("Invalid response structure:", data);
  //       }
  //     } catch (error) {
  //       console.error("Error fetching articles:", error);
  //     }
  //   };

  //   fetchArticles();
  // }, []);

  const blogData: BlogData = {
    title: "Our Latest Articles",
    blogs: [
      {
        title: "Unlocking Efficiency: The Offline Integration Revolution",
        description:
          "Discover the simplicity of offline integration with Vampay. Revolutionize your payment processes with this game-changing feature...",
        image: "/rafiki.svg",
        writerImage: "/blogger.svg",
        writerName: "Sanika Jadhav",
        time: "8",
      },
      {
        title: "Unlocking Efficiency: The Offline Integration Revolution",
        description:
          "Discover the simplicity of offline integration with Vampay. Revolutionize your payment processes with this game-changing feature...",
        image: "/rafiki.svg",
        writerImage: "/blogger.svg",
        writerName: "Sanika Jadhav",
        time: "8",
      },
      {
        title: "Unlocking Efficiency: The Offline Integration Revolution",
        description:
          "Discover the simplicity of offline integration with Vampay. Revolutionize your payment processes with this game-changing feature...",
        image: "/rafiki.svg",
        writerImage: "/blogger.svg",
        writerName: "Sanika Jadhav",
        time: "8",
      },
    ],
  };

  return (
    <div className="p-10 lg:px-20 ">
      <div className="features_title m-10">
        <p>{blogData.title}</p>
      </div>
      <div className="m-auto flex flex-col gap-10 lg:flex-row flex-wrap justify-around">
        {blogData.blogs.map((item, index) => (
          <div
            key={index}
            className="lg:w-1/4 flex flex-col justify-center bg-grayBackground rounded-b-lg"
          >
            <div className="relative" style={gradientStyle}>
              <Image
                src={item.image}
                alt="blog"
                height={10}
                width={10}
                className="w-full"
              />
            </div>
            <div className="p-4 ">
              <div className="features_card_header">
                <p className="text-primaryPurple" style={{ textAlign: "left" }}>
                  {item.title}
                </p>
                <p
                  className="features_card_content"
                  style={{ textAlign: "left" }}
                >
                  {item?.description}
                </p>
              </div>
              <div className="flex flex-row justify-between py-2 ">
                <div className="flex flex-row justify-center items-center">
                  <Image
                    src={item.writerImage}
                    alt="blog"
                    height={50}
                    width={50}
                    className="rounded-full"
                  />
                  <p className="text-sm ml-2">{item.writerName}</p>
                </div>
                <div className="flex flex-col justify-center items-center ">
                  <Image
                    src={"/bookmark.svg"}
                    alt="blog"
                    height={20}
                    width={20}
                  />
                  <p className="text-xs ">{item.time} mins read</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Article;
