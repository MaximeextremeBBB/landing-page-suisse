import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";

const Page = styled.main`
  min-height: 100vh;

  background:
    radial-gradient(
      circle at top,
      rgba(212, 175, 55, 0.1),
      transparent 35%
    ),
    #f8fafc;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 60px 20px;
`;

const Container = styled.div`
  width: 100%;
  max-width: 760px;
`;

const Brand = styled.div`
  text-align: center;
  color: #1a365d;
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 25px;
`;

const Card = styled.section`
  background: white;
  border-radius: 24px;

  padding: 55px 60px;

  border: 1px solid #e2e8f0;

  box-shadow:
    0 25px 60px rgba(15, 23, 42, 0.08),
    0 5px 15px rgba(15, 23, 42, 0.04);

  text-align: center;

  @media (max-width: 768px) {
    padding: 40px 25px;
  }
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

  box-shadow: 0 6px 15px rgba(212, 175, 55, 0.25);
`;

const Title = styled.h1`
  margin: 0;

  color: #1a365d;

  font-size: 3rem;
  line-height: 1.1;
  font-weight: 900;

  @media (max-width: 768px) {
    font-size: 2.3rem;
  }
`;

const Subtitle = styled.h2`
  max-width: 650px;
  margin: 22px auto 0;

  color: #334155;

  font-size: 1.35rem;
  line-height: 1.5;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 1.15rem;
  }
`;

const Intro = styled.p`
  max-width: 620px;
  margin: 20px auto 30px;

  color: #64748b;

  font-size: 1.05rem;
  line-height: 1.7;
`;

const Benefits = styled.div`
  background: #f8fafc;

  border: 1px solid #e2e8f0;
  border-radius: 16px;

  padding: 20px 25px;
  margin: 30px 0;

  text-align: left;
`;

