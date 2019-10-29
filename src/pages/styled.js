import styled from 'styled-components';

const Container = styled.div`
  box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const LinkStyled = styled.a`
  pointer-events: ${(props) => props.active ? 'none' : 'auto'}
`;

export { Container, LinkStyled };
