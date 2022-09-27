import { Test } from '@components/Test'
import { render } from '@testing-library/react'

describe('sample test', () => {
	it('should pass', () => {
		expect(true).toBe(true)
	})

	it('renders correctly', () => {
		const { container } = render(<Test />)

		expect(container).toBeInTheDocument()
	})
})
