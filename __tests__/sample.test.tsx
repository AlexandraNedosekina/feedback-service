import { render, screen } from '@testing-library/react'
import { Test } from '@components/Test'

describe('sample test', () => {
	it('should pass', () => {
		expect(true).toBe(true)
	})

	it('renders correctly', () => {
		const { container } = render(<Test />)

		expect(container).toBeInTheDocument()
	})
})
