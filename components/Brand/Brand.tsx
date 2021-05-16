import Typography from 'antd/lib/typography';
import styled from 'styled-components';
import {mediumGathomFontStyle} from '../shared/sharedStyles';

const Title = Typography.Title;

const Container = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;

const StyledTitle = styled(Title)`
  ${mediumGathomFontStyle}
  padding: 0 0.2rem;
  margin-bottom: 0 !important;
  color: ${(props) => props.theme.colors.blue50} !important;
  font-size: 1rem;
`;

const StyledSvg = styled.svg`
  width: 2rem;
  color: ${(props) => props.theme.colors.blue50};
`;

interface BrandProps {
  className?: string;
}

const Brand: React.FC<BrandProps> = ({className}) => {
  return (
    <Container className={className}>
      <StyledTitle level={3}>Political</StyledTitle>
      <StyledSvg
        viewBox="0 0 107 110"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <svg
          width={106}
          height={110}
          viewBox="0 0 106 110"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke="currentColor"
            strokeWidth={7}
            strokeLinecap="round"
            d="M52.5 3.5v7.213"
          />
          <path
            d="M87 31.5c0-3.6-3-5.5-6-5.5-1 0-3.3.5-4.5 2.5C73.7 44.5 65.667 48.833 62 49h-9v25.5h12v-15c15.5-1 22-23.5 22-28zM19 31.5c0-3.6 3-5.5 6-5.5 1 0 3.3.5 4.5 2.5C32.3 44.5 40.333 48.833 44 49h9v25.5H41v-15c-15.5-1-22-23.5-22-28z"
            fill="currentColor"
          />
          <path
            d="M53 49h9c3.667-.167 11.7-4.5 14.5-20.5 1.2-2 3.5-2.5 4.5-2.5 3 0 6 1.9 6 5.5 0 4.5-6.5 27-22 28v15H53M53 49v25.5M53 49h-9c-3.667-.167-11.7-4.5-14.5-20.5-1.2-2-3.5-2.5-4.5-2.5-3 0-6 1.9-6 5.5 0 4.5 6.5 27 22 28v15h12"
            stroke="currentColor"
            strokeWidth={0.5}
          />
          <circle cx={53} cy={33} r={13} fill="currentColor" />
          <path
            d="M2.5 80h101c1.2 0 1.5 1.333 1.5 2v7c0 1.6-1.333 2-2 2h-8.5v16c0 1.6-1.333 2-2 2h-79c-.667 0-2-.4-2-2V91H3c-.667 0-2-.4-2-2v-7c0-.667.3-2 1.5-2z"
            fill="currentColor"
            stroke="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M89.543 65.301a6 6 0 10-3.272 3.254C88.105 69.985 88.853 71.41 89 72v8h5v-8c-.314-1.57-1.633-4.971-4.457-6.699z"
            fill="currentColor"
          />
          <path
            d="M89.543 65.301l-.462-.192-.164.395.365.224.26-.427zm-3.272 3.254l.307-.394-.228-.178-.269.11.19.462zM89 72h.5v-.062l-.015-.06L89 72zm0 8h-.5v.5h.5V80zm5 0v.5h.5V80H94zm0-8h.5v-.05l-.01-.048L94 72zm-4.5-9c0 .748-.15 1.46-.419 2.11l.924.383c.319-.768.495-1.61.495-2.493h-1zM84 57.5a5.5 5.5 0 015.5 5.5h1a6.5 6.5 0 00-6.5-6.5v1zM78.5 63a5.5 5.5 0 015.5-5.5v-1a6.5 6.5 0 00-6.5 6.5h1zm5.5 5.5a5.5 5.5 0 01-5.5-5.5h-1a6.5 6.5 0 006.5 6.5v-1zm2.081-.407A5.481 5.481 0 0184 68.5v1c.87 0 1.7-.171 2.46-.482l-.379-.925zm-.118.857c1.772 1.38 2.438 2.717 2.552 3.171l.97-.242c-.181-.726-1.01-2.24-2.907-3.718l-.615.789zM88.5 72v8h1v-8h-1zm.5 8.5h5v-1h-5v1zm5.5-.5v-8h-1v8h1zm-.01-8.098c-.167-.837-.594-2.13-1.343-3.44-.75-1.31-1.838-2.666-3.343-3.587l-.522.853c1.319.806 2.302 2.015 2.997 3.23.695 1.216 1.084 2.408 1.23 3.14l.981-.196z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M15.457 65.301a6 6 0 113.272 3.254C16.895 69.985 16.148 71.41 16 72v8h-5v-8c.314-1.57 1.633-4.971 4.457-6.699z"
            fill="currentColor"
          />
          <path
            d="M15.457 65.301l.462-.192.164.395-.365.224-.26-.427zm3.272 3.254l-.307-.394.228-.178.269.11-.19.462zM16 72h-.5v-.062l.015-.06L16 72zm0 8h.5v.5H16V80zm-5 0v.5h-.5V80h.5zm0-8h-.5v-.05l.01-.048L11 72zm4.5-9c0 .748.15 1.46.419 2.11l-.924.383A6.483 6.483 0 0114.5 63h1zm5.5-5.5a5.5 5.5 0 00-5.5 5.5h-1a6.5 6.5 0 016.5-6.5v1zm5.5 5.5a5.5 5.5 0 00-5.5-5.5v-1a6.5 6.5 0 016.5 6.5h-1zM21 68.5a5.5 5.5 0 005.5-5.5h1a6.5 6.5 0 01-6.5 6.5v-1zm-2.081-.407A5.481 5.481 0 0021 68.5v1c-.87 0-1.7-.171-2.46-.482l.379-.925zm.118.857c-1.772 1.38-2.438 2.717-2.552 3.171l-.97-.242c.181-.726 1.01-2.24 2.907-3.718l.615.789zM16.5 72v8h-1v-8h1zm-.5 8.5h-5v-1h5v1zm-5.5-.5v-8h1v8h-1zm.01-8.098c.167-.837.594-2.13 1.343-3.44.75-1.31 1.838-2.666 3.343-3.587l.522.853c-1.319.806-2.302 2.015-2.997 3.23-.695 1.216-1.084 2.408-1.23 3.14l-.981-.196z"
            fill="currentColor"
          />
          <path
            stroke="currentColor"
            strokeWidth={7}
            strokeLinecap="round"
            d="M69.493 7.925l-4.568 5.583M34.507 7.925l4.568 5.583"
          />
        </svg>
      </StyledSvg>
      <StyledTitle level={3}>Programmer</StyledTitle>
    </Container>
  );
};

export default Brand;
