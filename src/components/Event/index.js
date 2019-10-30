import React, { useEffect }  from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import useForm from 'react-hook-form';

/* Defined Constants */
import { monthsYear, daysWeek, wait } from '../../config/const';

/* Dispatchers */
import { eventActiveModal, eventFormChange } from '../../dispatchers';

import { Container } from './styled';

const Event = ({ active, dateSelected, onEventActiveModal, onEventFormChange }) => {
  const { register, handleSubmit, watch, reset, errors } = useForm();

  const dayCurrentWeek = dateSelected.getDay();
  const dayMonthCurrent = dateSelected.getDate();
  const monthCurrent = dateSelected.getMonth();
  const yearCurrent = dateSelected.getFullYear();
  const handleCloseModal = (e) => { onEventActiveModal(); e.stopPropagation(); };

  const onSubmit = async (data, e) => {
    console.log(data);
    data.dateReminder = new Date(data.dateReminder);
    onEventFormChange(data);
    await wait(2000);
    e.target.reset();
    onEventActiveModal();
    e.stopPropagation();
  };

  console.log(watch('title'));

  useEffect(() => {
    console.log('useEffect Event', active);
  }, [active]);

  return (
    <Container>
      <div className={`modal ${active && ('is-active')}`}>
        <div className="modal-background"></div>
        <div className="modal-card">
          <form onSubmit={handleSubmit(onSubmit)}>
            <header className="modal-card-head">
              <p className="modal-card-title title">
                <span>
                  {`Reminder for date: ${daysWeek[dayCurrentWeek]}, ${dayMonthCurrent} of ${monthsYear[monthCurrent]} of ${yearCurrent}`}<br />
                  <span className="icon">
                    <i className="far fa-calendar-plus"></i>
                  </span>
                </span>
              </p>
              <button type="button" className="delete" aria-label="close" onClick={(e) => handleCloseModal(e)}></button>
            </header>
            <section className="modal-card-body">
              <input name="dateReminder" type="hidden" value={dateSelected} ref={register}/>
              <div className="field">
                <label className="label">Title</label>
                <div className="control">
                  <input name="title" className="input" type="text" placeholder="Enter a title" ref={register({ required: true, maxlength: 30 })} />
                </div>
                {errors.title && (<p className="help is-danger">Title is required!</p>)}
              </div>
              <div className="field">
                <label className="label">Time</label>
                <div className="control">
                  <input name="time" className="input" type="text" placeholder="Enter a time" ref={register({ required: true, pattern: /^([0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/ })} />
                </div>
                <p className="help">Format Time: HH:MM</p>
                {errors.time && (<p className="help is-danger">Time is required & format valid!</p>)}
              </div>
              <div className="field">
                <label className="label">Color</label>
                <div className="control">
                  <div className="select">
                    <select name="color" ref={register({ required: true })}>
                      <option value="">Select your color...</option>
                      <option value="yellow" style={{ color: 'yellow' }}>yellow</option>
                      <option value="blue" style={{ color: 'blue' }}>blue</option>
                      <option value="red" style={{ color: 'red' }}>red</option>
                      <option value="green" style={{ color: 'green' }}>green</option>
                    </select>
                  </div>
                </div>
                {errors.color && (<p className="help is-danger">Color is required!</p>)}
              </div>
              <div className="field">
                <label className="label">City</label>
                <div className="control">
                  <div className="select">
                    <select name="city" ref={register({ required: true })}>
                      <option>Select your city...</option>
                      <option value="Bogota" style={{ color: '#f14668' }}>Bogota</option>
                      <option value="Manizales" style={{ color: '#f14668' }}>Manizales</option>
                      <option value="Medellin" style={{ color: '#f14668' }}>Medellin</option>
                      <option value="Quito" style={{ color: '#f14668' }}>Quito</option>
                    </select>
                  </div>
                </div>
                {errors.city && (<p className="help is-danger">City is required!</p>)}
              </div>
            </section>
            <footer className="modal-card-foot">
              <input type="submit" className="button is-link" value="Save" />
              <button type="button" className="button" onClick={(e) => handleCloseModal(e)}>Cancel</button>
            </footer>
          </form>
        </div>
      </div>
    </Container>
  )
}

Event.propTypes = {
  active: PropTypes.oneOf([true, false]).isRequired,
  dateSelected: PropTypes.instanceOf(Date),
  onEventActiveModal: PropTypes.func.isRequired,
  onEventFormChange: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  active: state.get('eventReducer').get('active'),
  dateSelected: state.get('calendarReducer').get('dateSelected'),
});

const mapDispatchToProps = dispatch => ({
  onEventActiveModal: () => dispatch(eventActiveModal()),
  onEventFormChange: eventForm => dispatch(eventFormChange(eventForm)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Event));
