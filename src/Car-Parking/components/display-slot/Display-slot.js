import React from 'react';
import {connect} from 'react-redux';
import { Grid, Container, Segment } from 'semantic-ui-react';
import DisplaySlotItem from './components/display-slot-item';
import {keys} from 'lodash';

const DisplaySlot = props => {
    const {slots} = props;
    return ( 
        <Container>
            <Segment inverted color='blue'>Slots</Segment>
            <Grid relaxed stretched>
                {   
                    keys(slots).map((slotId, i) => {
                    return <DisplaySlotItem key = {`slot_${i}`} item={slots[slotId]} />
                    })
                }
            </Grid>
        </Container>
        
    )
}

const mapStateToProps = store => {
    return {
        slots : store.slots
    }
}

export default connect(mapStateToProps)(DisplaySlot);