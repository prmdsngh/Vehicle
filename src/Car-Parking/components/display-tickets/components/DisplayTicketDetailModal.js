import React from 'react';
import {connect} from 'react-redux';
import { Button, Header, Icon, Modal, Segment, Image } from 'semantic-ui-react'
import {isUndefined} from 'lodash';
import history from '../../../history';
import { endTicketAction } from '../../end-ticket/actions/end-ticket-action';
import { cancelTicketAction } from '../../end-ticket/actions/cancel-ticket-action';

const statuss = {
    1 : 'ACTIVE',
    2 : 'COMPLETED',
    3 : 'CANCELLED'
}
const DisplayTicketDetailModal = props => {
    if(isUndefined(props) || isUndefined(props.ticket)){
        return (
            <Segment loading>
              <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
            </Segment>
          )
    }

    const {name, vehicle, id, timeStamp, slot : { group, num}, status} = props.ticket;
    // const date = new Date(timeStamp);
    return (
        <Modal onClose={()=>history.push('/')} defaultOpen closeIcon>
        <Header icon='bus' content={`Ticket : ${id} -- ${statuss[status]}`} />
        <Modal.Content>
            <p>Name : {name}</p>
            <p>Vehicle : {vehicle}</p>
            <p>Date : {(Date(timeStamp))}</p>
            <p>Slot : {`${group}- ${num}`}</p>
            {!isUndefined(props.ticket.finishTime) && <p>Finish Time : {(Date(timeStamp))}</p>}
            {!isUndefined(props.ticket.price) && <p>Price : {props.ticket.price}</p>}
        </Modal.Content>
        {isUndefined(props.ticket.price) && <Modal.Actions>
            <Button color='red' onClick={() => props.cancelTicketAction({id, group, num})}>
            <Icon name='remove' /> cancel
            </Button>
            <Button color='green' onClick={()=>props.endTicketAction({id, group, num})}>
            <Icon name='checkmark' /> Complete
            </Button>
        </Modal.Actions>}
        </Modal>
    )
}
const mapStateToProps = (store, props) => {
    const id = props.match.params.id;
    return {
        ticket : store.active[id]
    }
}
export default connect(mapStateToProps, {endTicketAction, cancelTicketAction})(DisplayTicketDetailModal);