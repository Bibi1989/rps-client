import * as React from "react";
import { fireEvent, render, RenderResult } from "@testing-library/react";
import DisplayChoices from "../";
import { choicesArray } from "helper/choices";

let documentBody: RenderResult;

describe("DisplayChoices", () => {
  const onClick = jest.fn();
  beforeEach(() => {
    documentBody = render(
      <DisplayChoices handleClick={onClick} choices={choicesArray} />
    );
  });
  it("shows the three choices", () => {
    expect(documentBody.getByText("rock")).toBeInTheDocument();
    expect(documentBody.getByText("scissors")).toBeInTheDocument();
    expect(documentBody.getByText("paper")).toBeInTheDocument();
  });
  it("(Rock) should have been called once", () => {
    fireEvent.click(documentBody.getByText(/rock/i));

    expect(onClick).toHaveBeenCalledTimes(1);
  });
  it("(Scissors) should have been called two times", () => {
    fireEvent.click(documentBody.getByText(/scissors/i));
    fireEvent.click(documentBody.getByText(/scissors/i));

    expect(onClick).toHaveBeenCalledTimes(2);
  });
});
