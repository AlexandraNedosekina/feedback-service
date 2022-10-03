import { Container, Title } from '@mantine/core'
import { BaseLayout } from 'src/layouts'
import { NextPageWithLayout } from './_app'

const FeedbackPage: NextPageWithLayout = () => {
	return (
		<Container>
			<Title>Оценки</Title>
		</Container>
	)
}

FeedbackPage.getLayout = function getLayout(page) {
	return <BaseLayout>{page}</BaseLayout>
}

export default FeedbackPage
