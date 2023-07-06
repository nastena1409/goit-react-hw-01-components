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