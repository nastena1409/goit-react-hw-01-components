import PropTypes from 'prop-types';
import {
    Container,
    Description,
    Avatar,
    Name,
    UserInfo,
    Stats,
    StatsCard,
    Label,
    Quantity
} from './Profile.styled';

export default function Profile(props) {
    const {
        username,
        tag,
        location,
        avatar,
        stats: { followers, views, likes },
    } = props;
    return (
        <Container>
            <Description>
                <Avatar
                    src={avatar}
                    alt="User avatar"
                    className="avatar"
                />
                <Name>{username}</Name>
                <UserInfo>@{tag}</UserInfo>
                <UserInfo>{location}</UserInfo>
            </Description>

            <Stats>
                <StatsCard>
                    <Label>Followers</Label>
                    <Quantity>{followers}</Quantity>
                </StatsCard>
                <StatsCard>
                    <Label>Views</Label>
                    <Quantity>{views}</Quantity>
                </StatsCard>
                <StatsCard>
                    <Label>Likes</Label>
                    <Quantity>{likes}</Quantity>
                </StatsCard>
            </Stats>
        </Container>
    )
}

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.exact({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired
  }),   
}