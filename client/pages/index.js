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

import styles from '../src/utils/styles';
import Icon from '../src/components/core/Icon';

export default function Home() {
  return (
    <div className="container">
      <Header>Kwarantine</Header>
      <ButtonLink href="/match">Se confiner</ButtonLink>
    </div>
  );
}
