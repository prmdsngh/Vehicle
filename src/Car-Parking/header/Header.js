import React, {Component} from 'react';
import { /*Input, */ Label, Menu, Icon } from 'semantic-ui-react';
import history from '../history';
import {/*isEmpty, isUndefined,*/ values, keys} from 'lodash';
import {connect} from 'react-redux';

class Header extends Component {
state = { activeItem: 'slot' }

handleItemClick = (e, { name, url }) => {
    this.setState({ activeItem: name })
    history.push(url)
}

// handleSearch = (e) => {
//     const value = e.target.value;
//     if(isEmpty(value) || isUndefined(value)){
//         history.push('/')
//     } else {
//         history.push(`/search/${value}`);
//     }
// }
  render() {
    const { activeItem } = this.state

    return (
                <Menu vertical>

                        <Menu.Item url='/' name='slot' active={activeItem === 'slot'} onClick={this.handleItemClick}>
                            <Label color='red'>U - {this.props.slots.inactiveCount}</Label>
                            <Label color='teal'>A - {this.props.slots.count}</Label>
                            Slots
                        </Menu.Item>

                        <Menu.Item url='/list/active' name='active' active={activeItem === 'active'} onClick={this.handleItemClick}>
                            <Label color='teal'>{this.props.active}</Label>
                            Active Tickets
                        </Menu.Item>

                    
                        {/* <Menu.Item url='/history' name='history' active={activeItem === 'history'} onClick={this.handleItemClick}>
                        <Label>{this.props.history}</Label>
                        Ticket History 
                        </Menu.Item> */}
                    

                        <Menu.Item url='/new' name='new' active={activeItem === 'new'} onClick={this.handleItemClick}>
                            <Icon name='plus' />
                        New Ticket 
                        </Menu.Item>

                    {/* <Menu.Item>
                    <Input icon='search' onChange={this.handleSearch} placeholder='Enter ticker number' />
                    </Menu.Item> */}
                </Menu>
      
    )
  }
}
const getSlotCount = slots => {
    const groups = keys(slots);

    let count = 0;
    let inactiveCount = 0;

    groups.forEach(key => {
        
            if(slots[key].status === 1)
            count++;
            else 
            inactiveCount++;
    })
    return {count, inactiveCount};
}
const mapStateToProps = (store) => {
    return {
        active : values(store.active).filter(e=>e.status === 1).length,
        history : values(store.completed).length,
        slots : getSlotCount(store.slots)
    }
}
export default connect(mapStateToProps)(Header);