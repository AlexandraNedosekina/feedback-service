import { Container, Title } from '@mantine/core'
import { BaseLayout } from 'src/layouts'
import { NextPageWithLayout } from './_app'

const ProfilePage: NextPageWithLayout = () => {
	return (
		<Container>
			<Title>Профиль</Title>
		</Container>
	)
}

ProfilePage.getLayout = function getLayout(page) {
	return <BaseLayout>{page}</BaseLayout>
}

export default ProfilePage
