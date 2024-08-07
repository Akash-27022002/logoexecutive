import React from 'react';
import {render, screen} from '@testing-library/react';
import Spinner from './Spinner';
import { describe, test, expect } from 'vitest';

describe('Spinner Component', () => {
	test('renders spinner container and spinner element', () => {
		render(<Spinner />);

		const containerElement = screen.getByTestId('spinner-container');
		expect(containerElement).toBeInTheDocument();
		const spinnerElement = screen.getByTestId('spinner');
		expect(spinnerElement).toBeInTheDocument();
	});
});
