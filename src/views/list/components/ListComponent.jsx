import React from 'react';
import styled from 'styled-components';
import ListItem from './ListItem';

const Wrapper = styled.div`
`;

export default ({
  spaces
}) => (
  <Wrapper>
    Open Spaces:
    {spaces
      .map(space =>
      <ListItem 
        key={space.id}
        imageUrl={space.primary_photo_css_url_small}
        {...space} 
      />
    )}
  </Wrapper>
);
