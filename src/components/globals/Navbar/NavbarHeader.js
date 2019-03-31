import React, { Component } from 'react'
import {Link} from 'gatsby'
import logo2 from '../../../images/logo3.svg'
import { FaBars} from 'react-icons/fa'
import { FaBeer } from "react-icons/fa"
import styled from 'styled-components'
import {styles} from '../../../utils'

export default class NavbarHeader extends Component {
  render() {
    const {handleNavbar} = this.props
    return (
      <HeaderWrapper>
        <Link to="/">
          <img style={{width:'8.2rem'}} src={logo2} alt="name" />
        </Link>
        <FaBars
          className="toggle-icon"
          onClick={() => {
            handleNavbar()
          }}
        />
      </HeaderWrapper>
    )
  }
}


const HeaderWrapper = styled.div`
  padding: 0.4rem 0.4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .toggle-icon {
    font-size: 1.4rem;
    cursor: pointer;
    color: ${styles.colors.primaryColor};
  }
  @media (min-width: 768px) {
    .toggle-icon {
      display: none;
    }
  }
`