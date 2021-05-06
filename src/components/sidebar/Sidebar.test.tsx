import React from "react";
import { render } from "@testing-library/react";
import Sidebar from "./Sidebar";

describe("Sidebar", () => {
  test("renders Sidebar", () => {
    const { container } = render(<Sidebar posts={[]} />);

    expect(container).toHaveTextContent("test");
  });
});
