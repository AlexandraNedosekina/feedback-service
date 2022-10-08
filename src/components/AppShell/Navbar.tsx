import Icon, { Icons } from '@components/Icon'
import {
	ActionIcon,
	Box,
	UnstyledButton,
	MediaQuery,
	Navbar as NavbarMantine,
	Stack,
} from '@mantine/core'
import { useRouter } from 'next/router'
import { FC, useState } from 'react'
import NavItem from './NavItem'

const navItems: { icon: Icons; href: string; text: string }[] = [
	{
		icon: 'home',
		href: '/',
		text: 'Главная',
	},
	{
		icon: 'star',
		href: '/feedback',
		text: 'Оценки',
	},
	{
		icon: 'trending_up',
		href: '/career',
		text: 'Карьерный рост',
	},
	{
		icon: 'group',
		href: '/communication',
		text: 'Записаться на общение',
	},
]

interface Props {
	isOpen: boolean
	closeMenu: () => void
}

const Navbar: FC<Props> = ({ isOpen, closeMenu }) => {
	const router = useRouter()

	const [isFull, setIsFull] = useState(true)

	const toggleFull = () => {
		setIsFull(!isFull)
	}

	return (
		<NavbarMantine
			width={{ sm: isFull ? 270 : 60 }}
			sx={theme => ({
				backgroundColor: theme.colors.brand[7],
			})}
			withBorder={false}
			px="lg"
			hiddenBreakpoint="sm"
			hidden={!isOpen}
		>
			<Stack
				justify="space-between"
				align="center"
				py="xl"
				sx={() => ({ height: '100%' })}
			>
				<Stack sx={() => ({ width: '100%' })}>
					<MediaQuery largerThan="sm" styles={{ display: 'none' }}>
						<NavItem
							icon={'account_circle'}
							href="/profile"
							text="Профиль"
							isFull={true}
							active={router.pathname === '/profile'}
							closeMenu={closeMenu}
						/>
					</MediaQuery>
					{navItems.map((item, i) => (
						<NavItem
							key={i}
							icon={item.icon}
							href={item.href}
							text={item.text}
							isFull={isFull}
							iconProps={
								item.icon === 'star'
									? {
											filled: true,
									  }
									: undefined
							}
							active={router.pathname === item.href}
							closeMenu={closeMenu}
						/>
					))}
					<MediaQuery largerThan="sm" styles={{ display: 'none' }}>
						<UnstyledButton
							sx={theme => ({
								color: 'white',
								fontSize: theme.fontSizes.sm,
							})}
							ml="sm"
							onClick={() => {
								router.push('/login')
							}}
						>
							Выйти
						</UnstyledButton>
					</MediaQuery>
				</Stack>

				<Box
					sx={() => ({
						width: '100%',
						display: 'flex',
						justifyContent: isFull ? 'flex-end' : 'center',
					})}
				>
					<ActionIcon
						onClick={toggleFull}
						variant="transparent"
						sx={theme => ({
							color: 'white',
							transform: isFull ? 'rotate(180deg)' : 'rotate(0deg)',
							'&:hover': {
								backgroundColor: theme.colors.brand[6],
							},
						})}
					>
						<Icon icon="double_arrow" />
					</ActionIcon>
				</Box>
			</Stack>
		</NavbarMantine>
	)
}

export default Navbar
