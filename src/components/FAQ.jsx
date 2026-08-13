import { useState } from 'react';
import styled from 'styled-components';

const Section = styled.section`
  padding: 100px 20px;
  background: white;
  text-align: center;
`;

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const FAQItem = styled.div`
  text-align: left;
  background: #f8fafc;
  border-radius: 12px;
  margin-bottom: 15px;
  border-left: 5px solid #d4af37; /* On passe la bordure en Or au lieu de vert fluo */
  box-shadow: 0 4px 6px rgba(0,0,0,0.02);
  overflow: hidden;
  transition: all 0.3s ease;
`;

const FAQQuestion = styled.div`
  padding: 20px 30px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h3 { color: #1a365d; margin: 0; font-size: 1.15rem; font-weight: 600; }
  span { color: #d4af37; font-size: 1.5rem; font-weight: bold; }

  &:hover { background: #f1f5f9; }
`;

const FAQAnswer = styled.div`
  padding: 0 30px 20px;
  color: #4a5568;
  line-height: 1.6;
  font-size: 1rem;
  /* La magie de l'accordéon : on cache si ce n'est pas ouvert */
  display: ${props => (props.$isOpen ? 'block' : 'none')}; 
`;

function FAQ() {
  // Le système qui gère l'ouverture des questions
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    if (openIndex === index) {
      setOpenIndex(null); // Referme si on clique sur celui déjà ouvert
    } else {
      setOpenIndex(index); // Ouvre le nouveau
    }
  };

  // Liste de toutes tes questions, avec l'intégration de la nouvelle "Objection Fantôme"
  const faqs = [
  {
    question: "Mon enfant suit le programme suisse. Pouvez-vous vous adapter à son établissement ?",
    answer: "Oui. Avant les premières séances, je demande les supports utilisés par l'élève : cours, feuilles d'exercices, contrôles et chapitres actuellement étudiés. L'accompagnement est ensuite construit à partir de son programme et des attentes de son établissement."
  },
  {
    question: "Accompagnez-vous les élèves du gymnase et préparant la maturité ?",
    answer: "Oui. J'accompagne les élèves du secondaire jusqu'à la maturité, notamment pour consolider les bases, progresser en analyse et en algèbre, améliorer la méthode et préparer les évaluations. Le contenu exact dépend naturellement du canton, du niveau et du programme suivi."
  },
  {
    question: "Les cours en ligne sont-ils réellement efficaces en mathématiques ?",
    answer: "Oui, à condition qu'ils soient interactifs. Nous travaillons directement sur les exercices et les supports de l'élève grâce à un tableau partagé. Cela permet de raisonner ensemble, corriger les erreurs en direct et conserver les éléments importants de la séance."
  },
  {
    question: "Mon enfant manque de bases. Votre accompagnement est-il adapté ?",
    answer: "Oui. Il n'est pas nécessaire d'avoir déjà un bon niveau. Le premier objectif est justement d'identifier les lacunes qui empêchent l'élève d'avancer, puis de les reprendre progressivement avant d'augmenter la difficulté."
  },
  {
    question: "Accompagnez-vous également les élèves du programme français vivant en Suisse ?",
    answer: "Oui. J'accompagne également les élèves scolarisés dans un établissement suivant le programme français, du collège au lycée. Je peux donc adapter les séances aussi bien au programme suisse qu'au programme français."
  },
];

  return (
    <Section id="faq">
      <Container>
        <h2 style={{ fontSize: '2.5rem', color: '#1a365d', marginBottom: '50px' }}>Questions Fréquentes</h2>
        
        {faqs.map((faq, index) => (
          <FAQItem key={index}>
            <FAQQuestion onClick={() => toggleFAQ(index)}>
              <h3>{faq.question}</h3>
              <span>{openIndex === index ? '−' : '+'}</span>
            </FAQQuestion>
            <FAQAnswer $isOpen={openIndex === index}>
              <p>{faq.answer}</p>
            </FAQAnswer>
          </FAQItem>
        ))}

      </Container>
    </Section>
  );
}

export default FAQ;