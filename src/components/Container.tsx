import React from 'react';
import '../App.css';
import {Banner} from "./Banner";
import {CreateContentArrow} from "./CreativeContentArrow";

export class Container extends React.Component {

  render() {
    return (
      <div className={'container'}>
        <Banner/>
        <CreateContentArrow/>
      </div>
    );
  }
}
