import React from "react";
import { Tabs, Tab } from "react-bootstrap";
import FinancialForm from "./financial-form";



export interface IFormProps {
    netAmount: number;
    transferedAmound: number;
    comment: string;
}
export interface IFinancialDetail {
    fnPreviousDetails: IFormProps;
    fnNewDetails: IFormProps;
    nonFnPreviousDetails: IFormProps;
    nonFnNewDetails: IFormProps;
    othPreviousDetails: IFormProps;
    othNewDetails: IFormProps;
}
const defaultFnPreviousDetails = {
    netAmount: 60,
    transferedAmound: 30,
    comment: "abc"
}
const defaultFnNewDetails = {
    netAmount: 10,
    transferedAmound: 0,
    comment: ""
}
class FinancialHome extends React.Component<any, IFinancialDetail> {
    state: IFinancialDetail = {
        fnPreviousDetails: defaultFnPreviousDetails,
        fnNewDetails: defaultFnNewDetails,
        nonFnPreviousDetails: defaultFnPreviousDetails,
        nonFnNewDetails: defaultFnNewDetails,
        othPreviousDetails: defaultFnPreviousDetails,
        othNewDetails: defaultFnNewDetails
    }
    constructor(props: any) {
        super(props);
        this.createDataObj = this.createDataObj.bind(this);
        this.changeFinancialData = this.changeFinancialData.bind(this);
        this.changeNonFinancialData = this.changeNonFinancialData.bind(this);
        this.changeOthersData = this.changeOthersData.bind(this);
        this.getFinancialOldData = this.getFinancialOldData.bind(this);
        this.getNonFinancialOldData = this.getNonFinancialOldData.bind(this);
        this.getOthersOldData = this.getOthersOldData.bind(this);
    }
    createDataObj(name: string, value: number | string) {
        return {[name]: value};
    }
    changeFinancialData(event: any) {
        const changedData = this.createDataObj(event.currentTarget.name, event.currentTarget.value);
        let dataObj: IFormProps = Object.assign({}, this.state.fnNewDetails, changedData);
        this.setState({ fnNewDetails: dataObj});
        event.preventDefault();
    }
    changeNonFinancialData(event: any) {
        const changedData = this.createDataObj(event.currentTarget.name, event.currentTarget.value);
        let dataObj: IFormProps = Object.assign({}, this.state.nonFnNewDetails, changedData);
        this.setState({ nonFnNewDetails: dataObj});
        event.preventDefault();
    }
    changeOthersData(event: any) {
        const changedData = this.createDataObj(event.currentTarget.name, event.currentTarget.value);
        let dataObj: IFormProps = Object.assign({}, this.state.othNewDetails, changedData);
        this.setState({ othNewDetails: dataObj});
        event.preventDefault();
    }
    getFinancialOldData() {
        let dataObj: IFormProps = Object.assign({}, this.state.fnPreviousDetails);
        this.setState({ fnNewDetails: {...dataObj}});
    }
    getNonFinancialOldData() {
        this.setState({ nonFnNewDetails: {...this.state.nonFnPreviousDetails}});
    }
    getOthersOldData() {
        this.setState({ othNewDetails: {...this.state.othPreviousDetails}});
    }
    render () {
        return  <div className="">
                    <div className="col-md-12">
                        <Tabs defaultActiveKey="financial" id="uncontrolled-tab-example">
                            <Tab eventKey="financial" title="Financial">
                                <FinancialForm submitForm={this.changeFinancialData} 
                                                getOldData={this.getFinancialOldData}
                                                previousDetails={this.state.fnPreviousDetails}
                                                newDetails={this.state.fnNewDetails} />
                            </Tab>
                            <Tab eventKey="nonfinancial" title="Non Financial">
                                <FinancialForm submitForm={this.changeNonFinancialData} 
                                                getOldData={this.getNonFinancialOldData}
                                                previousDetails={this.state.nonFnPreviousDetails}
                                                newDetails={this.state.nonFnNewDetails} />
                            </Tab>
                            <Tab eventKey="others" title="Others">
                                <FinancialForm submitForm={this.changeOthersData} 
                                                getOldData={this.getOthersOldData}
                                                previousDetails={this.state.othPreviousDetails}
                                                newDetails={this.state.othNewDetails} />
                            </Tab>
                        </Tabs>
                    </div>   
            </div>
    }
}

export default FinancialHome;
