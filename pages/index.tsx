import { Test } from '@components/Test'
import { Button, Container, Stack } from '@mantine/core'
import type { NextPage } from 'next'

const Home: NextPage = () => {
	return (
		<Container pt="xl">
			<Stack align="flex-start">
				<Button>Mantine button</Button>
				<Button variant="filled">filled button</Button>
				<Button variant="light">light button</Button>
				<Button variant="outline">outline button</Button>
				<Button variant="subtle">subtle button</Button>
				<Button variant="white">white button</Button>
				<Button disabled>disabled button</Button>
				<Button loading>loading button</Button>
			</Stack>
		</Container>
	)
}

export default Home
