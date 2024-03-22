import React from "react";
import MultiStepIndicator from "./MultiStepIndicator";

export default {
  title: "MultiStepIndicator",
  component: MultiStepIndicator,
  argTypes: {
    steps: { control: "array" },
    type: {
      description: "string",
      control: {
        type: "text", 
      },
      defaultValue: "Horizontal",
    },
  },
  tags: ["autodocs"],
};

const Template = (args) => <MultiStepIndicator {...args} />;

export const Default = Template.bind({});
Default.args = {
  steps: [
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
  ],
};

export const Horizontal = Template.bind({});
Horizontal.args = {
  steps: [
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
  ],
  type: "Horizontal",
};

export const Vertical = Template.bind({});
Vertical.args = {
  steps: [
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
  ],
  type: "Vertical",
};

export const Pending = Template.bind({});
Pending.args = {
  steps: [
    {
      key: "Pending",
      status: "pending",
      subtitleText: "Subtitle",
      titleText: "Everything you can do with Monday",
    },
  ],
};

export const Fulfilled = Template.bind({});
Fulfilled.args = {
  steps: [
    {
      key: "FULFILLED",
      status: "fulfilled",
      subtitleText: "Subtitle",
      titleText: "Everything you can do with Monday",
    },
  ],
};
