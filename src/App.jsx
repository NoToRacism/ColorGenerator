import { useState } from "react";
import ColorList from "./ColorList";
import Form from "./Form";
import Values from "values.js";
import { ToastContainer, toast } from "react-toastify";

const App = () => {
  // console.log(new Values('#674ff0').all(10))

  const [colors, setColors] = useState(new Values('#674ff0').all(10))

  const addColor = (color) => {
    try {
      const newColors = new Values(color).all(10)
      setColors(newColors)
    } catch (error) {
      // console.log(error.message);
      toast.error(error.message)

    }
  }

  return <main className="">
    <Form addColor={addColor} />
    <ColorList colors={colors} />
    <ToastContainer />
  </main>;
};
export default App;
