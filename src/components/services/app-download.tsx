import HeadingSection from "../shared/heading-section";

const AppDownload = () => {
  return (
    <section className=" container my-20 ">
      <div className=" items-center grid md:grid-cols-2 justify-between gap-5">
        <HeadingSection
          wfull
          dark
          title="app download
"
          heading="Download MediPro App &
Get 100$ Healthcase.


"
          description="Welcome to the convenient world of our Medical Website App, where taking control of your health has never been easier. Download our user-friendly app now to access a wide range of medical services and resources right at your fingertips.

"
        >
          <div className=" max-w-sm grid grid-cols-2 gap-5 ">
            <img src="images/google-play-img.png" alt="" />
            <img src="images/app-store-img.png" alt="" />
          </div>
        </HeadingSection>
        <div className=" flex justify-end">
          <img src="images/app-download.png" alt="" />
        </div>
      </div>
    </section>
  );
};

export default AppDownload;
