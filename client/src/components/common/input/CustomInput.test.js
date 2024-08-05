import {render, fireEvent, screen} from '@testing-library/react';
import CustomInput from './CustomInput';
import { describe, it, expect, vi } from 'vitest';
describe('CustomInput', () => {
	it('renders correctly', () => {
		render(
			<CustomInput
				type='text'
				label='Test Label'
				value=''
				name='testName'
				onChange={() => {}}
			/>,
		);

		expect(screen.getByLabelText('Test Label')).toBeInTheDocument();
	});

	it('handles value change', () => {
		const handleChange = vi.fn();
		render(
			<CustomInput
				type='text'
				label='Test Label'
				name='testName'
				onChange={handleChange}
			/>,
		);

		fireEvent.change(screen.getByLabelText('Test Label'), {
			target: {value: 'New Value'},
		});
		expect(handleChange).toHaveBeenCalled();
		const inputElement = screen.getByLabelText('Test Label');
		expect(inputElement).toHaveValue('New Value');
	});

	it('displays error message when error prop provided', () => {
		render(
			<CustomInput
				type='text'
				label='Test Label'
				value=''
				name='testName'
				onChange={() => {}}
				error='Test Error'
			/>,
		);

		expect(screen.getByText('Test Error')).toBeInTheDocument();
	});
});
