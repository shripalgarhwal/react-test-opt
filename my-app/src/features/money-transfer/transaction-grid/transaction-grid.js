import React from 'react';

const TransactionGrid = ({transList}) => {
    return <div >
            <table className="table">
                <thead>
                    <tr>
                        <th>Transaction ID</th>
                        <th>User Name</th>
                        <th>Payment Mode</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {transList.map((r) => (
                        <tr key={r.transId.toString()}>
                            <td>{r.transId}</td>
                            <td>{r.userName}</td>
                            <td>{r.paymentMode}</td>
                            <td>{r.amount}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
    </div>
}

export default TransactionGrid;