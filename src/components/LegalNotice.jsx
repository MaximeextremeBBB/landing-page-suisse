
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

const MainTitle = styled.h1`
  color: #1a365d;
  font-size: 2.6rem;
  text-align: center;
  margin-bottom: 12px;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Subtitle = styled.p`
  color: #64748b;
  text-align: center;
  font-size: 1rem;
  margin-bottom: 50px;
`;

const Section = styled.section`
  margin-bottom: 38px;
`;

const Title = styled.h2`
  color: #1a365d;
  font-size: 1.5rem;
  margin-bottom: 16px;
  border-left: 4px solid #d4af37;
  padding-left: 15px;
`;

const Text = styled.p`
  color: #475569;
  font-size: 1rem;
  line-height: 1.8;
  margin-bottom: 12px;

  strong {
    color: #1e293b;
  }

  a {
    color: #1d4ed8;
    text-decoration: underline;
    overflow-wrap: anywhere;

    &:hover {
      color: #1e40af;
    }
  }
`;

const ContactBox = styled.div`
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 25px;
  margin-top: 20px;
`;

const BackButton = styled.a`
  display: block;
  width: fit-content;
  margin: 50px auto 0;
  padding: 15px 30px;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 800;
  color: #020617;
  background: linear-gradient(
    135deg,
    #d4af37 0%,
    #aa7700 100%
  );
  border: 1px solid #fef08a;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(212, 175, 55, 0.3);
  }
