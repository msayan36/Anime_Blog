import React from "react";
import { useRouter } from "next/router";
import LatestBlogs from "../../components/LatestBlogs";
import RightSection from "../../components/RightSection";
import styles from "../../styles/Home.module.css";

const Slug = () => {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <div>
      <div className="upper_intro mx-auto w-full flex flex-col justify-center items-center">
        <h1 className="font-bangers tracking-widest text-center text-5xl my-8">
          {slug}
        </h1>
        <p className="font-montserrat text-center mb-8 w-10/12">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus rerum
          quod cum rem iste repellat cupiditate dolore. Magnam, tempora id.
        </p>
      </div>
      <main className="container mx-auto p-8">
        <section className={styles.home_grid}>
          <LatestBlogs />
          <RightSection />
        </section>
      </main>
    </div>
  );
};

export default Slug;
