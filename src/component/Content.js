import Title from "./Title";
import Descritpion from "./Description";

const Content = (props) => {
  return (
    <>
      <div className="large_div">
        <Title />
        <Descritpion />
      </div>

      <div className="large_div">
        <Title />
        <Descritpion />
      </div>
    </>
  );
};

export default Content;
