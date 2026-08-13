import styled from 'styled-components';

const PricingSection = styled.section`
  padding: 100px 20px;
  background: #f8fafc; /* Gris très clair pour contraster avec le reste */
  text-align: center;
  color: #1e293b;
`;

const TopText = styled.div`
  max-width: 800px;
  margin: 0 auto 60px; /* J'ai augmenté la marge en bas pour éviter que ça colle aux cartes */
  
  h2 {
    font-size: 2.5rem;
    color: #1a365d;
    margin-bottom: 25px;
  }

  p {
    font-size: 1.15rem;
    line-height: 1.7;
    color: #475569;
  }

  strong {
    color: #1a365d;
  }

  .anchor {
    text-decoration: line-through;
    color: #94a3b8;
    font-weight: bold;
  }
`;

// CSS corrigé pour Pricing.jsx pour séparer le badge du texte
const CardsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: stretch; /* Force les cartes à avoir la même hauteur */
  gap: 40px; /* Big space between cards */
  max-width: 1000px;
  margin: 0 auto;
  flex-wrap: wrap;
  /* CRITICAL: J'ai augmenté cet espace externe pour le badge qui dépasse */
  padding-top: 30px; 
`;

const Card = styled.div`
  background: white;
  border-radius: 20px;
  /* CRITICAL INTERNAL SPACING FIX:
     Ce padding supérieur de 60px interne est indispensable pour que le badge ne 'mange' plus le texte.
     On passe de 40px à 60px d'espace intérieur au-dessus. */
  padding: 60px 30px 40px; 
  width: 100%;
  max-width: 420px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.05);
  border: 1px solid #e2e8f0;
  position: relative;
  display: flex;
  flex-direction: column;
  margin-top: ${props => props.$highlight ? '0' : '20px'};

  ${props => props.$highlight && `
    border: 2px solid #d4af37;
    box-shadow: 0 20px 40px rgba(212, 175, 55, 0.15);
    transform: scale(1.05);
    z-index: 2; /* S'assure que la carte Premium passe au-dessus si ça se chevauche sur petit écran */
    
    @media (max-width: 768px) {
      transform: scale(1);
      /* J'ai augmenté cette marge externe sur mobile pour ne pas écraser la carte du dessus */
      margin-top: 50px; 
    }
  `}
`;

const Badge = styled.div`
  position: absolute;
  top: -15px;
  left: 50%;
  transform: translateX(-50%);
  background: #d4af37;
  color: #020617;
  padding: 8px 20px;
  border-radius: 50px;
  font-weight: bold;
  font-size: 0.9rem;
  box-shadow: 0 4px 10px rgba(212, 175, 55, 0.3);
`;

const Price = styled.div`
  font-size: 3rem;
  font-weight: 900;
  color: #1a365d;
  margin: 20px 0 10px;

  span {
    font-size: 1.2rem;
    font-weight: normal;
    color: #64748b;
  }
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 30px 0;
  text-align: left;
  flex-grow: 1;

  li {
    margin-bottom: 15px;
    font-size: 1.05rem;
    display: flex;
    align-items: flex-start;
    gap: 10px;
    color: #334155;
  }
`;

const CTAButton = styled.a`
  background: ${props => props.$highlight ? 'linear-gradient(135deg, #d4af37 0%, #aa7700 100%)' : '#f1f5f9'};
  color: ${props => props.$highlight ? '#020617' : '#475569'};
  padding: 15px 30px;
  border-radius: 50px;
  font-weight: 800;
  text-decoration: none;
  transition: all 0.3s ease;
  border: ${props => props.$highlight ? 'none' : '1px solid #cbd5e1'};

  &:hover {
    transform: translateY(-3px);
    box-shadow: ${props => props.$highlight ? '0 10px 20px rgba(212, 175, 55, 0.3)' : '0 5px 15px rgba(0,0,0,0.05)'};
  }
`;

const Saving = styled.div`
  color: #16a34a;
  font-weight: bold;
  font-size: 1.1rem;
  margin-top: 5px;
`;

function Pricing() {
  return (
    <PricingSection id="tarifs">
      <TopText>
        <h2>Un investissement transparent, sans surprise.</h2>
        <p>
          À Dubaï, les agences de tutorat traditionnelles facturent souvent entre <span className="anchor">400 et 500 AED</span> l'heure, pour vous envoyer de simples étudiants sans méthode.
          <br /><br />
          Mon approche est différente : je vous propose un tarif juste, packagé, pour un accompagnement d'ingénieur conçu pour obtenir des résultats.
        </p>
      </TopText>

      <CardsContainer>
        {/* Carte 1 : À la carte */}
        <Card>
          <h3 style={{ margin: 0, color: '#64748b' }}>Séance à l'unité</h3>
          <Price>280 AED <span>/ heure</span></Price>
          <FeatureList>
            <li>✅ Bilan des lacunes</li>
            <li>✅ Explications ciblées sur un chapitre</li>
            <li>✅ Accès WhatsApp (limité)</li>
          </FeatureList>
          <CTAButton href="https://wa.link/0jyw2o" target="_blank" rel="noopener noreferrer">
            Réserver une séance
          </CTAButton>
        </Card>

        {/* Carte 2 : Le Forfait (Mis en avant) */}
        <Card $highlight>
          <Badge>Le choix des parents stratégiques</Badge>
          <h3 style={{ margin: 0, color: '#d4af37' }}>Forfait Optimisation 10h</h3>
          <Price>200 AED <span>/ heure</span></Price>
          <Saving>Soit 2 000 AED le forfait (Économisez 800 AED)</Saving>
          <FeatureList>
            <li>🔥 <strong>Le Pacte +4 Points garanti</strong></li>
            <li>🔥 <strong>La rétro-ingénierie du Bac</strong></li>
            <li>🔥 <strong>Bonus exclusif :</strong> Préparation stratégique au Grand Oral de Mathématiques (Simulations et posture).</li>
            <li>🔥 Accès WhatsApp illimité 7j/7</li>
          </FeatureList>
          <CTAButton $highlight href="https://wa.link/0jyw2o" target="_blank" rel="noopener noreferrer">
            Sécuriser ma place (Forfait 10h)
          </CTAButton>
        </Card>
      </CardsContainer>
    </PricingSection>
  );
}

export default Pricing;