import React, { Component } from 'react'
import { Link } from 'gatsby'
import logo from '../images/diamond.svg';
import styled from 'styled-components';
import ReactDOM from 'react-dom';
import Img from 'gatsby-image';

const HeaderWrapper = styled.div`
  background: #524763;
  margin-bottom: 1.45rem;
  overflow: hidden;
  position: relative;
  height: 50vh;
  h1 {
    img {
      height: 100px;
    }
  }
`;

const HeaderContainer = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
  z-index: 2;
  position: relative;
  display: flex;
  justify-content: space-between;
`;

const MainNav = styled.nav`
  ul{
    list-style: none;
    display: flex;
    li{
      margin-left: 10px;
    }
    a{
      text-decoration: none;
      color: white;
      &:hover {
        border-bottom: 2px solid grey;
        color: grey;
      }
    }
  }
`;



export default class Header extends Component {


  render() {
    const { data } = this.props;
    return (
      <HeaderWrapper>
    <HeaderContainer>
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
        <img src={logo} alt="logo"/>
        </Link>
        
      </h1>
    <MainNav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </MainNav>
      </HeaderContainer>
      <Img style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        opacity: 0.8,
      }}
        sizes={data.background.childImageSharp.fluid} 
        />
  </HeaderWrapper>
    );
  }
}



