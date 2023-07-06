import PropTypes from 'prop-types';

export default function FriendList({ friends }) {    
    return (
        <ul className="friend-list">
            {friends.map(friend => (
                 <li className="item" key={friend.id}>
                    <span className="status" isOnline={friend.isOnline}></span>
                    <img className="avatar" src={friend.avatar} alt={friend.name} width="48" />
                    <p className="name">{friend.name}</p>
                </li>
            ))}
        </ul>
    )
}