import React, { Fragment } from 'react';
import { usePrefetch } from '@piajs/hooks';
import { Header } from '@common/components/Header';
import { SectionList } from '@common/components/SectionList';
import './index.scss';
import type Prefetch from './prefetch';

type PrefetchData = PromiseValue<ReturnType<typeof Prefetch>>;
type PromiseValue<T> = T extends Promise<infer U> ? U : never;

const App = () => {
  const { data } = usePrefetch<PrefetchData>({
    defaultValue: { desc: '默认兜底数据' },
  });
  return (
    <Fragment>
      <Header />
      <p className="worker">PIA Worker 功能演示：{data.desc}</p>
      <SectionList />
    </Fragment>
  );
};

export default App;
