import React from 'react';
import styled from 'styled-components';
import ListItem from './ListItem';
import { Link } from '@reach/router';

import { $inactiveGray } from 'styleVariables';

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
  width: 250px;
  margin: 20px auto 0 auto;
  height: 70px;
  font-size: 1.2rem;  
`;

const PageButton = styled(Link)`
  font-size: inherit;
  background: #fff;
  border: ${props => props.active ? '1px solid #000' : `1px solid ${$inactiveGray}`};
  width: 80px;
  cursor: ${props => props.active ? 'pointer' : 'default'};
  color: ${props => props.active ? '#000' : $inactiveGray};
  text-align: center;
  text-decoration: none;
  height: 30px;
`;

export default ({
  spaces,
  nextPage,
  previousPage,
  currentPage,
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
      <PageButton 
        active={previousPage !== '/'}
        to={`/${previousPage}`}>&lt; last
      </PageButton>
      <div>{currentPage}</div>
      <PageButton 
        active={nextPage !== '/'}
        to={`/${nextPage}`}>next &gt;
      </PageButton>
    </Pagination>
  </Wrapper>
);
