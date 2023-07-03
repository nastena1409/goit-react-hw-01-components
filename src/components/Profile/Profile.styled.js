import styled from '@emotion/styled'

export const Container = styled.div`
    margin: 30px auto;
    width: 400px;
    border: 1px solid gray;
    display: flex;
    flex-direction: column;
`;

export const Description = styled.div`
    padding: 20px;
    text-align: center;
`;

export const Avatar = styled.img`
    width: 60%;
    border-radius: 50%;
    border: 1px solid lightgray;
    margin-bottom: 40px
`;

export const Name = styled.p`
    font-size: 30px;
    font-weight: 700;
    
`;

export const UserInfo = styled.p`
    font-size: 20px;
    color: gray;
`;

export const Stats = styled.ul`
    list-style: none;
    display: flex;
    
    padding: 0;
    margin: 0;
    background-color: lightgray;
    border-top: 1px solid black;
`;

export const StatsCard = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    width: calc(100% / 3);
    border-right: 1px solid black;
`;

export const Label = styled.span`
   font-size: 16px;
   color: gray; 
   margin-bottom: 10px;
`;

export const Quantity = styled.span`
   font-size: 24px;
   font-weight: 700;
   color: black; 
`;
