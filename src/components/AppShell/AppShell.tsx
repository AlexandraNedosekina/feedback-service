import { AppShell as AppShellMantine } from '@mantine/core'
import { FC, ReactNode } from 'react'
import Header from './Header'
import Navbar from './Navbar'

interface Props {
	children: ReactNode
}

const AppShell: FC<Props> = ({ children }) => {
	return (
		<AppShellMantine navbar={<Navbar />} header={<Header />}>
			{children}
		</AppShellMantine>
	)
}

export default AppShell
