import PropTypes from 'prop-types';

import {
    Container,
    Title,
    StatList,
    Item,
    Label,
    Percentage
} from './Statistics.styled'

export default function Statistics({ title, stats }) {
    return (
       <Container>
          {title && <Title>{title}</Title>}

          <StatList>
            {stats.map(item => (
            <Item key={item.id}> 
                <Label>{item.label}</Label>
                <Percentage>{item.percentage}%</Percentage>
            </Item>      
            ))}       
          </StatList>           
      </Container> 
    )
}

Statistics.propTypes = {
    title: PropTypes.string.isRequired,
    stats: PropTypes.arrayOf(
        PropTypes.exact({
          id: PropTypes.string.isRequired,
          label: PropTypes.string.isRequired,
          percentage: PropTypes.number.isRequired
    })
  ),
}