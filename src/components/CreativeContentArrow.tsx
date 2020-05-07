import React from 'react';
import '../styles/CreatetiveContentArrow.css'
import {Button, Icon} from "semantic-ui-react";

export class CreateContentArrow extends React.Component {
  render() {

    return (
      <div className={'arrowContainer'}>
        <Button icon color={'black'}
                className={'arrowButton'}
                size={'massive'}
                content={
                  <div className={'creativeContent'}>
                    <div className="arrow">
                      <Icon name='arrow alternate circle down outline' color={'grey'} className={'arrowIcon'} size={'big'}/>
                    </div>
                  </div>
                }>
        </Button>
      </div>
    );
  }
}