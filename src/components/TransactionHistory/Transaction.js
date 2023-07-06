import PropTypes from 'prop-types';
import {Row, Data} from './Transactions.styled'

export default function Transaction({ type, amount, currency }) {
    return (
         <Row>
            <Data>{type}</Data>
            <Data>{amount}</Data>
            <Data>{currency}</Data>
        </Row>  
    )    
}