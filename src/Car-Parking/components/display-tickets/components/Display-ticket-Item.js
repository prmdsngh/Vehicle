import React, { Component } from 'react';
import { List, Segment, Grid } from 'semantic-ui-react';
import {Link} from 'react-router-dom';

class DisplayTicketItem extends Component {
    render(){
        const {name, vehicle, id} = this.props.ticket;
        return (
                <Grid.Column width={4}>
                    <Segment>
                        <List.Item >
                            <List.Content>
                                <Link to={`/ticket/${id}`}>
                                    <List.Header>TICKET NUMBER : {id}</List.Header>
                                    {name} ( {vehicle} )
                                </Link>
                            </List.Content>
                        </List.Item>
                    </Segment>
                </Grid.Column>
        )
    }
}
export default DisplayTicketItem;