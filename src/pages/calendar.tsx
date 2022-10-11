import { Container, Title } from '@mantine/core'
import { BaseLayout } from 'src/layouts'
import { NextPageWithLayout } from './_app'

const CommunicationPage: NextPageWithLayout = () => {
	return (
		<Container>
			<Title>Календарь встреч</Title>
		</Container>
	)
}

CommunicationPage.getLayout = function getLayout(page) {
	return <BaseLayout>{page}</BaseLayout>
}

export default CommunicationPage
