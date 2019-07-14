import React from "react";
import { IEmployeList, getEmployeDetails, defaultEmployeList } from "../../state";
import { RouteComponentProps } from "react-router-dom";

export interface IDmployeDetail {
    details: IEmployeList
}
export interface MatchtParams {
    eid: string;
}
class EmployeDetails extends React.Component<RouteComponentProps<MatchtParams>, any> {
    state: IDmployeDetail = {
        details: {
            eid: 0,
            eName: "",
            dept: "",
            salary: 0
        }
    }
    constructor(props: any) {
        super(props);
        this.backHandlar = this.backHandlar.bind(this);
    }
    componentDidMount() {
        const {match: {params}} = this.props;
        const filteredDetails = getEmployeDetails(Number(params.eid), defaultEmployeList);
        this.setState({details: filteredDetails});
    }
    backHandlar() {
        this.props.history.push("/");
    }
    render () {
        return  <div className="">
                <div className="col-md-12">
                    <button className="btn btn-primary"
                        onClick={this.backHandlar}>Back</button>
                </div>
                <h4>Employe Details</h4>
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
                        <tr>
                            <td>{this.state.details.eid}</td>
                            <td>{this.state.details.eName}</td>
                            <td>{this.state.details.dept}</td>
                            <td>{this.state.details.salary}</td>
                            <td>
                                
                            </td>
                        </tr>                                     
                    </tbody>
                </table>                
            </div>
    }
}

export default EmployeDetails;
