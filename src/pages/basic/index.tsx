import React from 'react';
import { Header } from '@common/components/Header';
import { SectionList } from '@common/components/SectionList';
import './index.scss';

const App = (props: { desc?: string }) => {
  return (
    <>
      <Header />
      <h1>Basic Page with SSR</h1>
      <p className="worker">PIA Worker's return value: {props.desc}</p>
      <SectionList />
    </>
  );
};

export default App;
