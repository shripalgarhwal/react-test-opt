import React from 'react';
import { shallow} from 'enzyme';
import SearchForm, { IsearchFormProps } from './searchForm';

const searchFormProps: IsearchFormProps = {
    submitSearchForm: jest.fn(),
    searchText: ""
}
describe("SearchForm component test", () => {
    let wrapper = shallow(<SearchForm {...searchFormProps} />);

    it('render correctly SearchForm component', () => {
        expect(wrapper).toMatchSnapshot();
    });
    it('test for submit form clicked', () => {
        wrapper.find('Form').simulate('submit');
        expect(searchFormProps.submitSearchForm).toBeCalled();
    });
})