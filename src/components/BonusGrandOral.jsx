import styled from 'styled-components';

const BonusContainer = styled.section`
  padding: 80px 20px;
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
  color: white;
  text-align: center;
`;

const ContentWrapper = styled.div`
  max-width: 900px;
  margin: 0 auto;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(212, 175, 55, 0.3);
  border-radius: 20px;
  padding: 50px 40px;
  box-shadow: 0 20px 40px rgba(0,0,0,0.2);
  position: relative;

  @media (max-width: 768px) {
    padding: 40px 20px;
  }
`;

const BadgeTitle = styled.div`
  background: #d4af37;
  color: #020617;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 2px;
  padding: 8px 24px;
  border-radius: 50px;
  display: inline-block;
  font-size: 0.9rem;
  margin-bottom: 25px;
  box-shadow: 0 4px 15px rgba(212, 175, 55, 0.4);
`;

const Title = styled.h2`
  font-size: 2.2rem;
  color: #f8fafc;
  margin-bottom: 20px;

  span {
    color: #38bdf8;
  }

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

const Text = styled.p`
  font-size: 1.15rem;
  line-height: 1.7;
  color: #cbd5e1;
  margin-bottom: 30px;

  strong {
    color: #ffd700;
  }
`;

const TopicsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  text-align: left;
  margin-top: 30px;
`;

const TopicCard = styled.div`
  background: rgba(0, 0, 0, 0.2);
  border-left: 4px solid #38bdf8;
  padding: 20px;
  border-radius: 0 10px 10px 0;

  h4 {
    color: #e2e8f0;
    margin: 0 0 10px 0;
    font-size: 1.05rem;
  }

  p {
    color: #94a3b8;
    font-size: 0.9rem;
    margin: 0;
    line-height: 1.5;
  }
`;

function BonusGrandOral() {
  return (
    <BonusContainer id="grand-oral">
      <ContentWrapper>
        <BadgeTitle>Bonus Exclusif Inclus</BadgeTitle>
        <Title>Le Casse-Tête du <span>Grand Oral</span> Résolu</Title>
        
        <Text>
          Le jury est fatigué d'entendre les mêmes sujets recopiés sur internet. Pour obtenir un 18/20, il faut un sujet <strong>original, structuré et ancré dans le monde réel</strong>. 
          En tant qu'ingénieur, je ne me contente pas de faire réviser des théorèmes à votre enfant : je lui conçois un sujet sur-mesure, ambitieux, mais compréhensible et adapté au niveau Terminale, tout en le rendant accessible.
        </Text>

        <TopicsGrid>
          <TopicCard>
            <h4>❌ L'approche classique</h4>
            <p>Un étudiant proposera un sujet banal vu 100 fois : "Les probabilités dans les jeux de dés." "Le nombre d'or"</p>
            
          </TopicCard>
          <TopicCard>
            <h4>✅ L'approche Ingénieur</h4>
            <p>Je lui ferai modéliser un sujet unique : "Comment les suites mathématiques prédisent-elles la saturation des serveurs de Netflix ?"</p>
          </TopicCard>
        </TopicsGrid>

      </ContentWrapper>
    </BonusContainer>
  );
}

export default BonusGrandOral;