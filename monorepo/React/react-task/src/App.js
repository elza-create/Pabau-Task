import { useState } from "react";
import image1 from "./images/image1.png";
import image2 from "./images/image2.png";
import image3 from "./images/image3.png";
import image4 from "./images/image4.png";
import image5 from "./images/image5.png";
import image6 from "./images/image6.png";
import image7 from "./images/image7.png";
import RenderContent from "./components/RenderContent";
import "./App.css";

function App() {
  const [step, setStep] = useState(1);
  const options = [
    {
      option: "Anti Wrinkle Treatment",
      image: image1,
    },
    {
      option: "Dermal Fillers",
      image: image2,
    },
    {
      option: "Facials",
      image: image3,
    },
    {
      option: "LED",
      image: image4,
    },
    {
      option: "Consultation",
      image: image5,
    },
    {
      option: "Secret RF",
      image: image6,
    },
    {
      option: "Sclerotherapy",
      image: image7,
    },
  ];
  return (
    <div>
      <header>
        <p>Choose Service</p>
      </header>
      <RenderContent options={options} />
    </div>
  );
}

export default App;
