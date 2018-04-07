import React from "react";
import FillMultipleChoice from "../components/FillMultipleChoice";
import FillDropdown from "../components/FillDropdown";
import FillTrueFalse from "../components/FillTrueFalse";
import Option from "../components/Option";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import shortid from "shortid";

import { Button, Welcome } from "@storybook/react/demo";

storiesOf("Welcome", module).add("to Storybook", () => (
  <Welcome showApp={linkTo("Button")} />
));

storiesOf("Button", module)
  .add("with text", () => (
    <Button onClick={action("clicked")}>Hello Button</Button>
  ))
  .add("with some emoji", () => (
    <Button onClick={action("clicked")}>😀 😎 👍 💯</Button>
  ));

storiesOf("Fill Option", module).add("with text", () => {
  return <Option text={"Here is an option"} />;
});
storiesOf("Fill Multiple Choice", module).add("with options", () => {
  const options = [
      { text: "moon", id: shortid.generate() },
      { text: "elephant", id: shortid.generate() },
      { text: "neil armstrong", id: shortid.generate() },
      { text: "peanut", id: shortid.generate() }
    ],
    question = "What's the heaviest?";
  return <FillMultipleChoice options={options} question={question} />;
});

storiesOf("Fill Dropdown", module).add("with select", () => {
  const options = [
      { text: "moon", id: shortid.generate() },
      { text: "elephant", id: shortid.generate() },
      { text: "neil armstrong", id: shortid.generate() },
      { text: "peanut", id: shortid.generate() }
    ],
    question = "What's the heaviest?";
  return <FillDropdown options={options} question={question} />;
});

storiesOf("Fill True False", module).add("with options", () => {
  const question = "An elephant is larger than the moon.";
  return <FillTrueFalse question={question} />;
});
