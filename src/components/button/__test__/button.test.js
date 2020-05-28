import React from 'react';
import ReactDOM from 'react-dom';
import Button from '../button';
import { render } from '@testing-library/react'
import '@testing-library/jest-dom';


it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Button></Button>, div)
});

it("renders button correctly", () => {
    const {getByTestId} = render(<Button label="Click here please!"></Button>)
    expect(getByTestId('button')).toHaveTextContent("Click here please!")
})
