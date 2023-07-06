import PropTypes from 'prop-types';
import  FriendListItem  from '../FriendListItem/FriendListItem';
import {Friends} from './FriendList.styled'
export default function FriendList ({ friends }) {    
    return (
        <Friends className="friend-list">
            {friends.map(friend => (
                <FriendListItem
                    key={friend.id}
                    isOnline={friend.isOnline}
                    avatar={friend.avatar}
                    name={friend.name}
                />                    
            ))}
        </Friends>
    )
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.exact({
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
            id: PropTypes.number.isRequired
        })
    ),
};