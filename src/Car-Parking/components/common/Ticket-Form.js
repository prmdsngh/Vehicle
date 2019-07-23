import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {Link} from 'react-router-dom';
import { Form } from 'semantic-ui-react';
import {now} from 'lodash';

const formHandler = ({input, label, meta}) =>{
  const getInput = () => {
    const {submitFailed, invalid} = meta;
    const style =  (submitFailed && invalid)? {border:'1px solid red'} : null;
    return (<input style={style} {...input} autoComplete='off'/>);
  }

  return ( //meta comes from validate function
  <Form.Field>
      <label>{label}</label>
      {getInput()}
      {errorMessage(meta)}
  </Form.Field>
)}


const errorMessage = ({error, submitFailed/*touched*/}) => {
    if(submitFailed && error) {
        return (
                <div style={{color:'#e7504c'}}>{error}</div>
        )
    }
}

const TicketForm = props => {
    const {onSubmit, btnText} = props;
 
    

    const onFormSubmit = formData => {
        const timeStamp = now();
        onSubmit({...formData, timeStamp, status : 1});
    }

    
    return(
        <div>
            <form className="ui form error" onSubmit={props.handleSubmit(onFormSubmit)}>
                <Field
                    name = "name" component={formHandler} label="Enter name"/>
                <Field
                    name = "vehicle" component={formHandler} label="Vehicle name"/>
                
                <Link to='/' className="ui button red">cancel</Link>
                <button className="ui button primary">{btnText}</button>
            </form>
        </div>
    )
    
}

const validate = formData => {
    let error = {};
    if(!formData.name){
        error.name = "please enter a name"
    }
    if(!formData.vehicle){
        error.vehicle = "please enter a vehicle name"
    }
    return error;
}

export default reduxForm({
        form : 'TicketForm', validate
    })(TicketForm);