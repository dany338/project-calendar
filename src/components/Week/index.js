import React  from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

/* Defined Constants */
import { calculateDatesOfWeek } from '../../config/const';

/* Components */
import DateMonth from '../DateMonth';

/* Style Components */
import { Container } from './styled';

const Week = ({ start, end, currentDate }) => {
  const { month, year } = currentDate;
  const arrDatesWeek = calculateDatesOfWeek(start, end, month, year);

  return (
    <Container>
      {Array.from({ length: 7 }, (_, index) => (
          <DateMonth dateWeek={arrDatesWeek[index]}  key={index}/>
        ))
      }
    </Container>
  )
};

Week.propTypes = {
  start: PropTypes.number.isRequired,
  end: PropTypes.number.isRequired,
  currentDate: PropTypes.shape({
    dayWeek: PropTypes.number,
    dayMonth: PropTypes.number,
    month: PropTypes.number,
    year: PropTypes.number,
    dateNow: PropTypes.instanceOf(Date),
  }),
};

const mapStateToProps = state => {
  const currentDate = (typeof state.get('calendarReducer').get('currentDate').dayWeek === 'undefined') ? state.get('calendarReducer').get('currentDate').toJS() : state.get('calendarReducer').get('currentDate');
  // console.log('mapStateToProps week', currentDate);
  return {
    currentDate,
  }
};

// const mapDispatchToProps = dispatch => {
//   return null
// };

export default connect(
  mapStateToProps,
  null
)(withRouter(Week));
