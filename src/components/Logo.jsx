//STYLED COMPONENTS
import styled from 'styled-components';

//REACT ICONS
import { FiCpu } from 'react-icons/fi';

//COMPONENTS STYLED
const HardLogo = styled.h1`
  color: #d84727;
  font-family: 'Black Han Sans';
  font-size: 1.9rem;
`;
const SpanStore = styled.span`
  color: #222;
  font-family: 'Inter';
  margin: 0;
`;

//COMPONENT LOGO
const Logo = () => {
  return (
    <div className='col-12 col-md-4'>
      <HardLogo>
        Hard
        <SpanStore>
          Store
          <FiCpu
            style={{ color: '#D84727', margin: '0px 5px', fontSize: '1rem' }}
          />
        </SpanStore>
      </HardLogo>
    </div>
  );
};

export default Logo;
