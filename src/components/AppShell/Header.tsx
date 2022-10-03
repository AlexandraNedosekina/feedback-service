import Icon from '@components/Icon'
import { ActionIcon, Header as HeaderMantine, Menu } from '@mantine/core'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC } from 'react'

const Header: FC = () => {
	const router = useRouter()

	return (
		<HeaderMantine
			sx={theme => ({
				backgroundColor: theme.colors.brand[5],
				display: 'flex',
				justifyContent: 'space-between',
				alignItems: 'center',
			})}
			height={60}
			px="xl"
			withBorder={false}
		>
			<Image
				src="/logo.svg"
				width={64}
				height={26}
				alt="66bit feedback service"
			/>
			<Menu position="bottom-end">
				<Menu.Target>
					<ActionIcon variant="filled" color="brand" size="lg">
						<Icon icon="account_circle" size={28} />
					</ActionIcon>
				</Menu.Target>
				<Menu.Dropdown>
					<Link href="/profile" passHref>
						<Menu.Item component="a">Профиль</Menu.Item>
					</Link>
					<Menu.Item
						onClick={() => {
							router.push('/login')
						}}
					>
						Выйти
					</Menu.Item>
				</Menu.Dropdown>
			</Menu>
		</HeaderMantine>
	)
}

export default Header
