import {
	ActionIcon,
	Button,
	Container,
	SimpleGrid,
	Stack,
	Title,
} from '@mantine/core'
import Icon from '@components/Icon'
import type { NextPage } from 'next'

const Home: NextPage = () => {
	return (
		<Container pt="xl">
			<Title>Buttons</Title>

			<SimpleGrid cols={3}>
				<Button>default button</Button>
				<Button variant="filled">filled button</Button>
				<Button variant="light">light button</Button>
				<Button variant="outline">outline button</Button>
				<Button variant="subtle">subtle button</Button>
				<Button variant="white">white button</Button>
				<Button disabled>disabled button</Button>
				<Button loading>loading button</Button>
			</SimpleGrid>

			<Stack align="flex-start">
				<ActionIcon variant="filled" color="indigo.9">
					<Icon icon="account_circle" size={'xl'} />
				</ActionIcon>
			</Stack>
		</Container>
	)
}

export default Home
