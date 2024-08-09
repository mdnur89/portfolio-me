import React, { Component } from 'react';

import Menu from '../components/Menu';

import scrollToElement from 'scroll-to-element';

// Customized Components
import Home from '../components/Home';
import Contact from '../components/Contact';
import AboutMe from '../components/AboutMe';
import Projects from '../components/Projects';

import { Global } from '@emotion/react';
import globalStyles from '../globalStyle.js';

class MainContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      menuClick: false,
      backgroundDark: false,
    }
    this.Top = React.createRef();
    this.About = React.createRef();
    this.Contact = React.createRef();
    this.Projects = React.createRef();
  }
  
  componentDidMount() {
    this.handleScrolling();
    window.onscroll = this.handleScrolling;
  }

  componentWillUnmount() {
    window.onscroll = null;
  }

  handleScrolling = (windowHeight) => {
    if (!this.state.menuClick) {
      const scroll = window.scrollY;
      const section1End = this.Top.current.getBoundingClientRect().height - 30;
      const section2End = section1End + this.About.current.getBoundingClientRect().height;
      const section3End = section2End + this.Contact.current.getBoundingClientRect().height;
      let scrollSection = 1;
      if (scroll > section3End) {
        scrollSection = 4;
      } else if (scroll > section2End) {
        scrollSection = 3;
      } else if (scroll > section1End) {
        scrollSection = 2;
      }

      if ([2, 4].includes(scrollSection)) {
          this.setState(({backgroundDark}) => {
            if(!backgroundDark) return {backgroundDark: true, section: scrollSection}
            else return null;
          });
        } else {
          this.setState(({backgroundDark}) => {
            if(backgroundDark) return {backgroundDark: false, section: scrollSection}
          else return null;
        })
      }
    }
  }

  handleMenuTap = (ev) => {
    const sectionName = ev.target.textContent;
    let section = 1;
    if (sectionName === 'About') {
      section = 2;
    } else if (sectionName === 'Contact') {
      section = 3;
    } else if (sectionName === 'Projects') {
      section = 4;
    }
    this.setState({
      menuClick: true,
      section,
    }, () => {
      scrollToElement(this[sectionName].current, {
        align: 'top',
        duration: 1000
      })
      setTimeout(() => {
        this.setState({
          menuClick: false,
          section,
        })
      }, 950);
    })
  }
    
  render () {
    return (
      <>
        <Global styles={globalStyles}/>
        <Menu css={{position: "fixed", top: 15}} onDark={this.state.backgroundDark} section={this.state.section}>
          <li onClick={this.handleMenuTap}>Top</li>
          <li onClick={this.handleMenuTap}>About</li>
          <li onClick={this.handleMenuTap}>Contact</li>
          <li onClick={this.handleMenuTap}>Projects</li>
        </Menu>
        <Home ref={this.Top} />
        <AboutMe ref={this.About} />
        <Contact ref={this.Contact}/>
        <Projects ref={this.Projects} />
      </>
    )
  }  
}

export default MainContainer;
