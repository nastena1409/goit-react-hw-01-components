import styled from '@emotion/styled'

export const Item = styled.li`
display: flex;
align-items: center;
gap: 20px;
border: 2px solid grey;
border-radius: 10px;
padding: 15px;
box-shadow: 7px 5px 9px grey;
`;

export const Status = styled.span`
border-radius: 50%;
width: 20px;
height: 20px;
background-color: ${props => (props.isOnline ? 'green' : 'red')};
`;

export const Avatar = styled.img`
padding: 5px;
width: 80px;
height: 80px;
border-radius: 5px;
border: 2px solid grey;
box-shadow: 4px 2px 7px grey;
`;

export const Name = styled.p`
font-size: 32px;
font-weight: 500;
`;
