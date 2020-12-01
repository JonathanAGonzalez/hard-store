//IMPORT REACT ICONS
import { FaOpencart } from 'react-icons/fa';
import { AiOutlineUser } from 'react-icons/ai';
//SCSS
import './scss/Cart.scss';
//STYLES COMPONENTS
import styled from 'styled-components';

//COMPONENTS STYLED
const ContainerUserCart = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 45px;
  @media (max-width: 414px) {
    padding-right: 0px;
  }
`;

//COMPONENT
const CartPerfil = () => {
  return (
    <ContainerUserCart className='col-12 col-md-4'>
      <AiOutlineUser className='mx-4 Icon User' />
      <FaOpencart className='Icon' />
    </ContainerUserCart>
  );
};

export default CartPerfil;
