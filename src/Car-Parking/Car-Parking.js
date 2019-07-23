import React, {Component} from 'react';
import Header from './header/Header';
import {Router, Switch, Route} from 'react-router-dom';
import { Grid } from 'semantic-ui-react';
import history from './history';
import DisplayTicketList from './components/display-tickets/components/Display-ticket-list';
import DisplayTicketDetailModal from './components/display-tickets/components/DisplayTicketDetailModal';
import CreateTicket from './components/add-ticket/components/Create-ticket';
import DisplaySlot from './components/display-slot/Display-slot';

class CarParking extends Component {
    render(){
        return (
            <Router history = {history}>
                <Grid columns={2} divided padded>
                    <Grid.Column width={3}>
                        <Header />
                    </Grid.Column>
                    <Grid.Column width={12}>
                        <Switch>
                            <Route path='/' exact component={DisplaySlot} />
                            <Route path='/new' exact component={CreateTicket} />
                            <Route path='/list/active' exact component={DisplayTicketList} />
                            {/* <Route path='/summary/:id' exact component={DisplayTicketDetailModal} /> */}
                            <Route path='/ticket/:id' exact component={DisplayTicketDetailModal} />
                        </Switch>
                    </Grid.Column>
                </Grid>
                
            </Router>
        )
    }
}

export default CarParking;