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

const Pagination = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 190px;
  margin: 20px auto;
`;

const PageButton = styled.a`
  font-size: 1.2rem;
  background: #fff;
  border: 1px solid #000;
  width: 80px;
  cursor: pointer;
`;

export default ({
  spaces,
  nextPage,
  previousPage,
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
    <Pagination>
      <PageButton>&lt; last</PageButton>
      <PageButton>next &gt;</PageButton>
    </Pagination>     
  </Wrapper>
);
