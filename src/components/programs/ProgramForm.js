import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { ReduxFormSelect } from '../helpers/ReduxFormSelect';


class ProgramForm extends React.Component {

  options = [];

  componentDidMount() {
    for(var i = 0; i < this.props.exercises.length; i++) {
      var obj = { value: this.props.exercises[i].id, label: this.props.exercises[i].title };
      this.options.push(obj);
    }
  }

  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">
            {error}
          </div>
        </div>
      );
    }
  }

  renderInput = ({ input, label, meta }) => {
    const className = `field ${meta.error && meta.touched ? 'error' : ''}`

    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} autoComplete="off" />
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
        <Field name="description" component={this.renderInput} label="Enter Description" />
        <label>Exercises</label>
        <Field name="exercises" component={ReduxFormSelect} options={this.options} />
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}

const validate = (formValues) => {
  const errors = {};

  if (!formValues.title) {
    errors.title = 'You must enter a title';
  }

  if (!formValues.description) {
    errors.description = 'You must enter a description';
  }

  return errors;
};

export default reduxForm({
  form: 'programForm',
  validate
})(ProgramForm)