import React, { useState } from "react";
import styled from "styled-components";
import { TiTick } from "react-icons/ti";

const MultiStepIndicator = ({ steps, type }) => {
  const [currentStep, setCurrentStep] = useState(0);

  const handleStepClick = (index) => {
    setCurrentStep(index);
  };

  return (
    <StepperContainer type={type}>
      {steps.map((step, index) => (
        <StepItem
          key={step.key}
          className={`${index === currentStep && "active"} ${
            step.status === "fulfilled" && "complete"
          }`}
          onClick={() => handleStepClick(index)}
          type={type}
        >
          <Step status={step.status}>
            {step.status === "fulfilled" ? <TiTick size={24} /> : index + 1}
          </Step>
          <Descriptions>
            <Title>{step.titleText}</Title>
            <Subtitle>{step.subtitleText}</Subtitle>
          </Descriptions>
        </StepItem>
      ))}
    </StepperContainer>
  );
};

export default MultiStepIndicator;

const StepperContainer = styled.div`
/* border: 2px solid blue; */
gap: 30px;
  display: flex;
  justify-content: ${(props) => (props.type === "Vertical" ? "flex-start" : "space-between")};
  align-items: ${(props) => (props.type === "Vertical" ? "flex-start" : "center")};
  flex-direction: ${(props) => (props.type === "Vertical" ? "column" : "row")};
  width: 70%;
  margin: auto;
`;

const StepItem = styled.div`
  display: flex;
  /* gap: 20px; */
  position: relative;
  justify-content: ${(props) => (props.type === "Vertical" && "flex-start")};
  align-items: ${(props) => (props.type === "Vertical" ? "flex-start" : "center")};
  /* border: 2px solid red; */
  flex-direction: ${(props) => (props.type === "Vertical" ? "row" : "column")};
  cursor: pointer;

  &.active {
    color: blue;
  }

  &.complete {
    color: green;
  }

  &:not(:first-child)::before {
    content: "";
    background-color: #cbd5e0;
    position: absolute;
    /* border: 2px solid red; */
    width: ${(props) => (props.type === "Vertical" ? "3px" : "105.5%")};
    height: ${(props) => (props.type === "Vertical" ? "80%" : "3px")};
    right: ${(props) => (props.type === "Vertical" ? "91.5%" : "50%")};
    
    top: ${(props) => (props.type === "Vertical" ? "calc(50% - 40px)" : "25%")};
    transform: translateY(-50%);
  }
`;

const Step = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background-color: ${(props) => (props.status === "fulfilled" ? "#28a745" : "#007bff")};
  border-radius: 50%;
  font-weight: 600;
  color: #fff;
  margin-bottom: 5px;
`;

const Descriptions = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`;

const Title = styled.p`
  font-weight: bold;
  margin: 0;
  font-size: 14px;
`;

const Subtitle = styled.p`
  margin: 0;
  color: gray;
  font-size: 12px;
`;
