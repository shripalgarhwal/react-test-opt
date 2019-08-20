import React from 'react';
import { Form, Row } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { IFormProps } from "./financial-home"

export interface IFinancialForm {
  submitForm: (event: any) => void;
  getOldData: (data: any) => void;
  previousDetails: IFormProps;
  newDetails: IFormProps;
}

const FinancialForm: React.StatelessComponent<IFinancialForm> = ({submitForm, getOldData, previousDetails, newDetails}) => {
    return (
      <div>
        <div className="row row-no-gutters">
          <div className="col-sx-6  col-sm-6 col-md-6" />
          <div className="col-sx-6 col-sm-6 col-md-6 mt-3 text-left">
            <button className="btn btn-primary"
                    onClick={() => {
                      let {netAmount, transferedAmound, comment} = previousDetails;
                      getOldData({netAmount, transferedAmound, comment});
                    }}>Get Privious Data</button>
          </div>
        </div>
        <div className="row row-no-gutters">
          <div className="col-sm-5 col-md-5 m-3">
            <Form >
                <Form.Group as={Row} controlId="netAmount">
                  <Form.Label >Amount</Form.Label>
                  <Form.Control
                    type="number" 
                    name="netAmount"
                    placeholder="Enter Amount"
                    onChange={submitForm}
                    value={String((newDetails.netAmount === 0)?"": newDetails.netAmount)} />
                </Form.Group>
                <Form.Group as={Row} controlId="transferedAmound">
                  <Form.Label >Transfered Amound</Form.Label>
                  <Form.Control
                    type="number" 
                    name="transferedAmound"
                    placeholder="Enter amount for transfer"
                    onChange={submitForm}
                    value={String((newDetails.transferedAmound === 0)?"": newDetails.transferedAmound)}
                     />
                </Form.Group>
                <Form.Group as={Row} controlId="comment">
                  <Form.Label >Comment</Form.Label>
                  <Form.Control
                    type="text" 
                    name="comment"
                    placeholder="Comment"
                    onChange={submitForm}
                    value={newDetails.comment} />
                </Form.Group>
            </Form>
          </div>
          <div className="col-sm-5 col-md-5 m-3">
            <Form>
                <Form.Group as={Row} controlId="netAmount">
                  <Form.Label >Amount</Form.Label>
                  <Form.Control
                    name="netAmount"
                    value={String(previousDetails.netAmount)}
                    disabled />
                </Form.Group>
                <Form.Group as={Row} controlId="transferedAmound">
                  <Form.Label >Transfered Amound</Form.Label>
                  <Form.Control
                    type="number" 
                    name="transferedAmound"
                    value={String(previousDetails.transferedAmound)}
                    disabled />
                </Form.Group>
                <Form.Group as={Row} controlId="comment">
                  <Form.Label >Comment</Form.Label>
                  <Form.Control
                    type="text" 
                    name="comment"
                    value={previousDetails.comment}
                    disabled />
                </Form.Group>
            </Form>
          </div>        
        </div>
      </div>
    );
}
FinancialForm.prototype = {
    getOldData: PropTypes.func,
    submitForm: PropTypes.func,
    previousDetails: PropTypes.object,
    newDetails: PropTypes.object
}
export default FinancialForm;
