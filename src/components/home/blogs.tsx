import React from "react";

const BlogPosts = () => {
  const posts = [
    {
      id: 1,
      image: "images/post-1.jpg",
      title: "Best Medical Network Directory For Physicians & Clients",
      description:
        "Hypertension, commonly known as high blood pressure, is a prevalent",
      link: "",
      animationDelay: "0.25s",
    },
    {
      id: 2,
      image: "images/post-2.jpg",
      title: "The Importance of Regular Health Checkups",
      description:
        "This symptoms, causes, risk factors, diagnosis, treatment options strategies.",
      link: "",
      animationDelay: "0.5s",
    },
    {
      id: 3,
      image: "images/post-3.jpg",
      title: "Managing Better Stress for Better Mental Health",
      description:
        "These stories can provide valuable insights into living with a particular condition",
      link: "",
      animationDelay: "0.75s",
    },
  ];

  return (
    <section className=" container my-20">
      <div className=" ">
        <h4 className=" text-xl uppercase text-secondary">our blog</h4>
        <h1
          className=" mt-5 text-3xl md:text-5xl font-semibold text-primary
           "
        >
          Lates News & Articles.
        </h1>
      </div>
      <div className=" mt-10 grid md:grid-cols-3 gap-5">
        {posts.map((post) => (
          <div className="" key={post.id}>
            <div className="">
              {/* Post Image */}
              <div className="post-featured-image">
                <figure className="image-anime">
                  <a href={post.link}>
                    <img
                      src={post.image}
                      className=" rounded-lg"
                      alt={post.title}
                    />
                  </a>
                </figure>
              </div>

              {/* Post Content */}
              <div className="post-item-body mt-3">
                <h2 className=" text-primary text-lg font-semibold">
                  <a href={post.link}>{post.title}</a>
                </h2>
                <p className=" mt-3 text-gray-600 ">{post.description}</p>
              </div>

              {/* Read More Button */}
              <div className=" text-secondary mt-3 btn-readmore">
                <a href={post.link}>Read More</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogPosts;
