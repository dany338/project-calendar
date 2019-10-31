import styled from 'styled-components';

export const Container = styled.div`
  box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.1);
  border-radius: 3px;

  .title {
    flex-direction: row;
    .icon {
      justify-content: flex-end;
    }
  }

  .redonde {
    border-radius: 6px;
    box-shadow: 0 0.5em 1em -0.125em rgba(10, 10, 10, 0.1), 0 0px 0 1px rgba(10, 10, 10, 0.02);
  }

  .head {
    justify-content: space-between;
  }
`;
