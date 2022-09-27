import {
	ButtonProps,
	ButtonStylesParams,
	MantineThemeOverride,
} from '@mantine/core'

const ButtonDefaultProps: Partial<ButtonProps> = {}

export const mantineTheme: MantineThemeOverride = {
	colors: {
		brand: [
			'#F2F5F9',
			'#E5EBF3',
			'#C9D5E7',
			'#A7BEDA',
			'#7DA2CD',
			'#3B82BF',
			'#3474AA',
			'#2D6493',
			'#255278',
			'#1A3A55',
		],
	},
	primaryColor: 'brand',
	primaryShade: 5,
	components: {
		Button: {
			defaultProps: ButtonDefaultProps,
			styles: (theme, params: ButtonStylesParams) => ({
				root: {
					borderRadius: '4px',
					boxShadow:
						params.variant === 'filled'
							? `inset 0px -2px 0px ${theme.colors.brand[7]}`
							: undefined,
					'&:disabled': {
						backgroundColor: theme.colors.brand[3],
						color: 'white',
						boxShadow: `inset 0px -2px 0px ${theme.colors.brand[4]}`,
					},
				},
			}),
		},
	},
}
