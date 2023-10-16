import Footer from "../Footer/Footer";

function Project() {
  return (
    <div>
      <div className=" flex  flex-col h-[333px] w-[100%]    sm:mt-14  justify-end">
        <div className="sm: ml-[15%] ">
          <p className=" font-semibold text-4xl">Projects.</p>
        </div>
        <div className="flex sm:mt-[-1.8rem]">
          <div className="w-[350px] sm:ml-[15%] ">
            <p className=" font-serif font-medium text-[1.5rem]">
              Take a tour through our digital gallery of accomplishments.
              Witness the variety, the innovation, the creativity, and the depth
              of our work. Every project holds a story, a challenge overcome,
              and a goal achieved.
            </p>
          </div>
        </div>
      </div>

      <div className=" h-[60%] mt-32 flex flex-col">
        <div className="flex flex-col gap-2 mx-2 mt-4 flex-wrap items-center sm:flex-row">
          <div className="sm:flex-1 h-[225px] w-[150px]  border-solid "></div>
          <div className="sm:flex-1 h-[225px] w-[150px]  border-solid "></div>
          <div className="sm:flex-1 h-[225px] w-[150px]  border-solid "></div>
          <div className="sm:flex-1 h-[225px] w-[150px]  border-solid "></div>
        </div>
        <div className="flex flex-col gap-2 mx-2 mt-4 sm:flex-row items-center">
          <div className="sm:flex-1 h-[225px] w-[150px]  border-solid "></div>
          <div className="sm:flex-1 h-[225px] w-[150px]  border-solid "></div>
          <div className="sm:flex-1 h-[225px] w-[150px]  border-solid "></div>
          <div className="sm:flex-1 h-[225px] w-[150px]  border-solid "></div>
        </div>
      </div>

      <div className="ml-[-1rem] mt-[20%] mb-[-1rem]">
        <Footer />
      </div>
    </div>
  );
}

export default Project;
