import Title from "./Title";
import Descritpion from "./Description";
import { logDOM } from "@testing-library/react";

const Content = (props) => {
  console.log(props);
  return (
    <>
      <div className="large_div">
        <Title name={props.name} />
        <Descritpion text={props.text} />
      </div>
      {/* <p>{props.name}</p> */}
    </>
  );
};

export default Content;
