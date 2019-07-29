import React from 'react';
import TicketForm from '../../common/Ticket-Form';
import { Container } from 'semantic-ui-react';
import { addTicketAction } from '../actions/Add-ticket-action';
import {connect} from 'react-redux';
import { BookSlotAction } from '../../display-slot/actions/slot-action';
import { totalSeats } from '../../../Utils/numConst';

const CreateTicket = (props) => {
    const {slots, addTicketAction, BookSlotAction} = props;

    const onFormSubmitHandler = ( formValues ) => {
        
        while (true) {
            let value = Math.floor(Math.random() * (totalSeats -1))
            const slot = slots[value];
            const {status, num} = slot;
            if(status === 1){
                BookSlotAction({num});
                addTicketAction({...formValues, slot, status});
                return;
            }
        }
    }
    return (
        <Container>
            <h2> Create Ticket </h2>
            <TicketForm onSubmit={onFormSubmitHandler} btnText='Create Ticket' />
        </Container>
    )
}
const mapDispatchToProps = store => {
    return {
        slots : store.slots,
    }
}
export default connect(mapDispatchToProps, {addTicketAction, BookSlotAction})(CreateTicket);