import React, { useState } from 'react';
import { BrowseContainer, SelectProfileContainer } from '../containers';
import { useContent } from '../hooks';
import { selectionMap } from '../utils';

export function Browse() {
  const { series } = useContent('series');
  const { films } = useContent('films');
  const [profileId, setProfileId] = useState(null);
  const [selection, setSelection] = useState('series');
  const slideData = selectionMap({ series, films });

  return profileId ? (
    <BrowseContainer selection={selection} setSelection={setSelection} slides={slideData[selection]} />
  ) : (
    <SelectProfileContainer setProfileId={setProfileId} />
  );
}
