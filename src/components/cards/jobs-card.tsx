import CardWrapper from "@/components/cards/card-wrapper";
import classNames from "classnames";

const jobsData = [
  {
    name: "Diploma Engineering (CSE)",
    collage: "GIPI , Dhaka, Gazipur",
    date: "2021 - Present",
  },
  {
    name: "Hazi Chota Kalim (SSC)",
    collage: "Dhaka, Gazipur",
    date: "2018 - 2020",
  },
  {
    name: "ADBM High School (JSC)",
    collage: "Dhaka, Gazipur",
    date: "2015 - 2018",
  },
];

const JobItem = ({ job, active }: { job: any; active?: boolean }) => {
  const { name, collage, date } = job;

  return (
    <div className="flex justify-between flex-col items-stretch md:flex-row md:items-center py-4 gap-3 md:gap-2">
      <div className="flex flex-col gap-1">
        <h5
          className={classNames(
            "block text-xs md:text-md md:hidden font-medium dark:text-white text-black",
            { "opacity-35": !active, "opacity-65": active }
          )}
        >
          {date}
        </h5>
        <h1
          className={classNames(
            "text-3xl md:text-4xl font-medium dark:text-white text-black text-left w-fit",
            { "line-through opacity-55": !active, "opacity-100": active }
          )}
        >
          {name}
        </h1>
      </div>
      <div className="flex flex-col md:items-end md:text-right">
        <h3
          className={classNames(
            "text-sm lg:text-lg font-medium dark:text-white text-black",
            { "opacity-65": !active, "opacity-80": active }
          )}
        >
          {collage}
        </h3>
        <h5
          className={classNames(
            "hidden md:block text-xs lg:text-md font-medium dark:text-white text-black",
            { "opacity-35": !active, "opacity-65": active }
          )}
        >
          {date}
        </h5>
      </div>
    </div>
  );
};

const JobsCard = () => {
  return (
    <CardWrapper>
      <div className="static h-full flex flex-col gap-6 p-8 justify-start">
        <div className="flex flex-col items-start gap-1">
          <h4 className="text-xs font-medium opacity-60 uppercase">
            2008 - 2025
          </h4>
          <h1 className="text-2xl font-medium dark:text-white text-black uppercase opacity-90 text-center">
            Education Quality
          </h1>
        </div>
        <div className="flex flex-col relative z-10 lg:justify-around">
          <JobItem job={jobsData[0]} active />

          {jobsData.slice(1).map((job, index) => (
            <JobItem key={index} job={job} />
          ))}
        </div>
      </div>
    </CardWrapper>
  );
};

export default JobsCard;
