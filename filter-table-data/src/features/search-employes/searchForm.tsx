import React from 'react';
import { Button, Form, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';

export interface IsearchFormProps {
    submitSearchForm: (event: any) => void;
    searchText: string;
}

const SearchForm: React.StatelessComponent<IsearchFormProps> = (props) => {
    return (
      <div className="">
        <Form onSubmit={props.submitSearchForm}>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Search</Form.Label>
              <Form.Control 
                type="text" 
                name="employeName"
                placeholder="Employe Name"
                onChange={props.submitSearchForm} />
            </Form.Group>
          </Form.Row>          
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    );
}
SearchForm.prototype = {
    submitSearchForm: PropTypes.func,
    searchText: PropTypes.string,
}
export default SearchForm;
