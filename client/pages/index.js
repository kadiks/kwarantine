import React from 'react';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import Config from '../src/Config';

import { Header, Body } from '../src/components/core/text';
import {
  ButtonGroup,
  Basic as Button,
  Link as ButtonLink,
} from '../src/components/core/button';
import { NavBar, Footer } from '../src/components/navigation';
import { Countdown } from '../src/components/core/loader';
import BrandName from '../src/components/BrandName';

import Logger from '../src/utils/Logger';

import styles from '../src/utils/styles';
import Icon from '../src/components/core/Icon';

class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      stats: {}
    };
  }

  async componentDidMount() {

    Logger.info('info', {
      message: 'log info 123',
      socketId: 'abc',
      matchId: 'def'
    });

    Logger.track({
      message: 'log info 123',
      socketId: 'abc',
      matchId: 'def'
    });

    Logger.warn('warn', {
      message: 'log warn 123',
      socketId: 'abc',
      matchId: 'def'
    });
    const url = `${Config.API_URL}${Config.API_ENDPOINT}/stats`;
    const res = await fetch(url);
    const stats = await res.json();
    this.setState({
      stats
    });
  }


  render() {
    const { stats = {}} = this.state;
    return (
      <div className="container">
        <div className="row">
          <div className="col-12 text-center mt-3 mb-3">
            <div
              className="logo"
              onClick={() => {
                const audio = new Audio('/sounds/laugh.mp3');
                audio.play();
              }}
            >
              <img className="img-fluid" src="/img/logo.png" />
            </div>
            <BrandName />
          </div>
          <div className="col-12 text-center">
            <Body>
              Vous êtes infecté(e). Vous devez vous mettre en quarantaine avec
              d'autres personnes malades pour que vous ne contaminiez pas la
              population saine.
            </Body>
            <ButtonLink href="/match">Se confiner</ButtonLink>
          </div>
        </div>
        <Footer stats={stats} />
      </div>
    );
  }
}

export default Home;