import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import MoneyTransferForm from './money-transfer-form';
import TransactionGrid from './transaction-grid/transaction-grid';
import Chart from './chart/chart';


const MoneyTransfer = ({ transList }) => (
    <div className="container-fluid">
        <MoneyTransferForm></MoneyTransferForm>
        <TransactionGrid transList={transList}>
        </TransactionGrid>
        <Chart transList={transList}></Chart>
        
    </div>
)
MoneyTransfer.propTypes = {
    transList: PropTypes.arrayOf(
        PropTypes.shape({
            transId: PropTypes.number,
            userName: PropTypes.string,
            paymentMode: PropTypes.string,
            amount: PropTypes.number,
        }).isRequired
    )
}
const mapStateToProps = state => {
    return {
        transList: state.transList
    }
  }
  
const MoneyTransferContainer = connect(
    mapStateToProps
  )(MoneyTransfer)
export default MoneyTransferContainer;
