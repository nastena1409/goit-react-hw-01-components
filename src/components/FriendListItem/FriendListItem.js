import PropTypes from 'prop-types';
import {
    Item,
    Status,
    Avatar,
    Name
} from '../FriendListItem/FriendListItem.styled'

export default function FriendListItem ({ avatar, name, isOnline }) {
    return (
        <Item>
            <Status isOnline={isOnline}></Status>
            <Avatar src={avatar} alt={name} width="48" />
            <Name>{name}</Name>
        </Item>
    )
}

FriendListItem.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.exact({
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired
        })
    ),
};