import React, { Component } from 'react';
import DisplayEmployeList from './display-employe-list';
import SearchForm from './searchForm';
import { IEmployeList, getEmployesList } from '../../state';
import { RouteComponentProps } from 'react-router';


interface IEmployes {
  searchText: string;
  employeList: IEmployeList[];
}


class SearchEmployes extends Component<RouteComponentProps, any> {
  state: IEmployes = {
    searchText: "",
    employeList: []
  }
  constructor(props: any) {
    super(props)
    this.searchEmploye = this.searchEmploye.bind(this);
    this.openEmployeDetails = this.openEmployeDetails.bind(this);
  }
  componentDidMount() {
    const filteredItem: IEmployeList[] = getEmployesList(String(this.state.searchText).toLowerCase());
    this.setState({employeList: filteredItem})
  }
  public searchEmploye(event:any) {
    event.preventDefault();
    const filteredItem: IEmployeList[] = getEmployesList(String(event.currentTarget.value).toLowerCase());
    this.setState({employeList: filteredItem})
  }
  public openEmployeDetails(eid: number) {
    this.props.history.push(`/details/${eid}`);
  }
  render() {
    return (
      <div className="container-fluid">
        <div className="col-md-12">
          <SearchForm submitSearchForm={this.searchEmploye}
              searchText={this.state.searchText}></SearchForm>
        </div>
        <div className="col-md-12 mt-5">
          <DisplayEmployeList employeList={this.state.employeList}
                openEmployeDetails={this.openEmployeDetails} />
        </div>        
      </div>
    );
  }
}

export default SearchEmployes;
