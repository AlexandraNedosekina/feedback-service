import Icon from '@components/Icon'
import { ActionIcon, Button, Group, Popover, Text } from '@mantine/core'
import { FC } from 'react'
import { useStyles } from '../useStyles'

interface IProps {
	isOpen: boolean
	onOpen: () => void
	onClose: () => void
	onChange: (opened: boolean) => void
	onDelete: () => void
}

const DeletePopover: FC<IProps> = ({
	isOpen,
	onClose,
	onOpen,
	onChange,
	onDelete,
}) => {
	const { classes, cx } = useStyles()

	return (
		<Popover width={180} withArrow opened={isOpen} onChange={onChange}>
			<Popover.Target>
				<ActionIcon
					className={cx(classes.badgeActionsCommon, classes.deleteBadge)}
					size="xs"
					onClick={onOpen}
				>
					<Icon icon="close" />
				</ActionIcon>
			</Popover.Target>
			<Popover.Dropdown>
				<Text align="center">Удалить?</Text>

				<Group position="center" spacing="xs" noWrap>
					<Button color="red" onClick={onDelete}>
						Да
					</Button>
					<Button onClick={onClose}>Нет</Button>
				</Group>
			</Popover.Dropdown>
		</Popover>
	)
}

export default DeletePopover