const Benefit = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;

  color: #334155;

  font-size: 0.98rem;
  line-height: 1.5;

  &:not(:last-child) {
    margin-bottom: 12px;
  }

  strong {
    color: #1a365d;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;

  margin-top: 30px;

  text-align: left;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  > label {
    color: #1a365d;
    font-weight: 700;
    font-size: 0.95rem;
  }

  input[type="text"],
  input[type="email"] {
    width: 100%;

    padding: 15px 16px;

    border-radius: 12px;
    border: 1px solid #cbd5e1;

    background: white;

    color: #1e293b;

    font-size: 1rem;

    box-sizing: border-box;

    transition: all 0.2s ease;
  }

  input[type="text"]:focus,
  input[type="email"]:focus {
    outline: none;

    border-color: #d4af37;

    box-shadow: 0 0 0 3px rgba(212, 175, 55, 0.12);
  }
`;

const CycleChoices = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;

  @media (max-width: 650px) {
    grid-template-columns: 1fr;
  }
`;

const CycleChoice = styled.label`
  position: relative;
  cursor: pointer;

  input {
    position: absolute;
    opacity: 0;
    pointer-events: none;
  }

  .choice-content {
    height: 100%;
    box-sizing: border-box;

    padding: 20px;

    border: 2px solid #e2e8f0;
    border-radius: 16px;

    background: white;

    transition: all 0.25s ease;
  }

  .choice-title {
    display: block;

    color: #1a365d;

    font-size: 1.05rem;
    font-weight: 800;

    margin-bottom: 8px;
  }

  .choice-description {
    display: block;

    color: #64748b;

    font-size: 0.9rem;
    line-height: 1.5;
  }

  input:checked + .choice-content {
    border-color: #d4af37;

    background: rgba(212, 175, 55, 0.07);

    box-shadow: 0 6px 18px rgba(212, 175, 55, 0.18);
  }

  &:hover .choice-content {
    border-color: #d4af37;
    transform: translateY(-2px);
  }
`;

const OtherChoice = styled(CycleChoice)`
  grid-column: 1 / -1;

  .choice-content {
    text-align: center;
  }

  @media (max-width: 650px) {
    grid-column: auto;
  }
`;

const SubmitButton = styled.button`
  border: 1px solid #fef08a;

  background: linear-gradient(
    135deg,
    #d4af37 0%,
    #aa7700 100%
  );

  color: #020617;

  padding: 18px 28px;

  border-radius: 50px;

  font-size: 1.1rem;
  font-weight: 900;

  cursor: pointer;

  margin-top: 8px;

  box-shadow: 0 10px 20px rgba(212, 175, 55, 0.22);

  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-3px);

    background: linear-gradient(
      135deg,
      #aa7700 0%,
      #d4af37 100%
    );

    box-shadow: 0 15px 25px rgba(212, 175, 55, 0.35);
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 16px 22px;
  }
`;

const Reassurance = styled.p`
  margin: 22px 0 0;

  color: #64748b;

  font-size: 0.85rem;
  line-height: 1.6;

  text-align: center;
`;

const FooterLinks = styled.div`
  margin-top: 25px;

  display: flex;
  justify-content: center;
  gap: 20px;

  flex-wrap: wrap;
`;

const SmallLink = styled(Link)`
  color: #64748b;

  font-size: 0.85rem;

  text-decoration: none;

  &:hover {
    color: #1a365d;
    text-decoration: underline;
  }
`;

function DiagnosticPage() {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;

    const data = {
      prenom: form.prenom.value.trim(),
      email: form.email.value.trim(),
      cycle: form.cycle.value,
    };

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        alert(
          result.message ||
            "Une erreur est survenue."
        );

        return;
      }

      /*
        Le contact est maintenant enregistré dans Brevo.

        On envoie immédiatement le parent vers
        la bibliothèque des diagnostics.
      */

      navigate("/fiches-diagnostic");

    } catch (error) {
      console.error("Erreur :", error);

      alert(
        "Impossible de contacter le serveur."
      );
    }
  };

  return (
    <Page>
      <Container>

        <Brand>
          Maxime • Objectif Maths
        </Brand>

        <Card>

          <Badge>
            🎯 DIAGNOSTIC GRATUIT
          </Badge>

          <Title>
            Mini-diagnostic de mathématiques
          </Title>

          <Subtitle>
            Faites le point sur les acquis de votre enfant
            et identifiez les principales notions à revoir.
          </Subtitle>

          <Intro>
            Accédez gratuitement à mes fiches de diagnostic
            pour repérer les acquis de votre enfant et les
            notions qui pourraient freiner sa progression
            en mathématiques.
          </Intro>


          <Benefits>

            <Benefit>
              <span>🔎</span>

              <div>
                <strong>
                  Repérer les difficultés
                </strong>

                <br />

                Identifiez les notions sur lesquelles votre
                enfant rencontre encore des blocages.
              </div>
            </Benefit>


            <Benefit>
              <span>🎯</span>

              <div>
                <strong>
                  Savoir quoi retravailler en priorité
                </strong>

                <br />

                Évitez de reprendre tout le programme
                au hasard.
              </div>
            </Benefit>


            <Benefit>
              <span>📈</span>

              <div>
                <strong>
                  Faire le point gratuitement
                </strong>

                <br />

                Obtenez une première vision des acquis
                et des notions à consolider.
              </div>
            </Benefit>

          </Benefits>


          <Form onSubmit={handleSubmit}>

            <FormGroup>

              <label htmlFor="prenom">
                Votre prénom
              </label>

              <input
                id="prenom"
                name="prenom"
                type="text"
                placeholder="Ex. Sophie"
                required
              />

            </FormGroup>


            <FormGroup>

              <label htmlFor="email">
                Votre adresse email
              </label>

              <input
                id="email"
                name="email"
                type="email"
                placeholder="Ex. sophie@email.com"
                required
              />

            </FormGroup>


            <FormGroup>

              <label>
                Quel cycle correspond actuellement
                à votre enfant ?
              </label>


              <CycleChoices>


                <CycleChoice>

                  <input
                    type="radio"
                    name="cycle"
                    value="SECONDAIRE_I"
                    required
                  />

                  <div className="choice-content">

                    <span className="choice-title">
                      📘 Secondaire I
                    </span>

                    <span className="choice-description">
                      Scolarité obligatoire et consolidation
                      des fondamentaux.
                    </span>

                  </div>

                </CycleChoice>


                <CycleChoice>

                  <input
                    type="radio"
                    name="cycle"
                    value="SECONDAIRE_II"
                    required
                  />

                  <div className="choice-content">

                    <span className="choice-title">
                      🎓 Secondaire II
                    </span>

                    <span className="choice-description">
                      Gymnase, collège et préparation
                      progressive à la maturité.
                    </span>

                  </div>

                </CycleChoice>


                <OtherChoice>

                  <input
                    type="radio"
                    name="cycle"
                    value="AUTRE"
                    required
                  />

                  <div className="choice-content">

                    <span className="choice-title">
                      ❓ Autre / Je ne sais pas
                    </span>

                    <span className="choice-description">
                      Vous pourrez consulter toutes les fiches
                      disponibles à l'étape suivante.
                    </span>

                  </div>

                </OtherChoice>


              </CycleChoices>

            </FormGroup>


            <SubmitButton type="submit">
              Accéder gratuitement aux diagnostics →
            </SubmitButton>

          </Form>


          <Reassurance>

            🔒 Vos informations restent confidentielles.

            <br />

            Les mini-diagnostics sont des outils de repérage
            pédagogique et ne remplacent pas une évaluation
            complète de l’élève.

          </Reassurance>


          <FooterLinks>

            <SmallLink to="/">
              ← Retour au site
            </SmallLink>

            <SmallLink to="/politique-de-confidentialite">
              Politique de confidentialité
            </SmallLink>

          </FooterLinks>

        </Card>

      </Container>
    </Page>
  );
}

export default DiagnosticPage;