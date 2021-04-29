import React from "react";
import { fireEvent, render } from "@testing-library/react";
import BoxList from "./BoxList";

function addBox(boxList, height="50", width="50", color="red"){
    const heightInput = boxList.getByLabelText("Height")
    const widthInput = boxList.getByLabelText("Width")
    const colorInput = boxList.getByLabelText("Color")
    fireEvent.change(heightInput, {target: {value: height}})
    fireEvent.change(widthInput, {target: {value: width}})
    fireEvent.change(colorInput, {target: {value: color}})
    const btn = boxList.getByText("Box Time!")
    fireEvent.click(btn)
}

it("renders without crashing", () => {
    render(<BoxList />);
});

it("matches snapshot", function() {
    const { asFragment } = render(<BoxList />);
    expect(asFragment()).toMatchSnapshot();
});

it("adds a new box", () => {
    const boxList = render(<BoxList />)

    // empty box list
    expect(boxList.queryByText("Remove")).not.toBeInTheDocument()

    addBox(boxList);

    // expect remove button and box to be on the page
    const btn = boxList.getByText("Remove");
    expect(btn).toBeInTheDocument();
    expect(btn.previousSibling).toBeInTheDocument();

    expect(boxList.getAllByDisplayValue("")).toHaveLength(3)
})

it("removes a box", () => {
    const boxList = render(<BoxList />);
    addBox(boxList);

    const btn = boxList.getByText("Remove");

    fireEvent.click(btn);
    expect(btn).not.toBeInTheDocument()
})