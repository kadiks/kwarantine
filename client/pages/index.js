import React from 'react';
import Link from 'next/link';
import { Header, Body } from '../src/components/core/text';
import {
  ButtonGroup,
  Basic as Button,
  Link as ButtonLink,
} from '../src/components/core/button';
import { NavBar, Footer } from '../src/components/navigation';
import { Countdown } from '../src/components/core/loader';
import BrandName from '../src/components/BrandName';

import styles from '../src/utils/styles';
import Icon from '../src/components/core/Icon';

export default function Home() {
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
    </div>
  );
}
