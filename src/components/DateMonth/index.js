import React  from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

/* Defined Constants */
import { searchReminder } from '../../config/const';

/* Dispatchers */
import { dateSelectedChange, eventActiveModal, remindersListActiveModal } from '../../dispatchers';

/* Style Components */
import { Container } from './styled';

const DateMonth = ({ dateWeek, currentDate, dateSelected, data, onDateSelectedChange, onEventActiveModal, onRemindersListActiveModal }) => {
  const { dayMonthWeek, monthWeek, yearMonthWeek, dateMonthWeek } = dateWeek;
  const { month } = currentDate;

  const dayCurrent = dateSelected.getDate();
  const monthCurrent = dateSelected.getMonth();
  const yearCurrent = dateSelected.getFullYear();
  const classSelected = ((dayMonthWeek === dayCurrent) && (monthWeek === monthCurrent) && (yearMonthWeek === yearCurrent)) ? 'selected' : '';
  const isDayMonthCurrent = (monthWeek === month);
  const countReminders = searchReminder(data, dayMonthWeek, monthWeek, yearMonthWeek);

  const handleCurrentDateChange = (e) => {
    onDateSelectedChange(dateMonthWeek)
    e.stopPropagation();
  };

  const handleAddEvent = (e) => {
    onEventActiveModal();
    e.stopPropagation();
  }

  const handleOpenModalReminder = (e) => {
    onRemindersListActiveModal();
    e.stopPropagation();
  }

  return (
    <Container dayMonthCurrent={isDayMonthCurrent} className={classSelected} onClick={(e) => handleCurrentDateChange(e)}>
      <div>
        {dayMonthWeek}
      </div>
      <div className="add-event">
        {classSelected && (
          <span className="icon" onClick={(e) => handleAddEvent(e)} title="Add Event">
            <i className="far fa-calendar-plus"></i>
          </span>
        )}
        {(countReminders.length > 0) && (
          <span className="icon" onClick={(e) => handleOpenModalReminder(e)} title={`Your have ${countReminders.length} reminders in this date`}>
            <i className="fas fa-user-clock"></i>
          </span>
        )}
      </div>
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
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      city: PropTypes.string,
      dateReminder: PropTypes.instanceOf(Date),
      time: PropTypes.string,
      color: PropTypes.string,
    })
  ),
  onDateSelectedChange: PropTypes.func.isRequired,
  onEventActiveModal: PropTypes.func.isRequired,
  onRemindersListActiveModal: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  const currentDate = (typeof state.get('calendarReducer').get('currentDate').dayWeek === 'undefined') ? state.get('calendarReducer').get('currentDate').toJS() : state.get('calendarReducer').get('currentDate');
  const data = (!Array.isArray(state.get('eventReducer').get('data'))) ? state.get('eventReducer').get('data').toArray() : state.get('eventReducer').get('data');
  return {
    currentDate,
    dateSelected: state.get('calendarReducer').get('dateSelected'),
    data,
  }
};

const mapDispatchToProps = dispatch => ({
  onDateSelectedChange: dateSelected => dispatch(dateSelectedChange(dateSelected)),
  onEventActiveModal: () => dispatch(eventActiveModal()),
  onRemindersListActiveModal: () => dispatch(remindersListActiveModal()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(DateMonth));
