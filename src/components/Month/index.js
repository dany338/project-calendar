import React  from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import dayjs from 'dayjs';

/* Defined Constants */
import { getWeeksInMonth } from '../../config/const';

/* Components */
import Week from '../Week';
import Days from '../Days';
import Header from '../Header';

/* Style Components */
import { Container } from './styled';

const Month = ({ currentDate }) => {
  const { month, year } = currentDate;
  const weeks = getWeeksInMonth(month, year);

  return (
    <Container>
      <div className="header">
        <Header />
      </div>
      <div className="days">
        {Array.from({ length: 7 }, (_, index) => (
          <Days day={index} key={index}/>
        ))}
      </div>
      <div className="weeks">
        {weeks.map((week, index) => (
            <Week key={index} {...week} />
        ))}
      </div>
    </Container>
  )
}

Month.propTypes = {
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
  // console.log('mapStateToProps month', currentDate);
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
)(withRouter(Month));
