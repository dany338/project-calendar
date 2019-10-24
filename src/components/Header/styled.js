import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  background: #ffffff;
  color: #3c4043;

  h4 {
    color: #3c4043;
  }

  .icon-left {
    display: flex;
    flex-direction: row;
    align-items: center;

    span {
      margin-left: 5px;
      cursor: pointer;
      color: #3c4043;
    }
  }

  .icon-right {
    display: flex;
    flex-direction: row;
    align-items: center;

    span {
      margin-left: 5px;
      cursor: pointer;
      color: #3c4043;
    }
  }
`;
