import React, { Component } from 'react';
import { connect } from 'react-redux';
import BankSelection from './banks/bank-selection';
import UserSelection from './users/users-selection';
import TransferAmount from './transfer-amount-field';
import boundAddNewTransaction from '../../state/actions';

class MoneyTransferFormFields extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: "",
            paymentMode: "",
            amount: null
        }
        this.selectBank = this.selectBank.bind(this);
        this.selectUser = this.selectUser.bind(this);
        this.changeTransferAmt = this.changeTransferAmt.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);        
    }
  selectBank(value) {
    this.setState({
        paymentMode: value.target.value
    });
  }
  selectUser(value) {
    this.setState({
        userName: value.target.value
    });
  }
  changeTransferAmt(value) {
    this.setState({
        amount: Number(value.target.value)
    });
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.handleSubmit(this.state);
  }
  render() {
    return (
        <form onSubmit={this.handleSubmit}>
            <br/>
            <div className="row">
                <div className="col-sm">
                    <BankSelection selectBank={this.selectBank}>
                    </BankSelection>
                </div>
                <div className="col-sm">
                    <UserSelection selectUser={this.selectUser}>
                    </UserSelection>
                </div>
                <div className="col-sm">
                    <TransferAmount changeTransferAmt={this.changeTransferAmt}>
                    </TransferAmount>
                </div>
                <div className="col-sm">
                    <input type="submit" value="Transfer" />
                </div>
            </div>
        </form>
    );
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        handleSubmit: boundAddNewTransaction
    }
}  
const MoneyTransferForm = connect(
    null,
    mapDispatchToProps
  )(MoneyTransferFormFields)
export default MoneyTransferForm;
