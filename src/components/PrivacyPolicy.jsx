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
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const LastUpdate = styled.p`
  text-align: center;
  color: #64748b;
  margin-bottom: 50px;
`;

const Section = styled.section`
  margin-bottom: 40px;
`;

const Title = styled.h2`
  color: #1a365d;
  font-size: 1.5rem;
  margin-bottom: 15px;
  border-left: 4px solid #d4af37;
  padding-left: 15px;
`;

const Text = styled.p`
  color: #475569;
  font-size: 1rem;
  line-height: 1.75;
  margin-bottom: 15px;

  strong {
    color: #1e293b;
  }
`;

const List = styled.ul`
  color: #475569;
  line-height: 1.8;
  padding-left: 25px;

  li {
    margin-bottom: 7px;
  }
`;

const ContactBox = styled.div`
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 20px;
  margin-top: 15px;
  line-height: 1.7;

  strong {
    color: #1a365d;
  }
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
  background: linear-gradient(135deg, #d4af37 0%, #aa7700 100%);
  border: 1px solid #fef08a;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(212, 175, 55, 0.3);
  }
`;

function PrivacyPolicy() {
  return (
    <Page>
      <Container>
        <MainTitle>Politique de confidentialité</MainTitle>

        <LastUpdate>
          Dernière mise à jour : 13 août 2026
        </LastUpdate>

        <Section>
          <Title>1. Responsable du traitement</Title>

          <Text>
            La présente politique de confidentialité explique comment les
            données personnelles sont collectées et utilisées dans le cadre
            du site <strong>Maxime – Objectif Maths</strong>, des demandes de
            renseignements et des prestations de cours particuliers de
            mathématiques.
          </Text>

          <ContactBox>
            <strong>Responsable :</strong> Maxime Montagne
            <br />
            <strong>Entreprise :</strong> [NOM JURIDIQUE DE TON ENTREPRISE]
            <br />
            <strong>SIRET :</strong> [TON NUMÉRO SIRET]
            <br />
            <strong>E-mail :</strong> [TON ADRESSE E-MAIL PROFESSIONNELLE]
          </ContactBox>
        </Section>

        <Section>
          <Title>2. Données collectées</Title>

          <Text>
            Selon la manière dont vous utilisez le site ou entrez en contact
            avec moi, certaines données peuvent être collectées.
          </Text>

          <List>
            <li>Nom et prénom</li>
            <li>Adresse e-mail</li>
            <li>Numéro de téléphone</li>
            <li>Contenu des messages envoyés</li>
            <li>Niveau scolaire de l'élève</li>
            <li>Programme scolaire suivi</li>
            <li>Difficultés rencontrées en mathématiques</li>
            <li>Objectifs pédagogiques</li>
            <li>Date souhaitée de début de l'accompagnement</li>
            <li>
              Informations nécessaires à l'organisation et au suivi des cours
            </li>
          </List>
        </Section>

        <Section>
          <Title>3. Pourquoi ces données sont-elles utilisées ?</Title>

          <Text>
            Les informations collectées sont utilisées uniquement dans le
            cadre de mon activité de cours particuliers et notamment pour :
          </Text>

          <List>
            <li>répondre aux demandes de renseignements ;</li>
            <li>comprendre les besoins et les difficultés de l'élève ;</li>
            <li>proposer un accompagnement adapté ;</li>
            <li>organiser les cours ;</li>
            <li>assurer le suivi pédagogique ;</li>
            <li>échanger avec l'élève ou son responsable légal ;</li>
            <li>gérer la relation avec mes clients et prospects ;</li>
            <li>respecter mes obligations administratives et comptables ;</li>
            <li>mesurer les performances du site et des publicités.</li>
          </List>
        </Section>

        <Section>
          <Title>4. Formulaires Facebook et Instagram</Title>

          <Text>
            Des formulaires publicitaires proposés par Meta peuvent être
            utilisés afin de permettre aux parents ou aux élèves intéressés par
            des cours de mathématiques de demander à être recontactés.
          </Text>

          <Text>
            Les données renseignées dans ces formulaires sont utilisées afin
            de comprendre la situation de l'élève et de répondre à la demande.
            Meta peut également traiter certaines informations conformément à
            ses propres règles de confidentialité.
          </Text>
        </Section>

        <Section>
          <Title>5. WhatsApp</Title>

          <Text>
            Lorsque vous me contactez par WhatsApp, les informations
            communiquées sont utilisées afin de répondre à votre demande,
            organiser un échange, préparer un cours ou assurer le suivi de
            l'accompagnement.
          </Text>

          <Text>
            WhatsApp appartient au groupe Meta et peut traiter certaines
            données conformément à sa propre politique de confidentialité.
          </Text>
        </Section>

        <Section>
          <Title>6. Google Analytics</Title>

          <Text>
            Le site utilise Google Analytics afin de mieux comprendre sa
            fréquentation et son utilisation.
          </Text>

          <Text>
            Google Analytics peut notamment permettre de mesurer le nombre de
            visites, les pages consultées, la provenance générale du trafic et
            certaines interactions avec le site.
          </Text>

          <Text>
            Lorsque le consentement est requis, Google Analytics n'est activé
            qu'après votre choix dans l'outil de gestion des cookies.
          </Text>
        </Section>

        <Section>
          <Title>7. Meta Pixel</Title>

          <Text>
            Le site peut utiliser le Meta Pixel afin de mesurer l'efficacité
            des publicités diffusées sur Facebook et Instagram.
          </Text>

          <Text>
            Cet outil peut notamment permettre de savoir si une personne ayant
            vu ou cliqué sur une publicité réalise ensuite certaines actions
            sur le site.
          </Text>

          <Text>
            Lorsque le consentement est requis, le Meta Pixel n'est activé
            qu'après votre accord.
          </Text>
        </Section>

        <Section>
          <Title>8. Hébergement et Vercel</Title>

          <Text>
            Le site est susceptible d'utiliser les services techniques de
            Vercel pour son hébergement, son fonctionnement et la mesure de
            certaines performances techniques.
          </Text>

          <Text>
            Certaines données techniques peuvent être traitées dans ce cadre
            afin d'assurer le fonctionnement et la sécurité du site.
          </Text>
        </Section>

        <Section>
          <Title>9. Destinataires des données</Title>

          <Text>
            Les données sont principalement utilisées par Maxime – Objectif
            Maths.
          </Text>

          <Text>
            Certains prestataires peuvent toutefois être amenés à traiter des
            données nécessaires au fonctionnement des services utilisés,
            notamment :
          </Text>

          <List>
            <li>Meta : Facebook, Instagram, WhatsApp et Meta Pixel ;</li>
            <li>Google : Google Analytics ;</li>
            <li>Vercel : hébergement et services techniques.</li>
          </List>

          <Text>
            <strong>Les données personnelles ne sont pas vendues à des tiers.</strong>
          </Text>
        </Section>

        <Section>
          <Title>10. Durée de conservation</Title>

          <Text>
            Les données sont conservées uniquement pendant la durée nécessaire
            aux finalités pour lesquelles elles ont été collectées.
          </Text>

          <Text>
            Les données concernant une personne ayant demandé des
            renseignements sans devenir cliente peuvent notamment être
            conservées jusqu'à trois ans à compter de leur collecte ou du
            dernier contact provenant de cette personne.
          </Text>

          <Text>
            Les informations liées à une prestation peuvent être conservées
            pendant la durée nécessaire au suivi du client ainsi que pendant
            les éventuelles durées légales, fiscales ou comptables applicables.
          </Text>
        </Section>

        <Section>
          <Title>11. Cookies et traceurs</Title>

          <Text>
            Le site peut utiliser des cookies ou technologies similaires
            nécessaires à son fonctionnement, ainsi que des outils de mesure
            d'audience ou publicitaires.
          </Text>

          <Text>
            Lorsqu'un consentement est requis, vous pouvez accepter, refuser
            ou personnaliser votre choix.
          </Text>

          <Text>
            Vous pouvez également modifier ultérieurement vos préférences
            depuis l'outil de gestion des cookies disponible sur le site.
          </Text>
        </Section>

        <Section>
          <Title>12. Vos droits</Title>

          <Text>
            Selon la réglementation applicable, vous pouvez notamment demander :
          </Text>

          <List>
            <li>l'accès aux données vous concernant ;</li>
            <li>leur rectification ;</li>
            <li>leur suppression lorsque cela est possible ;</li>
            <li>la limitation de certains traitements ;</li>
            <li>vous opposer à certains traitements ;</li>
            <li>
              retirer votre consentement lorsqu'un traitement repose sur ce
              consentement ;
            </li>
            <li>
              demander la portabilité de certaines données lorsque ce droit est
              applicable.
            </li>
          </List>

          <Text>
            Pour exercer ces droits, vous pouvez me contacter à l'adresse :
          </Text>

          <ContactBox>
            <strong>[TON ADRESSE E-MAIL PROFESSIONNELLE]</strong>
          </ContactBox>
        </Section>

        <Section>
          <Title>13. Sécurité des données</Title>

          <Text>
            Des mesures raisonnables sont mises en œuvre afin de protéger les
            données personnelles contre l'accès non autorisé, la perte,
            l'altération ou la divulgation.
          </Text>
        </Section>

        <Section>
          <Title>14. Modification de cette politique</Title>

          <Text>
            Cette politique de confidentialité peut être mise à jour afin de
            tenir compte de l'évolution du site, des services utilisés ou des
            obligations applicables.
          </Text>

          <Text>
            La date de dernière mise à jour est indiquée en haut de cette page.
          </Text>
        </Section>

        <BackButton href="/">
          ← Retour au site
        </BackButton>
      </Container>
    </Page>
  );
}

export default PrivacyPolicy;