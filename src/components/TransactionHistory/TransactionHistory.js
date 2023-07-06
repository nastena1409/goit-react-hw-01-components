import PropTypes from 'prop-types';
import Transaction from './Transaction'

export default function TransactionHistory({ items }) {
    return (
        <table class="transaction-history">
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

    <tbody>
       {items.map(({id, type, amount, currency}) => (
           <Transaction
               key={id}
               type={type}
               amount={amount}
               currency={currency}
           />
        ))} 
  </tbody>
</table>
    )
}