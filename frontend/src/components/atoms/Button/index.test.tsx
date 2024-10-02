 
/* eslint-disable-next-line no-unused-vars */
import React from 'react';

/* eslint-enabled-next-line no-unused-vars */
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom';
import Button from '.';
import { BUTTON_COMPONENT } from '@/utils/constants';

describe('Button Component Tests', () => {
    it('should render button with label', () => {
        const { getByText } = render(<Button label='Test' />);
        
        const buttonLable = getByText('Test');
        expect(buttonLable).toBeInTheDocument()
    })
    it('should render a disabled button', () => {
        const { getByTestId } = render(<Button label="Click me" disabled={true} />)

        const buttonElement = getByTestId(BUTTON_COMPONENT)
        expect(buttonElement).toBeDisabled()
    })
    it('should triggered onclick event on button', () => {
        const onClickMock = jest.fn()

        const { getByText } = render(<Button label="Click me" onClick={onClickMock} />)

        const buttonElement = getByText('Click me')
        fireEvent.click(buttonElement)

        expect(onClickMock).toHaveBeenCalledTimes(1)
    })
    it('should not trigger onclick event for a disabled button', () => {
        const onClickMock = jest.fn();

        const { getByTestId } = render(<Button label="Click me" disabled={true} onClick={onClickMock} />);

        const buttonElement = getByTestId(BUTTON_COMPONENT);
        fireEvent.click(buttonElement)

        expect(onClickMock).not.toHaveBeenCalled();
        expect(onClickMock).toHaveBeenCalledTimes(0);
    })
})
