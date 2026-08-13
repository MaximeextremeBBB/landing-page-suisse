import styled from 'styled-components';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5%;
  height: 80px;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 0 2px 15px rgba(0,0,0,0.05);
  gap: 30px;
`;

const HeaderAvatar = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
  border: 2px solid #1a365d;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const NavMenu = styled.nav`
  display: flex;
  gap: 25px;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled.a`
  text-decoration: none;
  color: #1a365d;
  font-weight: 600;
  font-size: 0.95rem;
  transition: color 0.3s;

  &:hover { color: #25d366; }
`;

const NavBtn = styled.a`
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

function Header() {
  return (
    <HeaderContainer>
      {/* <HeaderAvatar>
        <img src="/Big-photo-améliorée.jpg" alt="Maxime" />
      </HeaderAvatar> */}
      
      <NavMenu>
        <NavLink href="#methode">Accompagnement</NavLink>
        <NavLink href="#about-me">Mon parcours</NavLink>
        <NavLink href="#accompagnement">Ma méthode</NavLink>
        <NavLink href="#visio">Cours en ligne</NavLink>
        <NavLink href="#temoignages">Témoignages</NavLink>
        <NavLink href="#faq">FAQ</NavLink>
      </NavMenu>

      <NavBtn href="https://wa.me/33614949242?text=Bonjour%20Maxime%2C%20je%20souhaiterais%20faire%20le%20point%20sur%20les%20besoins%20de%20mon%20enfant%20en%20math%C3%A9matiques." 
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
        Contact Whatsapp
      </NavBtn>
    </HeaderContainer>
  );
}

export default Header;