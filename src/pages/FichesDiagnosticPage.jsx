import styled from "styled-components";
import { Link } from "react-router-dom";

const Page = styled.main`
  min-height: 100vh;

  background:
    radial-gradient(
      circle at top,
      rgba(212, 175, 55, 0.12),
      transparent 32%
    ),
    #f8fafc;

  padding: 60px 20px 80px;
`;

const Container = styled.div`
  width: 100%;
  max-width: 1050px;
  margin: 0 auto;
`;

const Brand = styled.div`
  text-align: center;

  color: #1a365d;

  font-size: 1rem;
  font-weight: 700;

  margin-bottom: 25px;
`;

const Header = styled.div`
  text-align: center;

  max-width: 760px;

  margin: 0 auto 45px;
`;

const Badge = styled.div`
  display: inline-block;

  background: linear-gradient(
    135deg,
    #f7df8a 0%,
    #d4af37 55%,
    #aa7700 100%
  );

  color: #020617;

  padding: 8px 18px;

  border-radius: 50px;

  font-size: 0.9rem;
  font-weight: 800;

  margin-bottom: 22px;

  box-shadow:
    0 6px 15px rgba(212, 175, 55, 0.25);
`;

const Title = styled.h1`
  margin: 0;

  color: #1a365d;

  font-size: 3.2rem;
  line-height: 1.1;
  font-weight: 900;

  @media (max-width: 768px) {
    font-size: 2.3rem;
  }
`;

const Subtitle = styled.p`
  max-width: 690px;

  margin: 22px auto 0;

  color: #64748b;

  font-size: 1.08rem;
  line-height: 1.7;
`;

const DiagnosticGrid = styled.div`
  display: grid;

  grid-template-columns:
    repeat(2, minmax(0, 1fr));

  gap: 25px;

  margin-top: 40px;

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
  }
`;

const DiagnosticCard = styled.article`
  position: relative;

  background: white;

  border: 1px solid #e2e8f0;
  border-radius: 24px;

  padding: 35px;

  box-shadow:
    0 20px 45px rgba(15, 23, 42, 0.07),
    0 5px 12px rgba(15, 23, 42, 0.03);

  display: flex;
  flex-direction: column;

  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease,
    border-color 0.25s ease;

  &:hover {
    transform: translateY(-5px);

    border-color: rgba(212, 175, 55, 0.75);

    box-shadow:
      0 25px 55px rgba(15, 23, 42, 0.1),
      0 8px 20px rgba(212, 175, 55, 0.12);
  }
`;

const CardTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 15px;

  margin-bottom: 22px;
`;

const Icon = styled.div`
  width: 58px;
  height: 58px;

  border-radius: 18px;

  background: rgba(212, 175, 55, 0.11);

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 1.7rem;
`;

const FreeBadge = styled.span`
  background: #f8fafc;

  border: 1px solid #e2e8f0;

  color: #1a365d;

  padding: 7px 12px;

  border-radius: 50px;

  font-size: 0.78rem;
  font-weight: 800;
`;

const CardTitle = styled.h2`
  margin: 0 0 12px;

  color: #1a365d;

  font-size: 1.65rem;
  font-weight: 900;
`;

const CardDescription = styled.p`
  margin: 0 0 22px;

  color: #64748b;

  font-size: 0.98rem;
  line-height: 1.65;
`;

const InfoBox = styled.div`
  background: #f8fafc;

  border: 1px solid #e2e8f0;
  border-radius: 15px;

  padding: 18px;

  margin-bottom: 25px;
`;

const InfoLine = styled.div`
  display: flex;
  align-items: flex-start;

  gap: 9px;

  color: #475569;

  font-size: 0.9rem;
  line-height: 1.5;

  &:not(:last-child) {
    margin-bottom: 9px;
  }

  strong {
    color: #1a365d;
  }
`;

const Spacer = styled.div`
  flex: 1;
`;

const PrimaryButton = styled.a`
  display: block;

  width: 100%;
  box-sizing: border-box;

  text-align: center;

  text-decoration: none;

  color: #020617;

  background: linear-gradient(
    135deg,
    #d4af37 0%,
    #aa7700 100%
  );

  border: 1px solid #fef08a;

  border-radius: 50px;

  padding: 16px 22px;

  font-size: 1rem;
  font-weight: 900;

  box-shadow:
    0 10px 20px rgba(212, 175, 55, 0.2);

  transition: all 0.25s ease;

  &:hover {
    transform: translateY(-2px);

    background: linear-gradient(
      135deg,
      #aa7700 0%,
      #d4af37 100%
    );

    box-shadow:
      0 14px 25px rgba(212, 175, 55, 0.32);
  }
