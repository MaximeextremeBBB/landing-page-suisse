import styled from 'styled-components';

const Section = styled.section`
  padding: 100px 20px;
  background: #f8fafc; /* Gris très clair pour contraster avec le blanc */
  display: flex;
  justify-content: center;
`;

const CaseStudyContainer = styled.div`
  max-width: 900px;
  background: white;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.05);
  overflow: hidden;
  border-top: 6px solid #ffd700; /* Le rappel doré premium */
`;

const Header = styled.div`
  background: #1a365d;
  color: white;
  padding: 30px;
  text-align: center;
  
  h2 { margin: 0; font-size: 2rem; color: #ffd700; }
  p { margin: 10px 0 0; font-size: 1.1rem; opacity: 0.9; }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
  padding: 40px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr; /* S'empile sur mobile */
  }
`;

const Step = styled.div`
  text-align: center;
  
  h3 { color: #1a365d; margin-bottom: 15px; font-size: 1.3rem; }
  p { color: #4a5568; line-height: 1.6; font-size: 0.95rem; }
  .icon { font-size: 2.5rem; margin-bottom: 10px; }
`;

function Storytelling() {
  return (
    <Section id="etude-de-cas">
      <CaseStudyContainer>
        <Header>
          <h2>Étude de cas : La méthode en action</h2>
          <p>De l'angoisse des maths à la mention Très Bien (L'histoire de Thomas*)</p>
        </Header>
        
        <Grid>
          <Step>
            <div className="icon">🌧️</div>
            <h3>L'Avant : Le Blocage</h3>
            <p>Thomas était bloqué autour de 3/6 en mathématiques lors de sa dernière année au gymnase. Malgré des heures de travail, il paniquait devant ses évaluations. À l'approche des examens de maturité, la pression montait et créait de fortes tensions à la maison.</p>
          </Step>
          
          <Step>
            <div className="icon">⚙️</div>
            <h3>Le Déclic : La Méthode</h3>
            <p>Fini l'apprentissage par cœur. Via notre espace de travail interactif, je lui ai appris à "décortiquer" un problème comme un ingénieur. On a structuré ses brouillons et optimisé son temps.</p>
          </Step>
          
          <Step>
            <div className="icon">☀️</div>
            <h3>L'Après : Le Succès</h3>
            <p>En 3 mois, Thomas est passé à 4/6 en mathématiques. Il a obtenu 4/6 à la maturité suisse. Il a retrouvé confiance en lui, et surtout, la sérénité est revenue dans la famille.</p>
          </Step>
        </Grid>
        <div style={{textAlign: 'center', paddingBottom: '20px', fontSize: '0.8rem', color: '#a0aec0'}}>
          *Le prénom a été modifié par souci de confidentialité.
        </div>
      </CaseStudyContainer>
    </Section>
  );
}

export default Storytelling;