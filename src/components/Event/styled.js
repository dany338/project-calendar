import styled from 'styled-components';

export const Container = styled.div`
  box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.1);
  border-radius: 3px;

  .title {
    flex-direction: column;
    .icon {
      justify-content: flex-end;
    }
  }

  .icon {
    cursor: pointer;
  }
`;
