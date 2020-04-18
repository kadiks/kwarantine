import React from 'react';
import Link from 'next/link';
import styled, { css } from 'styled-components';

import Icon from '../core/Icon';
import styles from '../../utils/styles';
import {
    Header,
    Body
} from '../core/text';

const Nav = styled.nav`
  height: ${styles.size.toolbar}px;
  background-color: ${styles.color.primary};
  a {
    color: ${styles.color.body};
  }
  .active {
    font-weight: bold;
  }

  .navbar-brand  i, .navbar-brand span {
    display: inline-block;
    vertical-align: top;
    color: ${styles.color.background}
  }

  .navbar-brand  i {
      margin-right: 10px;
  }

  .navbar-brand span {
    margin-top: -3px;
    margin-left: 5px;
  }

  ${props =>
        props.isScrolled &&
        css`
      background-color: ${styles.color.primary};
      border-bottom: 1px #ccc solid;
      box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1);
      opacity: 0.75;
      a {
      }
      i {
        color: ${styles.color.secondary} !important;
      }
      + .nav-flag {
          opacity: .5;
      }
    `}
`;

class Navigation extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isScrolled: false,
            isReady: false,
            isDrawerOpen: false
        };

        this.onToggleDrawer = this.onToggleDrawer.bind(this);
    }

    componentDidMount() {
        window.onscroll = this.onScroll.bind(this);
        this.changeMenuStyle();

        this.setState({
            isReady: true
        });
    }

    componentDidUpdate() {
        // console.log('cmp/nav/NavBar#cmpDU');
    }

    onScroll() {
        // console.log('src/core/Menu#onScroll evt', document.body.scrollTop);
        const scrollTop = document.querySelectorAll("html")[0].scrollTop;
        this.changeMenuStyle(scrollTop);
    }

    onToggleDrawer() {
        this.setState({
            isDrawerOpen: !this.state.isDrawerOpen
        });
    }

    changeMenuStyle(scrollTop) {
        // console.log('>> cmp/navigation/index#changeMenuStyle', scrollTop);
        const scrollChangeValue = 50;
        const { isScrolled } = this.state;
        let isChangeState = false;
        if (scrollTop > scrollChangeValue && isScrolled === false) {
            isChangeState = true;
        }
        if (scrollTop <= scrollChangeValue && isScrolled === true) {
            isChangeState = true;
        }

        if (isChangeState === true) {
            this.setState({
                isScrolled: !this.state.isScrolled
            });
        }
    }

    render() {
        // console.log('>> cmp/navigation/index#render');
        const {
            activePage
        } = this.props;
        const {
            isScrolled,
            isDrawerOpen
        } = this.state;
        return (
            <>
                <Nav
                    className="navbar navbar-dark navbar-expand fixed-top"
                    isScrolled={isScrolled}>
                    <Link href="/" >
                        <a className="navbar-brand">
                            <Icon name="gavel" size={30} />
                            <Header
                                color={styles.color.background}
                                isInline={true}>
                                Lex O
                            </Header>
                        </a>
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        onClick={this.onToggleDrawer}>
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse"
                        style={{
                            // Possible bug avoided: if I display none and then turn the device in landscape,
                            // Bootstrap rule !important takes over, therefore the display in landscape always occurs 
                            // whether or not the style attribute is applied
                            display: isDrawerOpen === true ?
                                'block' :
                                'none'
                        }}>
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <Link
                                    href="/lois">
                                    <a
                                        className={`nav-link ${activePage === 'laws' ? 'active' : ''}`}>
                                        <Body
                                            style={{
                                                color: 'inherit',
                                                paddingTop: 10
                                            }}>
                                            Lois
                                        </Body>
                                    </a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    href="/deputes">
                                    <a
                                        className={`nav-link ${activePage === 'deputies' ? 'active' : ''}`}>
                                        <Body
                                            style={{
                                                color: 'inherit',
                                                paddingTop: 10
                                            }}>
                                            Deputés
                                        </Body>
                                    </a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    href="/a-propos">
                                    <a
                                        className={`nav-link ${activePage === 'about' ? 'active' : ''}`}>
                                        <Body
                                            style={{
                                                color: 'inherit',
                                                paddingTop: 10
                                            }}>
                                            A propos
                                        </Body>
                                    </a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </Nav>
                <div className="nav-flag"></div>
            </>
        );
    }
}

export default Navigation;