import React from 'react';

const TransferAmount = (props) => {
    return <div onChange={props.changeTransferAmt}>
            <label>
                Amount:         
                <input
                    name="transferAmt"
                    type="number"
                     />
            </label>
    </div>
}

export default TransferAmount;