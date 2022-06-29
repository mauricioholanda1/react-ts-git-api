
import React, { PropsWithChildren } from 'react';
import GlobalStyles from '../../styles/GlobalStyles';
import Footer from './Footer';
import Header from './Header';
import { Body, Container } from './style';


export const Template = ({ children }: PropsWithChildren<unknown>): JSX.Element => {
  return (
    <>
      <GlobalStyles />
      <Container>
        <Header />
        <Body>
          {children}
        </Body>
        <Footer />
      </Container>
    </>
  );
};

