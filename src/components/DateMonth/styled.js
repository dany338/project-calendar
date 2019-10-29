import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  width: 120px;
  height: auto;
  background: #ffffff;
  box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  padding: 12px 12px 24px;
  margin: 20px;
  color: ${(props) => (props.dayMonthCurrent) ? '#3c4043' : '#c3c3c3' };

  .add-event {
    justify-content: flex-end;
  }

  &.selected {
    background-color: #00000014;
    background-image: linear-gradient(-180deg,rgba(10,212,250,0.86) 0%,rgba(37,187,241,0.86) 100%);
    box-shadow: 0 0 40px rgba(0,0,0,.4);
    transform: scale(1.1);
    border: 0;
    justify-content: space-between;
    cursor: pointer;
    color: #FFFFFF;

    .icon:hover {
      color: #000000;
    }
  }

  &:hover {
    border: 1px solid rgba(255,110,5,.5);
    transform: scale(1.025);
  }
`;
