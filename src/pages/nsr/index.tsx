import React from 'react';
import { Header } from '@common/components/Header';
import '../index/index.scss';

type Props = {
  title: string;
  desc: { text: string };
};

const App = ({ title, desc }: Props) => {
  return (
    <>
      <Header />
      <h1>{title}</h1>
      <p style={{ color: 'rgba(60, 60, 60, 0.7)', textAlign: 'center' }}>
        {desc?.text}
      </p>
    </>
  );
};

export default App;
