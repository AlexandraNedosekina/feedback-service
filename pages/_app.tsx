import { MantineProvider } from '@mantine/core'
import type { AppProps } from 'next/app'
import { mantineTheme } from '../styles/mantineTheme'

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<MantineProvider withGlobalStyles withNormalizeCSS theme={mantineTheme}>
			<Component {...pageProps} />
		</MantineProvider>
	)
}

export default MyApp
