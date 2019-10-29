import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  margin-bottom: 3px;

  .header {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  .days {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  .weeks {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }
`;
