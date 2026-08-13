import styled from 'styled-components';

const Section = styled.section`
  padding: 100px 20px;
  background-color: #f8fafc;
  text-align: center;
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  color: #1a365d;
  margin-bottom: 20px;

  span {
    color: #d4af37;
  }
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: #475569;
  max-width: 700px;
  margin: 0 auto 60px;
`;

const GalleryGrid = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  flex-wrap: wrap;
  margin-top: 40px;
`;

const TestimonialCard = styled.div`
  background: white;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0,0,0,0.05);
  border: 1px solid #e2e8f0;
  width: 100%;
  max-width: 380px;
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 50px rgba(26, 54, 93, 0.1);
  }
`;

const CardContent = styled.div`
  padding: 25px 20px;
  text-align: left;
`;

const StudentName = styled.h4`
  font-size: 1.3rem;
  color: #1a365d;
  margin: 0 0 5px 0;
`;

const StudentContext = styled.p`
  font-size: 1rem;
  color: #d4af37;
  font-weight: 700;
  margin: 0 0 15px 0;
`;

const ScreenshotContainer = styled.div`
  width: 100%;
  background-color: #efeae2; /* Couleur de fond classique WhatsApp */
  padding-bottom: 10px;
`;

const Screenshot = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;

const UrgencyBox = styled.div`
  margin-top: 80px;
  padding: 40px 30px;
  background-color: #ffffff;
  border-radius: 15px;
  box-shadow: 0 15px 40px rgba(212, 175, 55, 0.15);
  border: 2px solid #d4af37; /* Bordure dorée pour attirer l'oeil */
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`;

const UrgencyTitle = styled.h3`
  font-size: 1.6rem;
  color: #1a365d;
  margin-bottom: 15px;
`;

const UrgencyText = styled.p`
  font-size: 1.1rem;
  color: #475569;
  line-height: 1.6;
  margin-bottom: 30px;

  strong {
    color: #e53e3e; /* Rouge pour appuyer sur le mot 'pire erreur' */
  }
`;


const ActionButton = styled.a`
  display: inline-block;
  background: linear-gradient(135deg, #d4af37 0%, #aa7700 100%);
  color: #020617; /* Bleu très sombre, presque noir, pour un contraste chic */
  font-weight: bold;
  font-size: 1.2rem;
  padding: 15px 40px;
  border-radius: 50px;
  text-decoration: none;
  margin-top: 10px;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 10px 20px rgba(212, 175, 55, 0.4);
  }
`;

const testimonialsData = [
  {
    id: 1,
    name: 'Valentine',
    context: 'Programme français - Terminale Spé Maths - de 12 à 18/20',
    image: '/Valentine-testimonial.png'
  },
  {
    id: 2,
    name: 'Patricia (Maman de Baptiste)',
    context: 'Retour d\'une maman après l\'accompagnement de son fils',
    image: '/Madame-Gualbert-Testimonials.jpg' 
  },
  //  {
  //   id: 3,
  //   name: 'Gaëtan Élève accompagné pour le Grand Oral',
  //   context: 'Terminal spécialité maths - Réussite du Grand Oral',
  //   image: '/Gaetan-testimonials.png' 
  // },
];



function Testimonials() {
  return (
    <Section id="temoignages">
      <ContentWrapper>
       <Title>
          Ma Plus Grande <span>Fierté Pédagogique</span> : Leur Autonomie
        </Title>
        <Subtitle>
          Les excellentes notes (18/20) ne sont qu'une conséquence. Mon véritable objectif d'ingénieur est qu'ils comprennent profondément ce qu'ils font pour ne plus jamais avoir besoin de moi.
        </Subtitle>

        <GalleryGrid>
          {testimonialsData.map((testimonial) => (
            <TestimonialCard key={testimonial.id}>
              <CardContent>
                <StudentName>{testimonial.name}</StudentName>
                <StudentContext>{testimonial.context}</StudentContext>
              </CardContent>
              <ScreenshotContainer>
                <Screenshot src={testimonial.image} alt={`Témoignage de ${testimonial.name}`} />
              </ScreenshotContainer>
            </TestimonialCard>
          ))}
        </GalleryGrid>
            <UrgencyBox>
              <UrgencyTitle>📈 Si Valentine a pu débloquer son 18/20, votre ado en est tout à fait capable.</UrgencyTitle>
              <UrgencyText>
                À quelques semaines du bac, le plus risqué est de réviser sans stratégie claire. Mieux vaut identifier les priorités maintenant plutôt que tout revoir dans l’urgence.
              </UrgencyText>
              <ActionButton href="https://wa.link/0jyw2o?text=Bonjour%20Maxime%2C%20je%20souhaiterais%20en%20savoir%20plus%20sur%20votre%20accompagnement%20en%20Sp%C3%A9%20Maths%20pour%20mon%20enfant." target="_blank" rel="noopener noreferrer">
                💬 Échanger sur la situation de mon enfant
              </ActionButton>
            </UrgencyBox>
      </ContentWrapper>
    </Section>
  );
}

export default Testimonials;