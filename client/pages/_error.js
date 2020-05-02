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
          <div className="logo">
            <img className="img-fluid" src="/img/logo.png" />
          </div>
          <BrandName />
        </div>
        <div className="col-12 text-center">
          <Body>Désolé, une erreur s'est produite</Body>
          <ButtonLink href="/">Revenir à la page d'accueil</ButtonLink>
        </div>
      </div>
    </div>
  );
}
