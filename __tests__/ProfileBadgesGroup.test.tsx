import { ProfileBadgesGroup } from '@components/Profile'
import { IProfileBadge } from 'src/types/profile'
import { fireEvent, render, screen, within } from 'src/utils/test-utils'

// fix mantine bug with popover
window.ResizeObserver =
	window.ResizeObserver ||
	jest.fn().mockImplementation(() => ({
		disconnect: jest.fn(),
		observe: jest.fn(),
		unobserve: jest.fn(),
	}))

const badges: IProfileBadge[] = [
	{
		id: '1',
		label: 'React',
	},
	{
		id: '2',
		label: 'Next.js',
	},
]

describe('ProfileBadgesGroup', () => {
	it('should render', () => {
		const { container } = render(
			<ProfileBadgesGroup badges={badges} title="test" />
		)

		expect(container).toBeInTheDocument()
	})

	it('should add item', async () => {
		render(<ProfileBadgesGroup badges={badges} title="test" />)
		let badgesElements = screen.getAllByTestId('badge')
		expect(badgesElements).toHaveLength(2)

		const addButton = await screen.findByTestId('add-badge')
		fireEvent.click(addButton)

		const input = await screen.findByLabelText('label')
		const addButtonSubmit = await screen.findByTestId('add-badge-submit')

		fireEvent.change(input, { target: { value: 'test badge' } })
		fireEvent.click(addButtonSubmit)

		const badge = await screen.findByText('test badge')
		badgesElements = screen.getAllByTestId('badge')

		expect(input).not.toBeInTheDocument()
		expect(badge).toBeInTheDocument()
		expect(badgesElements).toHaveLength(3)
	})

	it('should remove item', async () => {
		render(<ProfileBadgesGroup badges={badges} title="test" />)
		let badgesElements = screen.getAllByTestId('badge')
		expect(badgesElements).toHaveLength(2)

		const firstBadge = badgesElements[0]

		const removeButton = await within(firstBadge).findByTestId('delete-badge')
		fireEvent.click(removeButton)

		const removeButtonSubmit = await within(firstBadge).findByTestId(
			'delete-badge-submit'
		)
		fireEvent.click(removeButtonSubmit)

		badgesElements = screen.getAllByTestId('badge')
		expect(badgesElements).toHaveLength(1)
	})
})
