import React from 'react';

const BankSelection = (props) => {
    return <div onChange={props.selectBank}>
            <label>            
                <input
                    name="banks"
                    type="radio"
                    value={"American Express"} />
                    American Express
            </label>
            <br />
            <label>            
                <input
                name="banks"
                type="radio"
                value={"Visa"} />
               Visa
            </label>
            <br />
            <label>            
                <input
                    name="banks"
                    type="radio"
                    value={"DBS PayLa"} />
                DBS PayLa
            </label>
    </div>
}

export default BankSelection;