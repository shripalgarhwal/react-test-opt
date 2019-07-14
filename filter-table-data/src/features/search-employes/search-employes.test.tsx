import React from 'react';
import SearchEmployes from './search-employes';
import { shallow} from 'enzyme';
import { match } from 'react-router';

let mock: any = jest.fn();

const path = `/route/:id`;
const matchObj: match<{ eid: string }> = {
    isExact: false,
    path,
    url: path.replace(':eid', '1'),
    params: { eid: "1" }
};
const historyObj:any = {
    goBack: jest.fn(),
    push: jest.fn(() => Promise.resolve)
}
describe("SearchEmploye component test", () => {
    let wrapper: any;
    const getEmployesList = jest.fn();
    beforeAll(() => {
        wrapper = shallow(<SearchEmployes
            match = {matchObj}
            location = {mock}
            history= {historyObj} />);
    })
    it('render correctly searchEmploye component', () => {
        expect(wrapper).toMatchSnapshot();
    });
    it('test for openEmployeDetails method called', () => {
        const eid:number = 102;
        const instance = wrapper.instance();
        expect(instance.openEmployeDetails(eid)).toBeDefined();
    });
    it('test for openEmployeDetails method called', () => {
        const mockedEvent = { 
            currentTarget: { value: ""}, 
            preventDefault: jest.fn(() => Promise.resolve)
        }
        const instance = wrapper.instance();
        expect(instance.searchEmploye(mockedEvent)).toBeCalled();
    });
})
