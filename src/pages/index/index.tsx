import React, { Fragment } from 'react';
import { usePrefetch } from '@piajs/hooks';
import { Header } from '@common/components/Header';
import TaskTable from '@common/components/TaskTable';
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
      <p className="worker">上次修改时间：{data.desc}</p>
      <TaskTable />
    </Fragment>
  );
};

export default App;
