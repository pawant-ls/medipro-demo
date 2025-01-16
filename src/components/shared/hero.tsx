import { ChevronsRight } from "lucide-react";

const SharedHeroSection = ({ page }: { page: string }) => {
  return (
    <section
      //   style={{
      //     padding: "150px 0 100px",
      //     backgroundImage: "url(/images/half-shape.png) no-repeat 6% 100%",
      //     backgroundSize: "19% auto",
      //   }}
      className=" relative bg-primary text-white "
    >
      <div className=" container py-32  flex text-center items-center justify-center">
        <div className=" z-10 relative  flex flex-col items-center justify-center ">
          <h1 className=" text-5xl font-bold text-secondary">{page}</h1>

          <div className=" text-lg font-semibold flex items-center gap-1 mt-5">
            <span>Home</span>
            <ChevronsRight className=" text-secondary font-bold" />
            <span>{page}</span>
          </div>
        </div>
      </div>
      <img
        className=" absolute z-0 right-0 bottom-0"
        src="/images/half-circle-img.png"
        alt="haflcircle"
      />
    </section>
  );
};

export default SharedHeroSection;
