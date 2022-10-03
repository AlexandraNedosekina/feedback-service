import { Container, Title } from '@mantine/core'
import { BaseLayout } from 'src/layouts'
import { NextPageWithLayout } from './_app'

const CareerPage: NextPageWithLayout = () => {
	return (
		<Container>
			<Title>Карьерный рост</Title>
		</Container>
	)
}

CareerPage.getLayout = function getLayout(page) {
	return <BaseLayout>{page}</BaseLayout>
}

export default CareerPage
