
import styled from "styled-components";

const Page = styled.main`
  min-height: 100vh;
  background: #f8fafc;
  color: #1e293b;
  padding: 70px 20px;
  font-family: Arial, sans-serif;
`;

const Container = styled.div`
  max-width: 950px;
  margin: 0 auto;
  background: white;
  padding: 50px;
  border-radius: 20px;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.07);
  border-top: 6px solid #d4af37;

  @media (max-width: 768px) {
    padding: 30px 20px;
  }
`;

const Title = styled.h1`
  color: #1a365d;
  font-size: 2.4rem;
  text-align: center;
  margin-bottom: 40px;
`;

const Section = styled.section`
  margin-bottom: 35px;

  h2 {
    color: #1a365d;
    border-left: 4px solid #d4af37;
    padding-left: 15px;
    font-size: 1.4rem;
    margin-bottom: 15px;
  }

  p {
    color: #475569;
    line-height: 1.8;
    margin-bottom: 10px;
  }
`;

const BackButton = styled.a`
  display: block;
  width: fit-content;
  margin: 45px auto 0;
  padding: 15px 30px;
  background: #d4af37;
  color: #020617;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 800;
`;

export default function LegalNotice() {
  return (
    <Page>
      <Container>
        <Title>Mentions légales</Title>

        <Section>
          <h2>1. Éditeur du site</h2>

          <p>
            Le site Maxime – Objectif Maths est édité
            par :
          </p>

          <p>
            <strong>Nom :</strong> Maxime Montagne
          </p>

          <p>
            <strong>Statut :</strong> Entrepreneur
            individuel (EI)
          </p>

          <p>
            <strong>Activité :</strong> Cours
            particuliers de mathématiques et
            soutien scolaire en ligne
          </p>

          <p>
            <strong>SIREN :</strong> [À COMPLÉTER]
          </p>

          <p>
            <strong>Adresse professionnelle :</strong>
            [RUE, NUMÉRO, CODE POSTAL, VILLE, FRANCE]
          </p>

          <p>
            <strong>E-mail :</strong>
            [TON E-MAIL PROFESSIONNEL]
          </p>

          <p>
            <strong>Téléphone :</strong>
            [TON NUMÉRO PROFESSIONNEL]
          </p>
        </Section>

        <Section>
          <h2>2. Directeur de la publication</h2>

          <p>
            Le directeur de la publication est
            Maxime Montagne, entrepreneur individuel.
          </p>
        </Section>

        <Section>
          <h2>3. Hébergement</h2>

          <p>
            Le site est hébergé par :
          </p>

          <p>
            <strong>Vercel Inc.</strong>
          </p>

          <p>
            440 N Barranca Avenue #4133,
            Covina, CA 91723, États-Unis
          </p>

          <p>
            Site :
            <a
              href="https://vercel.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}https://vercel.com
            </a>
          </p>

          <p>
            <strong>Contact de l'hébergeur :</strong>
            [COORDONNÉES À VÉRIFIER]
          </p>
        </Section>

        <Section>
          <h2>4. Propriété intellectuelle</h2>

          <p>
            Les contenus du site, notamment les textes,
            supports pédagogiques, éléments graphiques
            et vidéos, sont protégés par les droits de
            propriété intellectuelle applicables.
          </p>

          <p>
            Toute reproduction ou utilisation non
            autorisée des contenus appartenant à
            Maxime – Objectif Maths est interdite.
          </p>
        </Section>

        <Section>
          <h2>5. Données personnelles</h2>

          <p>
            Les modalités de collecte et de traitement
            des données personnelles sont décrites
            dans la politique de confidentialité
            accessible depuis le site.
          </p>
        </Section>

        <Section>
          <h2>6. Prestations et paiements</h2>

          <p>
            Les prestations proposées concernent
            l'accompagnement scolaire et les cours
            particuliers de mathématiques.
          </p>

          <p>
            Les modalités de l'accompagnement, le prix
            en CHF, la fréquence des séances et les
            conditions de paiement sont communiqués
            au client avant toute souscription.
          </p>
        </Section>

        <BackButton href="/">
          ← Retour au site
        </BackButton>
      </Container>
    </Page>
  );
}
