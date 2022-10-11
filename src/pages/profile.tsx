import {
	Avatar,
	Badge,
	Container,
	Group,
	Stack,
	Text,
	Title,
} from '@mantine/core'
import { BaseLayout } from 'src/layouts'
import { NextPageWithLayout } from './_app'

const ProfilePage: NextPageWithLayout = () => {
	return (
		<Container>
			<Title mb="xl">Профиль</Title>

			<Group mb="xl">
				<Avatar src={null} size={96} />

				<Stack spacing={6}>
					<Text size={18}>Иван Иванов</Text>
					<Text color="brand.5" weight={600} size={18}>
						Frontend-разработчик
					</Text>
					<Text color="gray" size={14}>
						mail@gmail.com
					</Text>
					<Text color="gray" size={14}>
						День рождения: 12.08.1990 (32 года)
					</Text>
				</Stack>
			</Group>

			<Stack>
				<Title order={2}>Навыки</Title>

				<Group>
					<Badge size="xl" radius="sm">
						react
					</Badge>
					<Badge size="xl" radius="sm">
						react
					</Badge>
				</Group>
			</Stack>
		</Container>
	)
}

ProfilePage.getLayout = function getLayout(page) {
	return <BaseLayout>{page}</BaseLayout>
}

export default ProfilePage
