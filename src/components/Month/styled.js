import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  margin-bottom: 3px;

  .days {
    display: grid;
    grid-gap: 24px;
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  }

  .weeks {
    display: grid;
    grid-gap: 24px;
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  }
`;
