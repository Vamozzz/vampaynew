import Article from "@/components/articles/articleComponent";
import ArticleBlog from "@/components/blogRead/blogRead";
import ContactForm from "@/components/contactform/contact";
import getBlogsData, { getSpecificBlog } from "@/services/blogsApi";
import { Metadata, ResolvingMetadata } from "next";
import React from "react";

interface ArticleReadProps {
  params: {
    article: string;
  };
}

interface BlogPost {
  id: string;
  category_id: string;
  title: string;
  seo_url: string;
  description: string;
  blog_image: string;
  create_date: string;
}

export async function generateMetadata({
  params,
}: // parent,
{
  params: { article: string };
  // parent: ResolvingMetadata;
}): Promise<Metadata> {
  try {
    const blog: BlogPost[] = await getSpecificBlog(params?.article);
    const title: string = blog?.[0]?.title;
    const description: string = blog?.[0]?.seo_url;
    const imageUrl: string = blog?.[0]?.blog_image || "/faqbanner.svg";
    const metadataBase: URL = new URL("https://vampay.in/");

    // const previousImages: string[] = (await parent?.openGraph?.images) || [];

    const metadata: Metadata = {
      title: title,
      description: description,
      openGraph: {
        images: [imageUrl],
        // ...previousImages
      },
      metadataBase: metadataBase,
    };

    return metadata;
  } catch (error) {
    console.error("Error fetching blog data:", error);
    return {
      title: "Vampay",
      description:
        "Vampay - Your All-in-One Payment Powerhouse! Accept Payments from any app through vampay and stay in control with your business.",
      openGraph: {
        images: ["/faqbanner.svg"],
      },
      metadataBase: new URL("https://vampay.in/"),
    };
  }
}

const Page: React.FC<ArticleReadProps> = (props) => {
  const articleID = props.params.article;
  return (
    <section className="">
      <ArticleBlog articleID={articleID} />
      <Article
        externalStyle={{
          backgroundColor: "#F7F8FD",
          marginBottom: 60,
        }}
      />
      <ContactForm
        commentForm={true}
        externalStyle={{
          backgroundColor: "#F7F8FD",
        }}
      />
    </section>
  );
};

export default Page;

export async function generateStaticParams() {
  const blogs = await getBlogsData();
  return blogs?.map((article: any) => ({
    article: article?.id,
  }));
}

// export const generateStaticParams: GetStaticPaths = async (context) => {
//   const articleId = context.params?.article;

//   if (!articleId) {
//     // If article ID is missing, return an empty paths array
//     return {
//       paths: [],
//       fallback: false,
//     };
//   }

//   try {
//     // Fetch specific blog data using the provided article ID
//     const blog: BlogPost[] = await getSpecificBlog(articleId);

//     // Return the path for the fetched blog
//     return {
//       paths: [
//         {
//           params: {
//             article: blog?.[0]?.id,
//           },
//         },
//       ],
//       fallback: false, // or 'blocking' or true, depending on your needs
//     };
//   } catch (error) {
//     // Handle any errors that occur during fetching or processing
//     console.error("Error generating static params:", error);
//     return {
//       paths: [],
//       fallback: false,
//     };
//   }
// };

// export const generateStaticParams: GetStaticPaths = async (context: GetStaticPathsContext) => {
//   const articleId = context.params?.article;

//   if (!articleId) {
//     // If article ID is missing, return an empty paths array
//     return {
//       paths: [],
//       fallback: false,
//     };
//   }

//   try {
//     // Fetch specific blog data using the provided article ID
//     const blog: BlogPost[] = await getSpecificBlog(articleId);

//     // Return the path for the fetched blog
//     return {
//       paths: [
//         {
//           params: {
//             article: blog?.[0]?.id,
//           },
//         },
//       ],
//       fallback: false, // or 'blocking' or true, depending on your needs
//     };
//   } catch (error) {
//     // Handle any errors that occur during fetching or processing
//     console.error("Error generating static params:", error);
//     return {
//       paths: [],
//       fallback: false,
//     };
//   }
// };
