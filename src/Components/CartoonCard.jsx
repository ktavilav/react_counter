import React, { useState } from 'react';
import styled from '@emotion/styled';

const CardContainer = styled.div`
  border: 1px solid #ddd;
  padding: 16px;
  margin: 16px;
`;

const SocialContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 10px;
`;

const SocialButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Button = styled.button`
  margin: 5px;
  padding: 8px 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const Counter = styled.p`
  margin: 5px;
`;

const CartoonCard = ({ title, description, image }) => {
  const [facebookVisits, setFacebookVisits] = useState(0);
  const [youtubeVisits, setYoutubeVisits] = useState(0);
  const [instagramVisits, setInstagramVisits] = useState(0);

  const handleVisit = (socialMedia) => {
    switch (socialMedia) {
      case 'facebook':
        setFacebookVisits(facebookVisits + 1);
        break;
      case 'youtube':
        setYoutubeVisits(youtubeVisits + 1);
        break;
      case 'instagram':
        setInstagramVisits(instagramVisits + 1);
        break;
      default:
        break;
    }
  };

  const handleSubtractVisit = (socialMedia) => {
    switch (socialMedia) {
      case 'facebook':
        setFacebookVisits(facebookVisits - 1 >= 0 ? facebookVisits - 1 : 0);
        break;
      case 'youtube':
        setYoutubeVisits(youtubeVisits - 1 >= 0 ? youtubeVisits - 1 : 0);
        break;
      case 'instagram':
        setInstagramVisits(instagramVisits - 1 >= 0 ? instagramVisits - 1 : 0);
        break;
      default:
        break;
    }
  };

  return (
    <CardContainer>
      <h2>{title}</h2>
      <p>{description}</p>
      <img src={image} alt={title} style={{ width: '90%' }} />
      <SocialContainer>
        <SocialButtonContainer>
          <Button onClick={() => handleVisit('facebook')}>Facebook</Button>
          <Button onClick={() => handleSubtractVisit('facebook')}>Restar Facebook</Button>
          <Counter>Visitas Facebook: {facebookVisits}</Counter>
        </SocialButtonContainer>
        <SocialButtonContainer>
          <Button onClick={() => handleVisit('youtube')}>YouTube</Button>
          <Button onClick={() => handleSubtractVisit('youtube')}>Restar YouTube</Button>
          <Counter>Visitas YouTube: {youtubeVisits}</Counter>
        </SocialButtonContainer>
        <SocialButtonContainer>
          <Button onClick={() => handleVisit('instagram')}>Instagram</Button>
          <Button onClick={() => handleSubtractVisit('instagram')}>Restar Instagram</Button>
          <Counter>Visitas Instagram: {instagramVisits}</Counter>
        </SocialButtonContainer>
      </SocialContainer>
    </CardContainer>
  );
};

export default CartoonCard;




