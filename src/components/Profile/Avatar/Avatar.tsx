import Icon from '@components/Icon'
import { Avatar as MantineAvatar } from '@mantine/core'
import { FC } from 'react'
import styles from './Avatar.module.sass'

interface Props {
	src: string | null
}

const Avatar: FC<Props> = ({ src }) => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.wrapper_circle}>
				<MantineAvatar src={src} radius={100} size={96} />
				<div className={styles.controls}>
					<div className={styles.controls_button}>
						<Icon icon="file_upload" />
					</div>
					<div className={styles.controls_button}>
						<Icon icon="edit" />
					</div>
				</div>
			</div>
			<div className={styles.delete}>
				<Icon icon="close" />
			</div>
		</div>
	)
}

export default Avatar
