// eslint-disable-next-line no-unused-vars
import React from 'react';
import { render } from '@testing-library/react'
import { Button } from './Button';

describe('button', () => {
    test('Button', () => {
        const { container } = render(<Button label="submit" />)
        expect(container).toMatchSnapshot();
    });
})
