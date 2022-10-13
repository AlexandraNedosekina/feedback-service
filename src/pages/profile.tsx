import { ProfileBadgesGroup } from '@components/Profile'
import {
	Avatar,
	Container,
	Group,
	Select,
	Stack,
	Switch,
	Text,
	Title,
} from '@mantine/core'
import { TimeRangeInput } from '@mantine/dates'
import { BaseLayout } from 'src/layouts'
import { NextPageWithLayout } from './_app'

const ProfilePage: NextPageWithLayout = () => {
	return (
		<Container>
			<Title mb="xl">Профиль</Title>

			<Group mb="xl">
				<Avatar src={null} radius={100} size={96} />

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

			<Stack spacing={'xl'}>
				<ProfileBadgesGroup
					title="Навыки"
					badges={[
						{
							id: '1',
							label: 'React',
						},
						{
							id: '2',
							label: 'Next.js',
						},
					]}
				/>
				<ProfileBadgesGroup
					title="Факты о себе"
					badges={[
						{
							id: '1',
							label: 'интроверт',
						},
						{
							id: '2',
							label: 'пицца',
						},
						{
							id: '3',
							label: 'котики',
						},
					]}
				/>
				<ProfileBadgesGroup
					title="Ожидания"
					badges={[
						{
							id: '1',
							label: 'профессиональный рост',
						},
						{
							id: '2',
							label: 'зп 250к',
						},
					]}
				/>

				<Stack spacing={'xs'}>
					<Title order={2}>Формат работы</Title>

					<Select
						sx={() => ({
							alignSelf: 'flex-start',
						})}
						data={[
							{ label: 'В офисе', value: 'office' },
							{
								label: 'Удаленно',
								value: 'remote',
							},
						]}
						placeholder="Выберите формат работы"
					/>
				</Stack>

				<Stack spacing="xs">
					<Title order={2}>График работы</Title>
					<TimeRangeInput
						clearable
						sx={() => ({
							alignSelf: 'flex-start',
						})}
					/>
				</Stack>

				<Stack spacing="xs">
					<Title order={2}>Готовность к личным встречам</Title>

					<Switch />
				</Stack>
			</Stack>
		</Container>
	)
}

ProfilePage.getLayout = function getLayout(page) {
	return <BaseLayout>{page}</BaseLayout>
}

export default ProfilePage
