import Icon from '@components/Icon'
import {
	ActionIcon,
	Badge,
	Button,
	Group,
	Input,
	Popover,
	Text,
} from '@mantine/core'
import { ChangeEvent, FC, useState } from 'react'
import { IProfileBadge } from 'src/types/profile'
import { useStyles } from './useStyles'

interface IProps {
	badge: IProfileBadge
	onDelete: (id: string) => void
	onUpdate: (id: string, label: string) => void
}

const ProfileBadge: FC<IProps> = ({ badge, onDelete, onUpdate }) => {
	const { classes, cx } = useStyles()

	const [isDeleteOpen, setIsDeleteOpen] = useState(false)
	const [isUpdateOpen, setIsUpdateOpen] = useState(false)

	const [updatedLabel, setUpdatedLabel] = useState(badge.label)

	return (
		<Badge key={badge.id} className={classes.badge}>
			{badge.label}
			<Popover
				width={180}
				withArrow
				opened={isUpdateOpen}
				onChange={setIsUpdateOpen}
				trapFocus
			>
				<Popover.Target>
					<ActionIcon
						className={cx(
							classes.badgeActionsCommon,
							classes.updateBadge
						)}
						size="xs"
						onClick={() => setIsUpdateOpen(true)}
					>
						<Icon icon="edit" />
					</ActionIcon>
				</Popover.Target>
				<Popover.Dropdown>
					<form
						onSubmit={e => {
							e.preventDefault()
							onUpdate(badge.id, updatedLabel)
							setIsUpdateOpen(false)
						}}
					>
						<Input
							value={updatedLabel}
							onChange={(e: ChangeEvent<HTMLInputElement>) =>
								setUpdatedLabel(e.currentTarget.value)
							}
							placeholder="Обновленный текст"
						/>

						<Group position="center" spacing="xs" noWrap>
							<ActionIcon color="green" type="submit">
								<Icon icon="done" />
							</ActionIcon>
							<ActionIcon onClick={() => setIsUpdateOpen(false)}>
								<Icon icon="close" />
							</ActionIcon>
						</Group>
					</form>
				</Popover.Dropdown>
			</Popover>

			<Popover
				width={180}
				withArrow
				opened={isDeleteOpen}
				onChange={setIsDeleteOpen}
			>
				<Popover.Target>
					<ActionIcon
						className={cx(
							classes.badgeActionsCommon,
							classes.deleteBadge
						)}
						size="xs"
						onClick={() => setIsDeleteOpen(true)}
					>
						<Icon icon="close" />
					</ActionIcon>
				</Popover.Target>
				<Popover.Dropdown>
					<Text align="center">Удалить?</Text>

					<Group position="center" spacing="xs" noWrap>
						<Button
							color="red"
							onClick={() => {
								onDelete(badge.id)
								setIsDeleteOpen(false)
							}}
						>
							Да
						</Button>
						<Button onClick={() => setIsDeleteOpen(false)}>Нет</Button>
					</Group>
				</Popover.Dropdown>
			</Popover>
		</Badge>
	)
}

export default ProfileBadge
