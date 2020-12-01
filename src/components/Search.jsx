//REACT ICONS
import { FaSearch } from 'react-icons/fa';

//SCSS
import './scss/SearchStyle.scss';

//STYLE COMPONENTS
import styled from 'styled-components';

//COMPONENTS STYLED
const ContainerSearch = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
const ContainerInput = styled.label`
  position: relative;
  width: 100%;
  font-family: 'Inter';
`;
const InputSearch = styled.input`
  border: none;
  padding: 10px;
  border-radius: 5px;
  width: 100%;
  transition: ease.6s;
  &:focus {
    filter: drop-shadow(0px 0px 10px #2222);
    color: #d84727;
  }
`;

//COMPONENT SEARCH
const Search = () => {
  return (
    <ContainerSearch className='col-12 col-md-4 '>
      <ContainerInput>
        <InputSearch type='text' placeholder='Busqueda....' />
        <FaSearch className='SearchIco' />
      </ContainerInput>
    </ContainerSearch>
  );
};

export default Search;
