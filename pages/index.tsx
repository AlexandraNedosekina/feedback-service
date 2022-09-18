import { Test } from '@components/Test'
import { Button } from '@mantine/core'
import type { NextPage } from 'next'

const Home: NextPage = () => {
	return (
		<div>
			<Button>Mantine button</Button>
			<Test />
		</div>
	)
}

export default Home
