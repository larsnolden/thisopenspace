import React from 'react';
import styled from 'styled-components';
import Card from 'elements/Card';

const Image = styled.img`
  max-width: 100%;
`;

const Details = styled.div`
  padding: 16px;
`;

const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  max-width: 80%;
  margin-top: 20px;
`;

const Title = styled.div`
  font-size: 1.2rem;
  font-weight: 700;
`;

const Detail = styled.div`
  display: flex;
  flex-direction: row;
  width: 120px;
  justify-content: space-between;
`;

const Label = styled.div `
  font-weight: 800;
`;

export default ({
  imageUrl,
  name,
  address,
  hourly_price,
  daily_price,
  square_footage,
  capacity,
  views_count,
}) => (
  <Card>
    <Image src={imageUrl} />
    <Details>
      <Title>{name}</Title>
      at {address}
      <FlexRow>
        <FlexColumn>  
          <Detail>  
            <Label>SQFT: </Label> 
            {square_footage}
          </Detail>      
          <Detail>
            <Label>Capacity: </Label>
            {capacity}
          </Detail>
          <Detail>
            <Label>Views: </Label>
            {views_count}
          </Detail>
        </FlexColumn>
        <FlexColumn>
            <Label>Price </Label>
            <Detail>
              <Label>Hourly: </Label> 
              {hourly_price ? `${hourly_price} $` : 'NA'}
            </Detail>
            <Detail>
              <Label>Daily: </Label> 
              {daily_price ? `${daily_price} $` : 'NA'}
            </Detail>
        </FlexColumn>
      </FlexRow>
    </Details>
  </Card>
);
