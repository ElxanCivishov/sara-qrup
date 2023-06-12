import { useEffect } from "react";

const Test = () => {
  useEffect(() => {
    function abbrevName(name) {
      let newName = name.split(" ");
      let element = [];
      for (let i = 0; i < newName.length; i++) {
        element.push(newName[i][0]);
      }
      return element.join(".");
    }
    console.log(abbrevName("Elxan Civishov"));
  }, []);

  return <></>;
};

export default Test;