`;

const Advice = styled.section`
  margin-top: 35px;

  background: white;

  border: 1px solid #e2e8f0;
  border-radius: 20px;

  padding: 28px 32px;

  box-shadow:
    0 12px 30px rgba(15, 23, 42, 0.05);
`;

const AdviceTitle = styled.h3`
  margin: 0 0 12px;

  color: #1a365d;

  font-size: 1.15rem;
`;

const AdviceText = styled.p`
  margin: 0;

  color: #64748b;

  font-size: 0.95rem;
  line-height: 1.7;
`;

const Bottom = styled.div`
  margin-top: 35px;

  text-align: center;
`;

const BackLink = styled(Link)`
  color: #64748b;

  font-size: 0.9rem;

  text-decoration: none;

  &:hover {
    color: #1a365d;
    text-decoration: underline;
  }
`;

function FichesDiagnosticPage() {
  return (
    <Page>

      <Container>

        <Brand>
          Maxime • Objectif Maths
        </Brand>


        <Header>

          <Badge>
            🎯 RESSOURCES GRATUITES
          </Badge>

          <Title>
            Choisissez votre diagnostic
          </Title>

          <Subtitle>
            Sélectionnez le diagnostic correspondant
            au parcours de votre enfant afin d’identifier
            les acquis solides et les notions qui méritent
            d’être retravaillées.
          </Subtitle>

        </Header>


        <DiagnosticGrid>

          {/* SECONDAIRE I */}

          <DiagnosticCard>

            <CardTop>

              <Icon>
                📘
              </Icon>

              <FreeBadge>
                GRATUIT
              </FreeBadge>

            </CardTop>


            <CardTitle>
              Secondaire I
            </CardTitle>


            <CardDescription>
              Un diagnostic destiné aux élèves de la
              scolarité obligatoire pour vérifier
              la maîtrise des principaux fondamentaux
              en mathématiques.
            </CardDescription>


            <InfoBox>

              <InfoLine>
                <span>⏱️</span>

                <span>
                  Environ <strong>20 à 25 minutes</strong>
                </span>
              </InfoLine>


              <InfoLine>
                <span>🧮</span>

                <span>
                  Nombres, calcul, algèbre et fonctions
                </span>
              </InfoLine>


              <InfoLine>
                <span>📐</span>

                <span>
                  Géométrie, données et probabilités
                </span>
              </InfoLine>


              <InfoLine>
                <span>🎯</span>

                <span>
                  Idéal pour repérer les fondamentaux
                  à consolider
                </span>
              </InfoLine>

            </InfoBox>


            <Spacer />


            <PrimaryButton
              href="/diagnostics/diagnostic-secondaire-1.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Faire le diagnostic Secondaire I →
            </PrimaryButton>

          </DiagnosticCard>


          {/* SECONDAIRE II */}

          <DiagnosticCard>

            <CardTop>

              <Icon>
                🎓
              </Icon>

              <FreeBadge>
                GRATUIT
              </FreeBadge>

            </CardTop>


            <CardTitle>
              Secondaire II
            </CardTitle>


            <CardDescription>
              Un diagnostic destiné principalement aux
              élèves du gymnase ou du collège afin de
              faire le point sur leurs bases avant
              la maturité.
            </CardDescription>


            <InfoBox>

              <InfoLine>
                <span>⏱️</span>

                <span>
                  Environ <strong>25 à 30 minutes</strong>
                </span>
              </InfoLine>


              <InfoLine>
                <span>📈</span>

                <span>
                  Algèbre, fonctions et analyse
                </span>
              </InfoLine>


              <InfoLine>
                <span>📐</span>

                <span>
                  Géométrie, trigonométrie et probabilités
                </span>
              </InfoLine>


              <InfoLine>
                <span>🎯</span>

                <span>
                  Idéal pour repérer les bases
                  à consolider au gymnase
                </span>
              </InfoLine>

            </InfoBox>


            <Spacer />


            <PrimaryButton
              href="/diagnostics/diagnostic-secondaire-2.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Faire le diagnostic Secondaire II →
            </PrimaryButton>

          </DiagnosticCard>

        </DiagnosticGrid>


        <Advice>

          <AdviceTitle>
            💡 Comment utiliser le diagnostic ?
          </AdviceTitle>

          <AdviceText>
            Je conseille à votre enfant de réaliser le diagnostic
            seul et sans aide extérieure afin d’obtenir un résultat
            aussi représentatif que possible. Certaines notions
            peuvent ne pas encore avoir été étudiées selon son année,
            son établissement ou son canton : dans ce cas, il suffit
            de les laisser de côté.
          </AdviceText>

        </Advice>


        <Bottom>

          <BackLink to="/">
            ← Retour au site Objectif Maths
          </BackLink>

        </Bottom>

      </Container>

    </Page>
  );
}

export default FichesDiagnosticPage;