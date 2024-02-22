import React, { useState } from 'react';
import styled from '@emotion/styled';
import CartoonCard from './Components/CartoonCard';

const Container = styled.div`
  width: 100%;
  max-width: 90%;
  margin: 0 auto;
  padding: 20px;
  margin-left: auto;
  margin-right: auto;
`;

const TabsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
`;

const TabButton = styled.button`
  background-color: ${(props) => (props.isActive ? '#0056b3' : '#007bff')};
  color: #fff;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const CartoonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;

const App = () => {
  const [activeTab, setActiveTab] = useState('rickAndMorty');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <Container>
      <h1>Las mejores series de animación de todos los tiempos, según los espectadores en sus redes sociales</h1>

      <TabsContainer>
        <TabButton onClick={() => handleTabClick('rickAndMorty')} className={activeTab === 'rickAndMorty' && 'active'}>
          Rick y Morty
        </TabButton>
        <TabButton onClick={() => handleTabClick('simpsons')} className={activeTab === 'simpsons' && 'active'}>
          Los Simpson
        </TabButton>
        <TabButton onClick={() => handleTabClick('southPark')} className={activeTab === 'southPark' && 'active'}>
          South Park
        </TabButton>
      </TabsContainer>

      <CartoonContainer className='container-cartoon'>
        {activeTab === 'rickAndMorty' && (
          <CartoonCard
            title="Rick y Morty"
            description="Combinando el humor negro, la sátira y los mejores elementos de la ciencia ficción con una profunda crítica social, Rick y Morty no se queda atrás con respecto a otras series en apariencia más serias e importantes a la hora de proponernos otras maneras de reflexionar."
            image="https://media.gq.com/photos/6577b95756b753fcf473be4b/16:9/w_2240,c_limit/AS_RAM_709_RickfendingYourMort-10.png"
          />
        )}
        {activeTab === 'simpsons' && (
          <CartoonCard
            title="Los Simpson"
            description="Narra la historia de una peculiar familia y otros divertidos personajes de la localidad estadounidense de Springfield. Allí conocemos a Homer, Marge, Bart, Maggie y Lisa Simpson, entre otros."
            image="https://phantom-marca-mx.unidadeditorial.es/ffeff3ef853e9423d49ea385b2b5984b/resize/828/f/jpg/mx/assets/multimedia/imagenes/2023/04/20/16819466901183.jpg"
          />
        )}
        {activeTab === 'southPark' && (
          <CartoonCard
            title="South Park"
            description="Cargada hasta arriba de mucho humor negro -que se utiliza para reírse de temas serios e incluso sensibles para los espectadores más sensibles-, la serie narra las aventuras de cuatro chicos muy gamberros que viven en la peculiar ciudad de South Park, Colorado. Puede que no sea una serie para todos los públicos, pero una vez entras dentro, puede que no quieras desprenderte jamás de estos personajes."
            image="https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2022/08/12/16603249975433.jpg"
          />
        )}
      </CartoonContainer>
    </Container>
  );
};

export default App;
