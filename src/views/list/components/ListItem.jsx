import React from 'react';
import styled from 'styled-components';
import Card from 'elements/Card';

const Image = styled.img``;

const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  font-size: 2rem;
`;

export default ({
  imageUrl,
  name,
  adress,
  hourly_price,
  daily_price,
  square_footage,
  capacity,
  views_count,
}) => (
  <Card>
    <Image src={imageUrl} />
    <FlexColumn>
    <Title>{name}</Title>
    {adress}
    {hourly_price}
    {daily_price}
    {square_footage}
    {capacity}
    {views_count}
    </FlexColumn>
  </Card>
);
