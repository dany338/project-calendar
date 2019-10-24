import styled from 'styled-components';

const LinkStyled = styled.a`
  pointer-events: ${(props) => props.active ? 'none' : 'auto'}
`;

export { LinkStyled };
