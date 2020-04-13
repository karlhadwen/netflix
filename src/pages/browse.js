import React, { useState } from 'react';
import { BrowseContainer, SelectProfileContainer } from '../containers';
import { useFilms, useSeries } from '../hooks';
import { selectionMap } from '../utils';

export function Browse() {
  const { series } = useSeries();
  const { films } = useFilms();
  const [profileId, setProfileId] = useState(null);
  const [selection, setSelection] = useState('series');
  const slideData = selectionMap({ series, films });

  return profileId ? (
    <BrowseContainer selection={selection} setSelection={setSelection} slides={slideData[selection]} />
  ) : (
    <SelectProfileContainer setProfileId={setProfileId} />
  );
}
