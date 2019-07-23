import React from 'react';
import TicketForm from '../../common/Ticket-Form';
import { Container } from 'semantic-ui-react';
import { addTicketAction } from '../actions/Add-ticket-action';
import {connect} from 'react-redux';
import {values} from 'lodash';
import { BookSlotAction } from '../../display-slot/actions/slot-action';

const CreateTicket = (props) => {
    const {slots, addTicketAction, BookSlotAction} = props;

    const onFormSubmitHandler = ( formValues ) => {
        const groupList = values(slots);
        for(let i = 0; i < groupList.length ; i++){
            const groupSlot = values(groupList[i]);
            for( let j = 0; j< groupSlot.length ; j++){
                const slot = groupSlot[j];
                const {status, group, num} = slot;
                if(status === 1){
                    BookSlotAction({group, num});
                    addTicketAction({...formValues, slot, status});
                    return;
                }
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