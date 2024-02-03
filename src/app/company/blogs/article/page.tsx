"use client";
import Article from "@/components/articles/articleComponent";
import ArticleBlog from "@/components/blogRead/blogRead";
import ContactForm from "@/components/contactform/contact";
import React from "react";

function ArticleRead() {
  return (
    <section className="">
      <ArticleBlog />
      <Article />
      <ContactForm
        commentForm={true}
        externalStyle={{
          backgroundColor: "#F7F8FD",
        }}
      />
    </section>
  );
}

export default ArticleRead;
