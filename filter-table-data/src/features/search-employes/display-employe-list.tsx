import React from "react";
import { IEmployeList } from "../../state";


interface IPropsEmployeList {
    employeList: IEmployeList[];
    openEmployeDetails: (eid: number) => void;
}
const DisplayEmployeList = (props: IPropsEmployeList) => {
    return  <div className="">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Employe Id</th>
                            <th>Employe Name</th>
                            <th>Department</th>
                            <th>Salary (Rs.)</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                    { props.employeList.map( (item: IEmployeList, index: number) => {
                        return <tr key={index}>
                                    <td>{item.eid}</td>
                                    <td>{item.eName}</td>
                                    <td>{item.dept}</td>
                                    <td>{item.salary}</td>
                                    <td>
                                        <button className="btn btn-primary"
                                            onClick={() => { props.openEmployeDetails(item.eid)}} >Details</button>
                                    </td>
                                </tr>
                        })}                                                
                    </tbody>
                </table>                
            </div>
}

export default DisplayEmployeList;
