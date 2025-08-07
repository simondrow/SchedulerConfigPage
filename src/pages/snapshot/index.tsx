import React, { useState, useEffect } from 'react';
import { prefetch } from '@piajs/kit';
import { useSnapshot, getSnapshotData, SnapshotHidden } from '@piajs/snapshot';
import { Header } from '@common/components/Header';
import './index.scss';

const App = () => {
  const { saveSnapshot } = useSnapshot();
  const [data, setData] = useState<{ info?: string }>(getSnapshotData() || {});
  const [saveSuccess, setSaveSuccess] = useState(false);

  useEffect(() => {
    prefetch().then((res) => {
      setData(res.data);
    });
  }, []);

  useEffect(() => {
    if (data.info) {
      saveSnapshot({
        query: [],
        data,
      }).then(() => {
        setSaveSuccess(true);
      });
    }
  }, [data, saveSnapshot]);

  return (
    <>
      <Header />
      <p className="data">{data.info}</p>
      <SnapshotHidden>
        {saveSuccess && (
          <p className="saved text">Save snapshot successfully</p>
        )}
      </SnapshotHidden>
      <SnapshotHidden>
        <p className="text">Snapshot hydration is complete</p>
      </SnapshotHidden>
    </>
  );
};

export default App;
