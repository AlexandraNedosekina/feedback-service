import { MantineSize, useMantineTheme } from '@mantine/core'
import { FC } from 'react'

export type Icons =
	| 'account_circle'
	| 'filter_alt'
	| 'search'
	| 'star'
	| 'home'
	| 'trending_up'
	| 'group'
	| 'double_arrow'
	| 'menu'
	| 'close'
type IconType = 'outlined' | 'rounded' | 'sharp'
type IconSize = MantineSize | number

export interface IconProps {
	icon: Icons
	type?: IconType
	size?: IconSize
	filled?: boolean
}

const Icon: FC<IconProps> = ({ icon, size, type = 'outlined', filled }) => {
	const theme = useMantineTheme()

	return (
		<span
			className={`material-symbols-${type}`}
			style={{
				fontSize:
					typeof size === 'number'
						? `${size}px`
						: theme.fontSizes[size || 'md'],
				fontVariationSettings: `'FILL' ${
					filled ? '1' : '0'
				}, 'wght' 300, 'GRAD' 0, 'opsz' 48`,
			}}
		>
			{icon}
		</span>
	)
}

export default Icon
