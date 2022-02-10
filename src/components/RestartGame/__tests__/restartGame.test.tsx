import * as React from "react";
import { fireEvent, render, RenderResult } from "@testing-library/react";
import RestartGame from "../";
import { choicesArray } from "helper/choices";

let restartBody: RenderResult;

describe("RestartGame", () => {
  const wait = (delay: number) =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve("Resolved");
      }, delay);
    });

  const onClick = jest.fn();
  const label = "Restart Game";

  beforeEach(() => {
    restartBody = render(<RestartGame onClick={onClick}>{label}</RestartGame>);
  });
  it("shows the (Restart Game) text to UI", () => {
    expect(restartBody.getByText(label)).toBeInTheDocument();
  });
  it("(Restart Game) should have been called once", () => {
    fireEvent.click(restartBody.getByText(/Restart Game/i));

    expect(onClick).toHaveBeenCalledTimes(1);
  });
  it("(Restart Game) should have been called two times", () => {
    fireEvent.click(restartBody.getByText(/Restart Game/i));
    fireEvent.click(restartBody.getByText(/Restart Game/i));

    expect(onClick).toHaveBeenCalledTimes(2);
  });
});
