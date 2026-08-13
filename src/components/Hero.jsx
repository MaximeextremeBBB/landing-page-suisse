import styled from 'styled-components';

const HeroSection = styled.section`
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 30px 20px 60px;
  background: radial-gradient(circle at 50% 0%, #1e40af 0%, #0f172a 70%, #020617 100%);
  color: white;
`;

const MainAvatar = styled.div`
  width: 200px;
  height: 200px;
  margin: 0 auto 15px;
  border-radius: 50%;
  overflow: hidden;
  border: 4px solid #ffd700;
  box-shadow: 0 10px 30px rgba(0,0,0,0.5);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 768px) { 
    width: 130px; 
    height: 130px;
  }
`;

const SurTitle = styled.div`
  color: #38bdf8; 
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 0.85rem;
  margin-bottom: 20px;
  background: rgba(56, 189, 248, 0.1);
  padding: 10px 20px;
  border-radius: 50px;
  border: 1px solid rgba(56, 189, 248, 0.3);
  display: inline-block;

  @media (max-width: 768px) {
    font-size: 0.75rem;
    padding: 8px 15px;
    margin-bottom: 10px;
  }
`;

const Title = styled.h1`
  font-size: 3.2rem; 
  line-height: 1.2;
  color: #ffd700;
  margin-bottom: 15px;
  text-shadow: 0 4px 10px rgba(0,0,0,0.5);

  @media (max-width: 768px) { 
    margin-bottom: 10px; 
    line-height: 1.1; 
    font-size: 1.8rem; 
  }
    
`;

const SubTitle = styled.p`
  font-size: 1.3rem;
  color: #e2e8f0;
  max-width: 800px;
  margin: 0 auto 35px;
  line-height: 1.5;
  font-weight: 300;

  @media (max-width: 768px) {
    font-size: 1.1rem;
    padding: 0 10px;
  }
`;

const CheckList = styled.div`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  padding: 30px 40px;
  border-radius: 15px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  display: inline-block;
  text-align: left;
  margin: 10px 0 30px;
  font-size: 1.15rem;
  line-height: 1.7;
  max-width: 850px;

  p { margin-bottom: 15px; }
  p:last-child { margin-bottom: 0; }
  strong { color: #ffd700; } 
  strong {
    display: block; /* 🚨 La magie est ici : ça force le texte d'après à passer à la ligne */
    color: #ffd700;
    font-size: 1.75rem; /* Le titre du point est encore plus gros */
    display: block; /* Met le titre sur sa propre ligne pour l'impact */
    margin-bottom: 4px;
  }
    

  @media (max-width: 768px) { 
    font-size: 0.95rem; 
    padding: 20px; 
  }
`;


const CTAContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
`;

// NOUVEAU BOUTON : Gold Premium pour clients UHNWI
const CTAButton = styled.a`
  background: linear-gradient(135deg, #d4af37 0%, #aa7700 100%);
  color: #020617; 
  padding: 20px 40px;
  border-radius: 50px;
  font-weight: 800;
  font-size: 1.2rem;
  letter-spacing: 0.5px;
  text-decoration: none;
  box-shadow: 0 10px 20px rgba(212, 175, 55, 0.2);
  transition: all 0.3s ease;
  border: 1px solid #fef08a; 
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  &:hover { 
    transform: translateY(-5px);
    box-shadow: 0 15px 25px rgba(212, 175, 55, 0.4);
    background: linear-gradient(135deg, #aa7700 0%, #d4af37 100%);
  }

  @media (max-width: 768px) {
    padding: 15px 30px;
    font-size: 1.05rem;
  }
`;

const MicroCopy = styled.p`
  font-size: 0.85rem;
  color: #94a3b8;
  margin-top: 12px;
  display: flex;
  align-items: center;
  gap: 8px;

  &::before {
    content: '🔒';
    font-size: 0.9rem;
  }
`;

// L'alerte statutaire (au lieu du rouge agressif)
const AlertBanner = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(212, 175, 55, 0.5); 
  color: #e2e8f0;
  padding: 10px 20px;
  border-radius: 50px;
  margin-bottom: 20px; 
  font-size: 0.95rem;
  letter-spacing: 0.5px;
  
  strong { color: #ffd700; }
`;

const VideoContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 350px; /* Beaucoup plus élégant pour une vidéo verticale */
  margin: 40px auto 0;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0,0,0,0.6);
  border: 4px solid rgba(255, 255, 255, 0.1);
  aspect-ratio: 9 / 16; /* Le format magique pour les vidéos iPhone ! */

  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

function Hero() {
  return (
    <HeroSection id="methode">

      <MainAvatar>
        <img
          src="/Big-photo-améliorée.jpg"
          alt="Maxime - professeur particulier de mathématiques"
        />
      </MainAvatar>

      <SurTitle>
        Cours particuliers de mathématiques en Suisse romande • 100 % en ligne
      </SurTitle>

      <Title>
        Aider votre enfant à reprendre confiance et progresser durablement en mathématiques
      </Title>

      <CheckList>
        <p>
          <strong>✅ Identifier précisément les lacunes</strong>
          Nous partons de ses contrôles, de ses exercices et de son cours pour comprendre
          ce qui bloque réellement et éviter de travailler au hasard.
        </p>

        <p>
          <strong>✅ Construire une progression adaptée à son niveau</strong>
          Chaque séance est adaptée aux besoins de l'élève : consolidation des bases,
          compréhension du cours, méthode et préparation des évaluations.
        </p>

        <p>
          <strong>✅ Un suivi clair et régulier</strong>
          L'objectif n'est pas seulement de réussir le prochain test, mais de rendre
          progressivement l'élève plus autonome et plus à l'aise face aux mathématiques.
        </p>
      </CheckList>

      <SubTitle>
        <strong>
          Accompagnement du secondaire au gymnase et jusqu'à la maturité,
          ainsi que pour les élèves suivant le programme français en Suisse.
        </strong>
        <br /><br />
        Ingénieur de formation et ancien élève de classes préparatoires
        Math Sup / Math Spé, j'accompagne les élèves avec une méthode
        structurée, progressive et adaptée aux exigences de leur établissement.
      </SubTitle>

      <CTAContainer>
        <AlertBanner>
          <strong>Suivi individuel :</strong> le nombre d'élèves accompagnés
          est volontairement limité.
        </AlertBanner>

        <CTAButton
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
          📱 Faire le point sur les besoins de mon enfant
        </CTAButton>

        <MicroCopy>
          Échange direct sur WhatsApp, sans engagement.
        </MicroCopy>
      </CTAContainer>

      <VideoContainer>
        <video
          src="/Presentation-Maxime.mp4"
          controls
          playsInline
          poster="/Photo-Pour-Video.png"
        />
      </VideoContainer>

    </HeroSection>
  );
}

export default Hero;