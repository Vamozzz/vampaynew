import React from "react";

export default async function getBlogsData() {
  try {
    const response = await fetch(
      "https://backend.vaamozdevelop.xyz/Website/viewBlogs",
      {
        headers: {
          "Content-Type": "application/json",
          Token:
            "caf2c3b95fb3894ae308323a1a9a8241040ff08ddbeffa86b508fedd9df57265",
        },
      }
    );
    const dataaa = await response.json();
    const finalData = dataaa?.data?.all_blogs;
    return finalData;
  } catch (error: any) {
    console.log(error, "error inside blogs");
    return error;
  }
}

export const getLatestBlogs = async () => {
  try {
    const response = await fetch(
      "https://backend.vaamozdevelop.xyz/Website/latestBlogs",
      {
        headers: {
          "Content-type": "application/json",
          Token:
            "caf2c3b95fb3894ae308323a1a9a8241040ff08ddbeffa86b508fedd9df57265",
        },
      }
    );
    const data = await response.json();
    const latestBlogs = data?.data?.all_blogs;
    return latestBlogs;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export async function getSpecificBlog(id: string) {
  try {
    const response = await fetch(
      "https://backend.vaamozdevelop.xyz/Website/latestBlogs",
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          Token:
            "caf2c3b95fb3894ae308323a1a9a8241040ff08ddbeffa86b508fedd9df57265",
        },
        body: JSON.stringify({ id }),
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const responseObject = await response.json();
    const specificBlog = responseObject?.data?.all_blogs;
    return specificBlog;
  } catch (error: any) {
    console.error("Error fetching specific blog:", error?.message);
    return null;
  }
}
