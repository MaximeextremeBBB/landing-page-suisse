import styled from 'styled-components';

const Section = styled.section`
  padding: 100px 20px;
  background: #ffffff;
  text-align: center;
`;

const StepsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  max-width: 1000px;
  margin: 50px auto 0;
`;

const StepCard = styled.div`
  background: #f8fafc;
  padding: 30px 20px;
  border-radius: 15px;
  border-top: 5px solid #3182ce;
  box-shadow: 0 4px 15px rgba(0,0,0,0.05);
  transition: transform 0.3s;

  &:hover { transform: translateY(-10px); }
  
  h3 { color: #1a365d; margin: 15px 0; }
  p { color: #4a5568; line-height: 1.6; }
`;

const Icon = styled.div`
  font-size: 3rem;
`;

function RoadMap() {
  return (
    <Section id="accompagnement">
      <h2 style={{fontSize: '2.5rem', color: '#1a365d'}}>
        Comment se déroule l'accompagnement ?
      </h2>

      <p style={{color: '#718096', fontSize: '1.2rem'}}>
        Une méthode simple pour identifier les difficultés et progresser étape par étape.
      </p>

      <StepsGrid>

        <StepCard>
          <Icon>🔎</Icon>
          <h3>1. Bilan initial</h3>
          <p>
            Nous échangeons sur les difficultés de l'élève, ses résultats,
            son programme et ses objectifs. Ses contrôles et ses exercices
            permettent d'identifier les points prioritaires.
          </p>
        </StepCard>

        <StepCard>
          <Icon>🎯</Icon>
          <h3>2. Plan de progression</h3>
          <p>
            Je construis un accompagnement adapté : reprise des bases,
            compréhension du cours, méthode de résolution et préparation
            des prochaines évaluations.
          </p>
        </StepCard>

        <StepCard>
          <Icon>📈</Icon>
          <h3>3. Cours & suivi régulier</h3>
          <p>
            Les séances permettent de mesurer les progrès, de corriger les
            difficultés qui persistent et d'adapter progressivement le travail.
          </p>
        </StepCard>

      </StepsGrid>
    </Section>
  );
}

export default RoadMap;