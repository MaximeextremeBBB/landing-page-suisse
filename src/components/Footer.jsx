import styled from 'styled-components';

const FinalSection = styled.section`
  padding: 100px 20px;
  background: radial-gradient(circle at 50% 100%, #1e40af 0%, #0f172a 70%, #020617 100%);
  color: white;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  color: #ffd700;
  max-width: 800px;
  margin-bottom: 20px;
  line-height: 1.3;
`;

const SubText = styled.p`
  font-size: 1.2rem;
  color: #cbd5e1;
  max-width: 600px;
  margin-bottom: 40px;
`;

const WhatsAppButton = styled.a`
  /* Dégradé Or Premium */
  background: linear-gradient(135deg, #d4af37 0%, #aa7700 100%);
  color: #020617; /* Bleu très sombre, presque noir, pour un contraste chic */
  padding: 20px 40px;
  border-radius: 50px;
  font-weight: 800;
  font-size: 1.2rem;
  letter-spacing: 0.5px;
  text-decoration: none;
  box-shadow: 0 10px 20px rgba(212, 175, 55, 0.2);
  margin-top: 10px;
  transition: all 0.3s ease;
  border: 1px solid #fef08a; 
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  &:hover { 
    transform: translateY(-5px);
    box-shadow: 0 15px 25px rgba(212, 175, 55, 0.4);
    /* Inversion du dégradé au survol pour l'effet dynamique */
    background: linear-gradient(135deg, #aa7700 0%, #d4af37 100%);
  }

  @media (max-width: 768px) {
    padding: 15px 30px;
    font-size: 1.05rem;
  }
`;

function Footer() {
  return (
    <FinalSection>

      <Title>
        Faisons le point sur les besoins de votre enfant en mathématiques.
      </Title>

      <SubText>
        Expliquez-moi sa situation, son niveau et les difficultés qu'il rencontre.
        Nous verrons ensemble quel accompagnement serait le plus adapté.
      </SubText>

      <WhatsAppButton
        href="https://wa.me/33614949242?text=Bonjour%20Maxime%2C%20je%20souhaiterais%20faire%20le%20point%20sur%20les%20besoins%20de%20mon%20enfant%20en%20math%C3%A9matiques."
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => {
          if (typeof window !== "undefined" && window.fbq) {
            window.fbq("track", "Contact");
          }

          if (typeof window !== "undefined" && window.gtag) {
            window.gtag("event", "click_whatsapp", {
              event_category: "lead",
              event_label: "whatsapp_button",
            });
          }
        }}
      >
        <div>
          Faire le point sur WhatsApp
          <span
            style={{
              display: 'block',
              fontSize: '0.85rem',
              fontWeight: 'normal',
              opacity: 0.9
            }}
          >
            Échange direct et sans engagement
          </span>
        </div>
      </WhatsAppButton>

    </FinalSection>
  );
}

export default Footer;