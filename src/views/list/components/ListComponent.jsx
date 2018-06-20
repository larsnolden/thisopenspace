import React from 'react';
import styled from 'styled-components';
import ListItem from './ListItem';

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 600px;
`;

const Title = styled.div`
  font-size: 2.5rem;
  margin: 10px 0 20px 0;
  text-align: center;
`;

export default ({
  spaces
}) => (
  <Wrapper>
    <Title>OPEN SPACES</Title>
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
