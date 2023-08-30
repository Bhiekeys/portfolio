import styled from 'styled-components';
const Logo = () => {
  return (
    <Wrapper>
      <h2 className="logo">
        Bhie<span>Codes</span>
      </h2>
    </Wrapper>
  );
};

const Wrapper = styled.div`

.logo{
  font-size:30px;
  color:#fff;
   font-style: oblique;
  font-weight:500;
   text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.logo span{
   color:#2BB32A;
}
`;

export default Logo;
