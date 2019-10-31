import React, { useState, useEffect }  from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

/* Defined Constants */
import { monthsYear, daysWeek, searchReminder, searchReminderByTitle } from '../../config/const';

/* Dispatchers */
import { remindersListActiveModal, eventActiveModal, reminderSelectedChange } from '../../dispatchers';

import { Container } from './styled';

const DateReminders = ({ activeList, dateSelected, dataFiltered, onEventActiveModal, onRemindersListActiveModal, onReminderSelectedChange }) => {
  const dayCurrentWeek = dateSelected.getDay();
  const dayMonthCurrent = dateSelected.getDate();
  const monthCurrent = dateSelected.getMonth();
  const yearCurrent = dateSelected.getFullYear();

  const [search, setSearch] = useState('');
  const [isFiltered, setIsFiltered] = useState(false);
  const [dataReminders, setDataReminders] = useState([]);
  const [dataRemindersBackup, setDataRemindersBackup] = useState([]);
  const [dataFilteredByTitle, setDataFilteredByTitle] = useState([]);


  const handleCloseModal = (e) => {
    onRemindersListActiveModal();
    onEventActiveModal();
    e.stopPropagation();
  };

  const handleEditRemeinder = (e, id) => {
    onReminderSelectedChange(id);
    onRemindersListActiveModal();
    onEventActiveModal();
    e.stopPropagation();
  };

  const handleSearchChange = (event) => {
    const { value } = event.target;
    const newValue = '' + value;
    // console.log('value', newValue);
    setSearch(newValue);
    setIsFiltered(false);
    event.stopPropagation();
  }

  useEffect(() => {
    console.log('useEffect DateReminders', dataReminders, dataFilteredByTitle, search, isFiltered);
    if((dataReminders.length !== dataFiltered.length) && !isFiltered) {
      console.log('entro 1', dataReminders);
      setDataReminders(dataFiltered);
      setDataRemindersBackup(dataFiltered);
    } else if((search.length > 2) && !isFiltered) {
      setIsFiltered(true);
      const newDataReminders = searchReminderByTitle(dataRemindersBackup, search);
      setDataFilteredByTitle(newDataReminders);
      setDataReminders(newDataReminders);
      console.log('entro 2', dataReminders);
    }
  }, [search, isFiltered, dataFiltered, dataReminders, dataFilteredByTitle]);

  return (
    <Container>
      <div className={`modal ${activeList && ('is-active')}`}>
        <div className="modal-background"></div>
        <div className="modal-card">
          <section className="modal-card-body redonde" style={{ backgroundColor: 'transparent' }}>
            <article className="panel is-primary" style={{ backgroundColor: 'white' }}>
              <p className="panel-heading head">
                {`Reminders ${daysWeek[dayCurrentWeek]}, ${dayMonthCurrent} of ${monthsYear[monthCurrent]} of ${yearCurrent}`}
                <button type="button" className="delete" style={{ float: 'right' }} aria-label="close" onClick={(e) => handleCloseModal(e)}></button>
              </p>
              <div className="panel-block">
                <p className="control has-icons-left">
                  <input className="input is-primary" type="text" value={search} placeholder="Search Reminder enter min 3 letters" onChange={(e) => handleSearchChange(e)} />
                  <span className="icon is-left">
                    <i className="fas fa-search" aria-hidden="true"></i>
                  </span>
                </p>
              </div>
              {dataReminders.length > 0 && (
                dataReminders.map(({ title, _id }, index) => (
                  <a key={index} className="panel-block is-active" href="#" onClick={(e) => handleEditRemeinder(e, _id)}>
                    <span className="panel-icon">
                      <i className="fas fa-book" aria-hidden="true"></i>
                    </span>
                    {title}
                  </a>
                ))
              )}
              <button type="button" className="button" onClick={(e) => handleCloseModal(e)}>Cancel</button>
            </article>
          </section>
        </div>
      </div>
    </Container>
  )
}

DateReminders.propTypes = {
  activeList: PropTypes.oneOf([true, false]).isRequired,
  dateSelected: PropTypes.instanceOf(Date),
  dataFiltered: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      city: PropTypes.string,
      dateReminder: PropTypes.instanceOf(Date),
      time: PropTypes.string,
      color: PropTypes.string,
    })
  ),
  onReminderSelectedChange: PropTypes.func.isRequired,
  onEventActiveModal: PropTypes.func.isRequired,
  onRemindersListActiveModal: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  const data = (!Array.isArray(state.get('eventReducer').get('data'))) ? state.get('eventReducer').get('data').toArray() : state.get('eventReducer').get('data');
  const dateSelected = new Date(state.get('calendarReducer').get('dateSelected'));
  const dayCurrentWeek = dateSelected.getDay();
  const dayMonthCurrent = dateSelected.getDate();
  const monthCurrent = dateSelected.getMonth();
  const yearCurrent = dateSelected.getFullYear();
  const dataFiltered = searchReminder(data, dayMonthCurrent, monthCurrent, yearCurrent);

  return {
    activeList: state.get('eventReducer').get('activeList'),
    dateSelected,
    dataFiltered,
  }
};

const mapDispatchToProps = dispatch => ({
  onReminderSelectedChange: reminderSelected => dispatch(reminderSelectedChange(reminderSelected)),
  onEventActiveModal: () => dispatch(eventActiveModal()),
  onRemindersListActiveModal: () => dispatch(remindersListActiveModal()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(DateReminders));
