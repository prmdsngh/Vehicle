import React from 'react';
import { Grid, Label } from 'semantic-ui-react';
import {keys} from 'lodash';

const DisplaySlotItem = ({group, item}) => {
    return (
        <Grid.Row>
                <Grid.Column width={1}>
                    <Label color='blue'>
                        {group}
                    </Label>
                </Grid.Column>
                <Grid.Column width={11}>
                    <Grid>
                        {keys(item).map(id => {
                            const {num, status} = item[id];
                            return (
                                <Grid.Column key={id}>
                                    <Label color={status === 1 ? 'green' : 'red'} horizontal>
                                        {num}
                                    </Label>
                                </Grid.Column>
                            )
                        })}
                    </Grid>
                </Grid.Column>
        </Grid.Row>
    )
}
export default DisplaySlotItem;