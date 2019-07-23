import React, { Component } from 'react';
import {values} from 'lodash';
import {connect} from 'react-redux';
import { Segment, Grid } from 'semantic-ui-react';
import DisplayTicketItem from './Display-ticket-Item';

class DisplayTicketList extends Component {
    getEachTicketItem = (tickets) => {
        return tickets.map(ticket => {
            if(!ticket) return null;
            return <DisplayTicketItem ticket = {ticket} key={ticket.id}/>
        })
    }
    render(){
        const {active} = this.props;
        if(active.length === 0){
            return <Segment>
                No Data
            </Segment>
        }
        return (
            <div>
                    <Grid>
                        {this.getEachTicketItem(active).filter(e => e)}
                    </Grid>
            </div>
        )
    }
}
const mapDispatchToProps = (store) => {
    return {
        active : values(store.active).filter(e => e.status === 1)
    }
}
export default connect(mapDispatchToProps, {})(DisplayTicketList);