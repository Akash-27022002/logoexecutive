import {render, screen} from '@testing-library/react';
import Divider from './Divider';
import { describe, it, expect } from 'vitest';
describe('Divider', () => {
	it('renders divider component', () => {
		render(<Divider />);
		const divider = screen.getByTestId('divider');
		expect(divider).toBeInTheDocument();
	});
});
