import React  from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

/* Dispatchers */
import { dateSelectedChange } from '../../dispatchers';

/* Style Components */
import { Container } from './styled';

const DateMonth = ({ dateWeek, currentDate, dateSelected, onDateSelectedChange }) => {
  const { dayMonthWeek, monthWeek, yearMonthWeek, dateMonthWeek } = dateWeek;
  const { month } = currentDate;

  const dayCurrent = dateSelected.getDate();
  const monthCurrent = dateSelected.getMonth();
  const yearCurrent = dateSelected.getFullYear();
  const classSelected = ((dayMonthWeek === dayCurrent) && (monthWeek === monthCurrent) && (yearMonthWeek === yearCurrent)) ? 'selected' : '';
  const isDayMonthCurrent = (monthWeek === month);

  const handleCurrentDateChange = () => onDateSelectedChange(dateMonthWeek);

  return (
    <Container dayMonthCurrent={isDayMonthCurrent} className={classSelected} onClick={() => handleCurrentDateChange()}>
      {dayMonthWeek}
    </Container>
  )
}

DateMonth.propTypes = {
  dateWeek: PropTypes.shape({
    dayMonthWeek: PropTypes.number.isRequired,
    monthWeek: PropTypes.number.isRequired,
    yearMonthWeek: PropTypes.number.isRequired,
    dateMonthWeek: PropTypes.instanceOf(Date),
  }),
  currentDate: PropTypes.shape({
    dayWeek: PropTypes.number,
    dayMonth: PropTypes.number,
    month: PropTypes.number,
    year: PropTypes.number,
    dateNow: PropTypes.instanceOf(Date),
  }),
  dateSelected: PropTypes.instanceOf(Date),
  onDateSelectedChange: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  const currentDate = (typeof state.get('calendarReducer').get('currentDate').dayWeek === 'undefined') ? state.get('calendarReducer').get('currentDate').toJS() : state.get('calendarReducer').get('currentDate');
  // console.log('mapStateToProps DateMonth', currentDate);
  return {
    currentDate,
    dateSelected: state.get('calendarReducer').get('dateSelected'),
  }
};

const mapDispatchToProps = dispatch => ({
  onDateSelectedChange: dateSelected => dispatch(dateSelectedChange(dateSelected)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(DateMonth));
