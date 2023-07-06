import PropTypes from 'prop-types';


export default function FriendListItem ({ avatar, name, isOnline }) {
    return (
        <li className="item">
            <span className="status" isOnline={isOnline}></span>
            <img className="avatar" src={avatar} alt={name} width="48" />
            <p className="name">{name}</p>
        </li>
    )
}