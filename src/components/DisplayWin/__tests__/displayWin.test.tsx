import * as React from "react";
import { render, RenderResult } from "@testing-library/react";
import DisplayWin from "../";
import { choicesArray } from "helper/choices";
import { CONSTANTS } from "constant/variables";

let documentBody: RenderResult;

describe("DisplayWin", () => {
  beforeEach(() => {
    documentBody = render(<DisplayWin answer={CONSTANTS.PLAYER_WIN_MSG} />);
  });
  it("shows the answer", () => {
    expect(
      documentBody.getByText(CONSTANTS.PLAYER_WIN_MSG)
    ).toBeInTheDocument();
  });
});
