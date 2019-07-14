import React from 'react';
import { shallow} from 'enzyme';
import DisplayEmployeList, { IPropsEmployeList } from './display-employe-list';

const PropsEmployeList: IPropsEmployeList = {
    employeList: [{
        eid: 101,
        eName: "Mark",
        dept: "Automation",
        salary: 2000
      }],
    openEmployeDetails: jest.fn()
}
describe("DisplayEmployeList component test", () => {
    let wrapper = shallow(<DisplayEmployeList {...PropsEmployeList} />);

    it('render correctly DisplayEmployeList component', () => {
        expect(wrapper).toMatchSnapshot();
    });
    it('test for open details button clicked', () => {
        wrapper.find('button').simulate('click');
        expect(PropsEmployeList.openEmployeDetails).toBeCalled();
    });
})
