import React from "react";
import RightSideBlog from "./RightSideBlog";
import MangaReviews from "./MangaReviews";
import ComicReviews from "./ComicReviews";
import MoreBlogs from "./MoreBlogs";

const RightSection = () => {
  return (
    <section className="my-8 px-4">
      <div className="ad text-center bg-secondary h-72 mb-16">Ad</div>
      <div className="content_display">
        <h2 className="text-3xl font-bangers text-neutral-content border-b-4 border-error w-fit tracking-wider mb-4">
          Popular
        </h2>
        <RightSideBlog />
        <RightSideBlog />
        <RightSideBlog />
        <div className="ad text-center bg-secondary h-72 mb-16">Ad</div>
        <RightSideBlog />
        <RightSideBlog />
        <RightSideBlog />
        <h2 className="text-3xl font-bangers text-neutral-content border-b-4 border-error w-fit tracking-wider mb-4">
          Manga Reviews
        </h2>
        <div className="mx-2 manga_reviews grid grid-cols-2 gap-6">
          <MangaReviews />
          <MangaReviews />
          <MangaReviews />
          <MangaReviews />
        </div>
        <button className="mb-4 btn btn-primary mt-4 w-full font-montserrat font-extrabold">
          See More
        </button>
        <div className="ad text-center bg-secondary h-72 mb-16">Ad</div>
        <h2 className="text-3xl font-bangers text-neutral-content border-b-4 border-error w-fit tracking-wider mb-4">
          Comic Reviews
        </h2>
        <div className="mx-2 manga_reviews grid grid-cols-2 gap-6">
          <ComicReviews />
          <ComicReviews />
          <ComicReviews />
          <ComicReviews />
        </div>
        <button className="mb-4 btn btn-primary mt-4 w-full font-montserrat font-extrabold">
          See More
        </button>
        <div className="ad text-center bg-secondary h-72 mb-16">Ad</div>
        <h2 className="text-3xl font-bangers text-neutral-content border-b-4 border-error w-fit tracking-wider mb-4">
          More
        </h2>
        <MoreBlogs />
        <MoreBlogs />
        <MoreBlogs />
      </div>
    </section>
  );
};

export default RightSection;
