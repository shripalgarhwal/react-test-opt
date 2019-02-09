import React from 'react';

const UserSelection = (props) => {
    return <div onChange={props.selectUser}>
            <label>            
                <input
                    name="user"
                    type="radio"
                    value={"American Express"} />
                USER - A
            </label>
            <br />
            <label>            
                <input
                    name="user"
                    type="radio"
                    value={"Visa"} />
               USER - B
            </label>
            <br />
            <label>            
                <input
                    name="user"
                    type="radio"
                    value={"DBS PayLa"} />
                USER - C
            </label>
    </div>
}

export default UserSelection;