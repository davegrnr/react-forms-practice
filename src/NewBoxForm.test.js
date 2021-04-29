import React from "react";
import { fireEvent, render } from "@testing-library/react";
import NewBoxForm from "./NewBoxForm";

it("renders without crashing", () => {
    render(<NewBoxForm />)
})

it("matches a snapshot", () => {
    const { asFragment } = render(<NewBoxForm />)
    expect(asFragment()).toMatchSnapshot()
})



// it("", () => {
    
// })