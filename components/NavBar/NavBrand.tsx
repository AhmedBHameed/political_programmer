import styled from 'styled-components';
import React from 'react';
import Brand from '../Brand/Brand';
import useNavigateToBlog from './hooks/navigateToBlogHook';

const BrandContainer = styled.div`
  height: 100%;
  overflow: hidden;
  cursor: pointer;
`;

interface NavBrandProps {
  className?: string;
}

const NavBrand: React.FC<NavBrandProps> = ({className}) => {
  const {goToBlog} = useNavigateToBlog();

  return (
    <BrandContainer className={className} onClick={goToBlog}>
      <Brand />
    </BrandContainer>
  );
};

export default NavBrand;
