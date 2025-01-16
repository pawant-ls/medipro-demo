import { ArrowRightCircle } from "lucide-react";
import CButton from "../button";

const HeadingSection = ({
  title,
  heading,
  description,
  children,
  dark = false,
  readmore = false,
  wfull = false,
  center = false,
}: {
  title: string;
  heading: string;
  description?: string;
  children?: React.ReactNode;
  dark?: boolean;
  readmore?: boolean;
  wfull?: boolean;
  center?: boolean;
}) => {
  return (
    <div
      className={` ${center ? "text-center mx-auto" : ""}  ${
        wfull ? " max-w-2xl" : "max-w-md"
      } `}
    >
      <h4
        className={`text-xl uppercase ${
          dark ? " text-secondary" : "text-gray-200"
        }`}
      >
        {title}
      </h4>
      <h1
        className={`mt-5 text-2xl md:text-5xl font-semibold ${
          dark ? "text-gray-800" : "text-secondary"
        }`}
      >
        {heading}
      </h1>
      <h4 className={` ${dark ? " text-gray-600" : "text-gray-300"}  mt-5`}>
        {description}
      </h4>
      {readmore && (
        <div className=" mt-5 ">
          <CButton icon={<ArrowRightCircle />}>Read More</CButton>
        </div>
      )}

      <div>
        <div className=" mt-10">{children}</div>
      </div>
    </div>
  );
};

export default HeadingSection;
