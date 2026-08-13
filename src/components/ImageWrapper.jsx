import styled from 'styled-components';


const ImageWrapper = styled.div`
  width: 200px;
  height: 200px;
  margin: 0 auto 30px;
  border-radius: 50%;
  border: 4px solid #fff;
  box-shadow: 0 10px 25px rgba(0,0,0,0.1);
  overflow: hidden;
  background: #f0f0f0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

// Dans ton App() :
<ImageWrapper>
  <img src="/ma-photo.jpg" alt="Maxime - Votre Coach" />
</ImageWrapper>

export default ImageWrapper