`;

function LegalNotice() {
  return (
    <Page>
      <Container>

        <MainTitle>Mentions légales</MainTitle>

        <Subtitle>
          Maxime – Objectif Maths
        </Subtitle>

        {/* 1. ÉDITEUR DU SITE */}

        <Section>
          <Title>1. Éditeur du site</Title>

          <Text>
            Le site <strong>Maxime – Objectif Maths</strong>,
            accessible à l'adresse
            {" "}
            <a
              href="https://landing-page-suisse.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              landing-page-suisse.vercel.app
            </a>,
            est édité par :
          </Text>

          <ContactBox>

            <Text>
              <strong>Nom :</strong> Maxime Montagne
            </Text>

            <Text>
              <strong>Statut juridique :</strong>
              {" "}Entrepreneur individuel (EI)
            </Text>

            <Text>
              <strong>Nom commercial :</strong>
              {" "}Maxime – Objectif Maths
            </Text>

            <Text>
              <strong>Activité :</strong>
              {" "}Cours particuliers de mathématiques,
              accompagnement scolaire et soutien
              scolaire en ligne.
            </Text>

            <Text>
              <strong>Numéro SIREN :</strong>
              {" "}990 983 405
            </Text>

            <Text>
            <strong>Numéro SIRET :</strong>
             {" "}990 983 405 00012
            </Text>

            <Text>
              <strong>Adresse professionnelle :</strong>
              {" "}10 Lotissement Le Clos du Cardinal,
              83220 Le Pradet, France.
            </Text>

            <Text>
              <strong>Adresse e-mail :</strong>
              {" "}
              <a href="mailto:maxime.guiraud.1990@gmail.com">
                maxime.guiraud.1990@gmail.com
              </a>
            </Text>

            <Text>
              <strong>Téléphone :</strong>
              {" "}
              <a href="tel:+33614949242">
                06 14 94 92 42
              </a>
            </Text>

          </ContactBox>
        </Section>

        {/* 2. DIRECTEUR DE PUBLICATION */}

        <Section>
          <Title>2. Directeur de la publication</Title>

          <Text>
            Le directeur de la publication du site
            est Maxime Montagne, entrepreneur individuel,
            exerçant sous le nom commercial
            {" "}<strong>Maxime – Objectif Maths</strong>.
          </Text>
        </Section>

        {/* 3. HÉBERGEMENT */}

        <Section>
          <Title>3. Hébergement du site</Title>

          <Text>
            Le site est hébergé par :
          </Text>

          <ContactBox>

            <Text>
              <strong>Hébergeur :</strong> Vercel Inc.
            </Text>

            <Text>
              <strong>Adresse :</strong>
              {" "}440 N Barranca Avenue #4133,
              Covina, CA 91723, États-Unis.
            </Text>

            <Text>
              <strong>Site internet :</strong>
              {" "}
              <a
                href="https://vercel.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://vercel.com
              </a>
            </Text>

            <Text>
              <strong>Contact :</strong>
              {" "}
              <a
                href="https://vercel.com/contact"
                target="_blank"
                rel="noopener noreferrer"
              >
                Page officielle de contact Vercel
              </a>
            </Text>

            <Text>
              <strong>Téléphone publié pour
              l'agent chargé des droits d'auteur :</strong>
              {" "}+1 559 288 7060
            </Text>

          </ContactBox>
        </Section>

        {/* 4. PROPRIÉTÉ INTELLECTUELLE */}

        <Section>
          <Title>4. Propriété intellectuelle</Title>

          <Text>
            Les contenus présents sur ce site,
            notamment les textes, illustrations,
            éléments graphiques, supports pédagogiques,
            photographies et vidéos, peuvent être
            protégés par des droits de propriété
            intellectuelle.
          </Text>

          <Text>
            Sauf autorisation ou disposition légale
            contraire, la reproduction, la modification,
            la diffusion ou la réutilisation des
            contenus appartenant à
            {" "}<strong>Maxime – Objectif Maths</strong>
            {" "}nécessite une autorisation préalable.
          </Text>

          <Text>
            Les contenus appartenant à des tiers
            demeurent soumis aux droits de leurs
            titulaires respectifs.
          </Text>
        </Section>

        {/* 5. DONNÉES PERSONNELLES */}

        <Section>
          <Title>5. Données personnelles</Title>

          <Text>
            Dans le cadre de son activité,
            Maxime – Objectif Maths peut collecter
            et traiter certaines données personnelles,
            notamment lors des demandes de renseignements,
            des échanges avec les familles et
            de l'organisation des cours.
          </Text>

          <Text>
            Les informations relatives aux traitements
            de données et aux droits des utilisateurs
            sont détaillées dans la
            {" "}
            <a href="/politique-confidentialite">
              politique de confidentialité
            </a>
            {" "}du site.
          </Text>

          <Text>
            Pour toute question concernant vos
            données personnelles, vous pouvez écrire à :
            {" "}
            <a href="mailto:maxime.guiraud.1990@gmail.com">
              maxime.guiraud.1990@gmail.com
            </a>.
          </Text>
        </Section>

        {/* 6. PRESTATIONS ET PAIEMENTS */}

        <Section>
          <Title>6. Prestations et paiements</Title>

          <Text>
            Maxime – Objectif Maths propose
            des prestations de cours particuliers
            de mathématiques et d'accompagnement
            scolaire, notamment à distance
            pour des élèves résidant en Suisse romande.
          </Text>

          <Text>
            Les modalités de l'accompagnement
            sont définies en fonction des besoins
            de chaque élève et communiquées
            à la famille avant tout engagement.
          </Text>

          <Text>
            Le prix convenu, exprimé notamment
            en francs suisses (CHF) pour les
            clients concernés, ainsi que la
            fréquence des séances et les modalités
            de paiement sont précisés avant
            toute souscription.
          </Text>

          <Text>
            Certains paiements peuvent être effectués
            par l'intermédiaire d'un prestataire
            de paiement sécurisé tel que Stripe,
            selon les moyens de paiement disponibles.
          </Text>

          <Text>
            Les modalités de report, d'annulation,
            de remboursement et de résiliation
            sont communiquées au client dans
            les conditions contractuelles applicables.
          </Text>
        </Section>

        {/* 7. CONTACT */}

        <Section>
          <Title>7. Contact</Title>

          <Text>
            Pour toute question relative au site,
            aux prestations proposées ou
            aux présentes mentions légales,
            vous pouvez contacter :
          </Text>

          <ContactBox>

            <Text>
              <strong>Maxime Montagne</strong>
            </Text>

            <Text>
              Maxime – Objectif Maths
            </Text>

            <Text>
              E-mail :
              {" "}
              <a href="mailto:maxime.guiraud.1990@gmail.com">
                maxime.guiraud.1990@gmail.com
              </a>
            </Text>

            <Text>
              Téléphone :
              {" "}
              <a href="tel:+33614949242">
                06 14 94 92 42
              </a>
            </Text>

          </ContactBox>
        </Section>

        {/* RETOUR AU SITE */}

        <BackButton href="/">
          ← Retour au site
        </BackButton>

      </Container>
    </Page>
  );
}

export default LegalNotice;
