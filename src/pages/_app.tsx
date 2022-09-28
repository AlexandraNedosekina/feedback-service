import { MantineProvider } from '@mantine/core'
import type { AppProps } from 'next/app'
import { mantineTheme } from '../styles/mantineTheme'
import '../styles/global.css'

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<MantineProvider withGlobalStyles withNormalizeCSS theme={mantineTheme}>
			<Component {...pageProps} />
		</MantineProvider>
	)
}

export default MyApp
