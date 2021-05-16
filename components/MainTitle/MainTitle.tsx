import React from 'react';
import styled from 'styled-components';

const Bold = styled.span((props) => {
  const {blue50} = props.theme.colors;

  return `
    font-size: 1.6rem;
    font-weight: bold;
    color: white;
    margin: 2rem 0;
    padding: 0 1rem;
    display: inline-block;
    background-color: ${blue50};
  `;
});

interface MainTitleProps {
  text: string;
}

const MainTitle: React.FC<MainTitleProps> = ({text}) => {
  return <Bold>{text}</Bold>;
};

export default MainTitle;
