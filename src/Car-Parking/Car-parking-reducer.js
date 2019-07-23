import {combineReducers} from 'redux';
import addTicketReducer from './components/add-ticket/reducer/add-ticket-reducer';
import {reducer as FormReducer} from 'redux-form';
import { slotAvailabilityReducer } from './components/display-slot/reducer/seat-availability-reducer';

const generatePricing = (initial = {base : 15, perHour : 5}, action) => {
    return initial;
}

export default combineReducers ({
    active : addTicketReducer,
    form : FormReducer,
    slots : slotAvailabilityReducer,
    pricing : generatePricing
});

