import React from 'react';
import '../styles/banner.css';

export class Banner extends React.Component {

  render() {
    return (
      <div className={'Banner'}>
        <div className={'titleContainer'}>
          <h1>
            <p className={'h1s'}>A L B E R T</p>
            <p className={'h1s'}>S A L T</p>
            <p className={'underline'}>__________________</p>
          </h1>
          <h2 className={'secondaryTitle'}>
            <p>C O M P O S E R</p>
          </h2>
        </div>
      </div>
    );
  }
}