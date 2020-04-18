import Link from 'next/link';

import { NavBar, Footer } from '../src/components/navigation';
import { Body, Header } from '../src/components/core/text';

import styles from '../src/utils/styles';

function Error({ statusCode }) {
  return (
    <>
      <NavBar />
      <div
        className="container-fluid"
        style={{
          paddingTop: styles.size.toolbar,
        }}
      >
        <div className="row">
          <div className="col-12 text-center mb-5 mt-5">
            <Header>Désolé, une erreur s'est produite</Header>
          </div>
        </div>
        <div className="col-12">
          <Body>
            {statusCode
              ? `Erreur serveur : ${statusCode}`
              : 'Erreur du côté du navigateur'}
          </Body>
        </div>
        <div className="col-12">
          <Body>
            Revenir à la&nbsp;
            <Link href="/">
              <a>page d'accueil</a>
            </Link>
          </Body>
        </div>

        <Footer />
      </div>
    </>
  );
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
