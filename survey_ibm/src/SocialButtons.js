import React from 'react';
import FontAwesome from 'react-fontawesome';

export default class SocialButtons extends React.Component {
    render() {
        return(
            <div className='row'>
                <div className='col text-center'> 
                    <FontAwesome name='facebook' />
                </div>
                <div className='col text-center'> 
                    <FontAwesome name='twitter' />
                </div>
                <div className='col text-center'> 
                    <FontAwesome name='linkedin' />
                </div>
            </div>
        );
    }
}