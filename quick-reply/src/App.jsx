import React, { useState } from "react";
import MultiStepIndicator from "./components/MultiStepIndicator";

function App() {
  const steps = [
    {
      key: "FULFILLED",
      status: "fulfilled",
      subtitleText: "Subtitle",
      titleText: "Everything you can do with Monday",
    },
    {
      key: "PENDING",
      status: "pending",
      subtitleText: "Subtitle",
      titleText: "Everything you can do with Monday",
    },
    {
      key: "PENDING-2",
      status: "pending",
      subtitleText: "Subtitle",
      titleText: "Everything you can do with Monday",
    },
  ];

  const [currentStep, setCurrentStep] = useState(0);
 const [type,setType]=useState("Horizontal")
  // Define the type
  // const type = "Horizontal"; // or "Horizontal"

  return (
    <div className="App">
      {/* Pass the type prop */}
      <MultiStepIndicator steps={steps} currentStep={currentStep} type={type} />
    </div>
  );
}

export default App;
