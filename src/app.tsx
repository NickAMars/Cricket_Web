import React from 'react';
import { Header } from './sections/header';
import { Body } from './sections/body';
import { Footer } from './sections/footer';
import { MainLayout } from './app.style';


export const App: React.FC<{}> = (props) => {
  return (
    <MainLayout>
      <Header />
      <Body/>
      <Footer />
    </MainLayout>
  );
}