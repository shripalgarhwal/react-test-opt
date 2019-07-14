import React from 'react';
import { shallow} from 'enzyme';
import EmployeDetails from './employe-detail';

const historyObj:any = {
    goBack: jest.fn(),
    push: jest.fn(() => Promise.resolve)
}
const matchtParams: any = {
    match: {
        params: {
            eid: "101"
        }
    },
    history: historyObj,
    location: jest.fn()
}

describe("EmployeDetails component test", () => {
    let wrapper = shallow(<EmployeDetails {...matchtParams} />);

    it('render correctly EmployeDetails component', () => {
        expect(wrapper).toMatchSnapshot();
    });
    it('test for back button clicked', () => {
        wrapper.find('button').simulate('click');
        const instance = wrapper.instance();
        expect(instance.backHandlar()).toBeCalled();
    });
})