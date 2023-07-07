import PropTypes from 'prop-types';
import Transaction from './Transaction'
import {
    Table,
    Header,
    HeaderRow,
    Title,
    Body
} from '../TransactionHistory/TransactionHistory.styled'
export default function TransactionHistory({ items }) {
    return (
        <Table>
  <Header>
    <HeaderRow>
      <Title>Type</Title>
      <Title>Amount</Title>
      <Title>Currency</Title>
    </HeaderRow>
  </Header>

    <Body>
       {items.map(({id, type, amount, currency}) => (
           <Transaction
               key={id}
               type={type}
               amount={amount}
               currency={currency}
           />
        ))} 
  </Body>
</Table>
    )
}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired
        })
    ),
};