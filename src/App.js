import React from 'react';
import './App.css';
import { Container } from "./components/Container";
import * as Scroll from 'react-scroll'
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

export class App extends React.Component {

  componentDidMount = () => {
    Events.scrollEvent.register('begin', function(to, element) {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register('end', function(to, element) {
      console.log("end", arguments);
    });

    scrollSpy.update();
  }


  render() {
  return (
      <React.Fragment>
        <Container/>
      </React.Fragment>
    );
  }
}
