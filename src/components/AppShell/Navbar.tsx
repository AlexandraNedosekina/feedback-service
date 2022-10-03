import Icon, { Icons } from '@components/Icon'
import { ActionIcon, Box, Navbar as NavbarMantine, Stack } from '@mantine/core'
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

const Navbar: FC = () => {
	const router = useRouter()

	const [isFull, setIsFull] = useState(true)

	const toggleFull = () => {
		setIsFull(!isFull)
	}

	return (
		<NavbarMantine
			width={{ lg: isFull ? 270 : 60 }}
			sx={theme => ({
				backgroundColor: theme.colors.brand[7],
			})}
			withBorder={false}
			px="lg"
		>
			<Stack
				justify="space-between"
				align="center"
				py="xl"
				sx={() => ({ height: '100%' })}
			>
				<Stack>
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
						/>
					))}
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
