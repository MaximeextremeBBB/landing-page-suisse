import React from 'react';
import styled from 'styled-components';

// --- STYLED COMPONENTS ---

// Container principal avec fond marine
const AboutContainer = styled.section`
  background-color: #1a2a40; /* Bleu marine de ton site */
  color: #ffffff;
  padding: 4rem 2rem;
  display: flex;
  justify-content: center;
  font-family: 'Arial', sans-serif; /* À adapter avec la police de ton site */
`;

const ContentWrapper = styled.div`
  max-width: 1000px;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`;

const SectionTitle = styled.h2`
  color: #f1c40f; /* Jaune/Doré de ton site */
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 1rem;
`;

const StorytellingParagraph = styled.p`
  font-size: 1.15rem;
  line-height: 1.7;
  color: #e0e0e0;
  margin: 0;

  strong {
    color: #ffffff;
  }
`;

// --- NOUVEAU : CARTES D'AUTORITÉ ---

const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1.5rem;
  margin-top: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Card = styled.div`
  flex: 1;
  background-color: rgba(26, 42, 64, 0.5); /* Marine translucide pour contraste */
  border: 1px solid rgba(241, 196, 15, 0.3); /* Bordure or subtile */
  border-radius: 12px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    border-color: rgba(241, 196, 15, 0.6);
  }
`;

const CardIcon = styled.div`
  font-size: 3rem;
  color: #f1c40f;
  margin-bottom: 1rem;
  /* Optionnel : styliser le sceau doré pour la carte centrale */
`;

const CardTitle = styled.h3`
  font-size: 1.3rem;
  color: #ffffff;
  margin: 0 0 0.8rem 0;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const CardText = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  color: #c0c0c0;
  margin: 0;
`;

const CallToActionParagraph = styled.p`
  font-size: 1.15rem;
  line-height: 1.7;
  color: #e0e0e0;
  text-align: center;
  margin-top: 1.5rem;
  font-style: italic;

  strong {
    color: #f1c40f;
  }
`;

// --- COMPOSANT REACT ---

export default function AboutMe() {
  return (
    <AboutContainer id="about-me">
      <ContentWrapper>

        <SectionTitle>Qui accompagnera votre enfant ?</SectionTitle>

        <StorytellingParagraph>
          J'ai moi-même connu les périodes où l'on travaille beaucoup en mathématiques
          sans obtenir les résultats attendus. C'est précisément ce parcours qui m'a appris
          qu'en maths, <strong>travailler davantage ne suffit pas toujours :
          il faut surtout comprendre comment travailler efficacement.</strong>
        </StorytellingParagraph>

        <StorytellingParagraph>
          Les classes préparatoires aux Grandes Écoles, en Math Sup puis Math Spé,
          m'ont appris la rigueur, le raisonnement et la méthode. Mon parcours
          d'ingénieur m'a ensuite appris à décomposer un problème complexe en étapes
          simples et logiques. C'est cette approche que je transmets aujourd'hui à mes élèves.
        </StorytellingParagraph>

        <CardContainer>

          <Card>
            <CardIcon>🎓</CardIcon>
            <CardTitle>DIPLÔMÉ INGÉNIEUR</CardTitle>
            <CardText>
              Diplômé d'une école d'ingénieurs française accréditée par la
              Commission des Titres d'Ingénieur.
            </CardText>
          </Card>

          <Card>
            <CardIcon>📚</CardIcon>
            <CardTitle>MATH SUP / MATH SPÉ</CardTitle>
            <CardText>
              Issu des classes préparatoires scientifiques aux Grandes Écoles.
            </CardText>
          </Card>

          <Card>
            <CardIcon>🏆</CardIcon>
            <CardTitle>16/20 AU CONCOURS CENTRALE-SUPÉLEC</CardTitle>
            <CardText>
              Note obtenue en mathématiques au concours Centrale-Supélec.
            </CardText>
          </Card>

        </CardContainer>

        <CallToActionParagraph>
          Aujourd'hui, mon objectif est de transmettre une méthode
          <strong> claire, structurée et progressive</strong>,
          adaptée au niveau et aux difficultés de chaque élève.
        </CallToActionParagraph>

      </ContentWrapper>
    </AboutContainer>
  );
}