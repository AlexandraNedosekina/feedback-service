import { ButtonProps, MantineThemeOverride } from '@mantine/core'

const ButtonDefaultProps: Partial<ButtonProps> = {
	radius: 'xs',
}

export const mantineTheme: MantineThemeOverride = {
	colors: {},
	components: {
		Button: {
			defaultProps: ButtonDefaultProps,
		},
	},
}
