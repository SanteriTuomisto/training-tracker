import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Input, Button, Label, Error } from '../StyledComponents';

class ExerciseForm extends React.Component {

  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <Error>
          {error}
        </Error>
      );
    }
  }

  renderInput = ({ input, label, meta }) => {
    //const className = `field ${meta.error && meta.touched ? 'error' : ''}`

    return (
      <div>
        <Label>{label}</Label>
        <Input {...input} autoComplete="off" />
        {this.renderError(meta)}
      </div>
    );  
  }

  onSubmit = (formValues) => {
    this.props.onSubmit(formValues);
  }

  render() {
    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
        <Field name="title" component={this.renderInput} label="Enter Title" />
        <Field name="category" component={this.renderInput} label="Enter Category" />
        <Field name="description" component={this.renderInput} label="Enter Description" />
        <Button primary>Submit</Button>
      </form>
    );
  }

}

const validate = (formValues) => {
  const errors = {};

  if (!formValues.title) {
    errors.title = 'You must enter a title';
  }

  if (!formValues.category) {
    errors.category = 'You must enter a category';
  }

  if (!formValues.description) {
    errors.description = 'You must enter a description';
  }

  return errors;
};

export default reduxForm({
  form: 'exerciseForm',
  validate
})(ExerciseForm)