import styled from '@emotion/styled'

export const Container = styled.section`
    margin: 50px auto;
    width: 600px;
    border: 2px solid grey;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
`;
export const Title = styled.h2`
    margin: 50px auto;
    color: gray;
    text-transform: uppercase;
    font-size: 32px;
    font-weight: 700;
`;

export const StatList = styled.ul`
    list-style: none;
    display: flex;
    margin: 0;
    padding: 0;
`;

export const Item = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    width: calc(100% / 5);
    border: 1px solid white;
    background-color: teal;
`;

export const Label = styled.span`
    font-size: 18px;
    color: white; 
    margin-bottom: 15px;
`;

export const Percentage = styled.span`
    font-size: 32px;
    color: white; 
`;