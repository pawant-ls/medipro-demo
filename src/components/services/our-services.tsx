import { ArrowRightCircle } from "lucide-react";
import HeadingSection from "../shared/heading-section";
import CButton from "../button";
const data = [
  {
    clinic: "cardiology",
    description:
      "Expert consultations with board-certified cardiologists to assess heart health, discuss symptoms, and develop personalized treatment.",
    services: [
      "Cardiac Electrophysiology",
      "Cardiac Catheterization",
      "Arrhythmia Management",
    ],
    action: "Read More",
  },
  {
    clinic: "pathology",
    description:
      "Comprehensive tests to analyze body fluids, aiding in the diagnosis and monitoring of organ function and metabolic disorders.",
    services: ["Molecular Pathology", "Cytogenetics", "Immunology"],
    action: "Read More",
  },
  {
    clinic: "laboratory analysis",
    description:
      "Our Laboratory Analysis Services offer a comprehensive range of advanced tests to aid in the accurate diagnosis. metabolic disorders.",
    services: [
      "Comprehensive Test Menu",
      "Timely Turnaround",
      "Advanced Diagnostic Tests",
    ],
    action: "Read More",
  },
  {
    clinic: "pediatric",
    description:
      "Comprehensive well-child checkups, growth monitoring, and developmental assessments to ensure your child's health track.",
    services: [
      "Nutrition Counseling",
      "Pediatric Dermatology",
      "Developmental Evaluations",
    ],
    action: "Read More",
  },
  {
    clinic: "cardiac",
    description:
      "Find comprehensive care and support for heart failure patients, including lifestyle recommendations and advanced therapies.",
    services: [
      "Heart Failure Program",
      "Cardiac Rehabilitation",
      "Lipid Management",
    ],
    action: "Read More",
  },
  {
    clinic: "neurology",
    description:
      "Consultations with specialized neurologists to address various neurological concerns, symptoms, and disorders.",
    services: [
      "Epilepsy Management",
      "Headache and Migraine Clinic",
      "Neurological Examinations",
    ],
    action: "Read More",
  },
];

const OurServices = () => {
  return (
    <section className=" container my-20 ">
      <HeadingSection
        wfull
        dark
        center
        title="our services"
        heading="Providing Medical Care For TheSickest
In Our Community.

"
      ></HeadingSection>
      <div className=" grid grid-cols-2 2xl:grid-cols-3 gap-5">
        {data.map((item, i) => (
          <div key={i} className=" text-white p-10 bg-primary  ">
            <div>
              <h4 className=" text-2xl   capitalize">{item.clinic}</h4>
              <p className=" mt-5 text-gray-400">{item.description}</p>
            </div>
            <div className=" mt-5">
              {item.services.map((service, i) => (
                <div key={i}>
                  <p>{service}</p>
                </div>
              ))}
            </div>
            <div className=" mt-5">
              <CButton icon={<ArrowRightCircle />}>Read More</CButton>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurServices;
