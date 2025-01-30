import { BlogCard } from "../home/blogs";
import SharedHeroSection from "../shared/hero";
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
  {
    id: 4,
    image: "images/post-4.jpg",
    title: "Understanding Your Body: A Medical Journey",
    description:
      "Exploring various body systems, organs, and how they function, with articles",
    link: "",
    animationDelay: "1s",
  },
  {
    id: 5,
    image: "images/post-5.jpg",
    title: "Mind Matters: Navigating Mental Health Disorders",
    description: "Mental health disorders, coping strategies, therapy options",
    link: "",
    animationDelay: "1.25s",
  },
  {
    id: 6,
    image: "images/post-6.jpg",
    title: "Aging Gracefully: Your Guide to Healthy Aging",
    description:
      "Tips for healthy aging, managing chronic conditions, cognitive health",
    link: "",
    animationDelay: "1.5s",
  },
];

const BlogsPage = () => {
  return (
    <main>
      <SharedHeroSection page="Blogs & News"></SharedHeroSection>

      <section className=" container my-20">
        <div className=" mt-10 grid md:grid-cols-3 gap-5">
          {posts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default BlogsPage;
