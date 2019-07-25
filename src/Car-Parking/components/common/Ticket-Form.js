import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {Link} from 'react-router-dom';
import { Form } from 'semantic-ui-react';
import {now} from 'lodash';
import {connect} from 'react-redux';
import {values, isEmpty, isUndefined} from 'lodash';

let ticketList = [];

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
    const {onSubmit, btnText, tickets} = props;
 
    ticketList = tickets;

    const onFormSubmit = formData => {
        const timeStamp = now();
        onSubmit({...formData, timeStamp, status : 1});
    }

    return(
        <div>
            <form className="ui form error" onSubmit={props.handleSubmit(onFormSubmit)}>
                <Field
                    name = "name" 
                    component={formHandler} 
                    label="Enter name"/>
                <Field
                    name = "vehicle" 
                    component={formHandler} 
                    label="Vehicle registration no."
                    validate={registrationValidator}/>
                
                <Link to='/' className="ui button red">cancel</Link>
                <button className="ui button primary">{btnText}</button>
            </form>
        </div>
    )

    
    
}
const registrationValidator = (value) => {
    let error = "";
    debugger;
    if(!isEmpty(ticketList) || !isUndefined(ticketList)){
        const isPresent = ticketList.includes(value);
        if(isPresent === true){
            error = "Vehicle Already Exists"
        }
    }
    return error;
}
const validate = (formData) => {
    let error = {};
    if(!formData.name){
        error.name = "please enter a name"
    }
    if(!formData.vehicle){
        error.vehicle = "please enter a vehicle name"
    }
    return error;
}

const mapStateToProps = store => {
    return {
        tickets : values(store.active).map( ticket => ticket.vehicle),
    }
}
export default reduxForm({
        form : 'TicketForm', validate
    })(connect(mapStateToProps)(TicketForm));