import { HiChevronDoubleRight } from "react-icons/hi";

type Props={
    title:string
}

const AboutList = ({  title }:Props) => {
  return (
    <h4 className="text-2xl font-semibold flex items-center gap-4">
      <span className="text-designColor"><HiChevronDoubleRight /></span>
      {title}
    </h4>
  );
};

export default AboutList;
