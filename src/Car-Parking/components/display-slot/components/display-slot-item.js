import React from 'react';
import { Grid, Label } from 'semantic-ui-react';

const DisplaySlotItem = ({item}) => {
    const {num, status} = item;
    return (
                        
                            <Grid.Column>
                                    <Label color={status === 1 ? 'green' : 'red'} horizontal>
                                        {num}
                                    </Label>
                            </Grid.Column>
                
    )
}
export default DisplaySlotItem;