import React  from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

/* Defined Constants */
import { monthsYear, daysWeek } from '../../config/const';

/* Dispatchers */
import { currentDateChange } from '../../dispatchers';

/* Style Components */
import { Container } from './styled';

const Header = ({ currentDate, dateSelected, onSetMonth }) => {
  const handleNextMonth = direction => onSetMonth(direction);
  const { month, year, dayWeek, dayMonth } = currentDate;
  const dayCurrent = dateSelected.getDate();
  const dayCurrentWeek = dateSelected.getDay();
  const monthCurrent = dateSelected.getMonth();
  const yearCurrent = dateSelected.getFullYear();

  return (
    <Container>
      <div>
        <h4>{`${monthsYear[month]} of ${year}`}</h4>
        <h6>{`Date Selected: ${daysWeek[dayCurrentWeek]}, ${dayCurrent} of ${monthsYear[monthCurrent]} of ${yearCurrent}`}</h6>
      </div>
      <div className="icon-left">
        <span className="icon" onClick={() => handleNextMonth('<')}>
          <i className="fas fa-angle-left"></i>
        </span>
      </div>
      <div className="icon-right">
        <span className="icon" onClick={() => handleNextMonth('>')}>
          <i className="fas fa-angle-right"></i>
        </span>
      </div>
    </Container>
  )
}

Header.propTypes = {
  currentDate: PropTypes.shape({
    dayWeek: PropTypes.number.isRequired,
    dayMonth: PropTypes.number.isRequired,
    month: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    dateNow: PropTypes.instanceOf(Date),
  }),
  dateSelected: PropTypes.instanceOf(Date),
  onSetMonth: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  const currentDate = (typeof state.get('calendarReducer').get('currentDate').dayWeek === 'undefined') ? state.get('calendarReducer').get('currentDate').toJS() : state.get('calendarReducer').get('currentDate');
  return {
    currentDate,
    dateSelected: state.get('calendarReducer').get('dateSelected'),
  }
};

const mapDispatchToProps = dispatch => ({
  onSetMonth: direction => dispatch(currentDateChange(direction)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Header));
