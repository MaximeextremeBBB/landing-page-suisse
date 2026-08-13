import styled from 'styled-components';

const Section = styled.section`
  padding: 100px 20px;
  background: #1a365d;
  color: white;
  display: flex;
  justify-content: center;
`;

const ContentBox = styled.div`
  max-width: 900px;
  text-align: left;
  background: rgba(255, 255, 255, 0.05);
  padding: 50px;
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 15px 35px rgba(0,0,0,0.2);

  h2 { 
    font-size: 2.3rem; 
    margin-bottom: 40px; 
    color: #ffd700; 
    text-align: center;
    line-height: 1.3;
  }
  
  ul { list-style: none; padding: 0; }
  li { 
    font-size: 1.15rem; 
    margin-bottom: 35px; 
    display: flex; 
    align-items: flex-start; 
    gap: 20px; 
    line-height: 1.7;
  }

  /* Couleurs pour faire ressortir les concepts clés */
  strong { 
    color: #38bdf8; 
    display: block; 
    font-size: 1.3rem; 
    margin-bottom: 5px; 
  }

  .icon {
    font-size: 2.5rem;
    min-width: 50px;
    text-align: center;
  }

  @media (max-width: 768px) {
    padding: 30px 20px;
    
    h2 { font-size: 1.8rem; }
    li { font-size: 1rem; flex-direction: column; gap: 10px; }
    strong { font-size: 1.15rem; }
    .icon { font-size: 2rem; }
  }
`;

function Visio() {
  return (
    <Section id="visio">
      <ContentBox>

        <h2>Pourquoi les cours en ligne fonctionnent-ils si bien en mathématiques ?</h2>

        <ul>

          <li>
            <div className="icon">🖥️</div>
            <div>
              <strong>Un véritable tableau de travail interactif</strong>
              L'élève et moi travaillons ensemble sur les exercices,
              les raisonnements et les corrections comme sur un tableau classique,
              tout en conservant les supports utilisés pendant la séance.
            </div>
          </li>

          <li>
            <div className="icon">📚</div>
            <div>
              <strong>Les documents de son établissement au centre du cours</strong>
              Contrôles, feuilles d'exercices, devoirs et supports de cours peuvent
              être partagés directement afin de travailler au plus près des attentes
              de son établissement.
            </div>
          </li>

          <li>
            <div className="icon">📈</div>
            <div>
              <strong>Un suivi régulier de la progression</strong>
              Les difficultés rencontrées sont identifiées au fil des séances,
              ce qui permet d'adapter le travail et de mesurer les progrès réalisés.
            </div>
          </li>

        </ul>
      </ContentBox>
    </Section>
  );
}

export default Visio;