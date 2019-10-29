import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

/* Components */
import Month from '../components/Month';
import Event from '../components/Event';

/* Style Components */
import { Container } from './styled';

class Calendar extends Component {
  state = {
    classError: '',
  }

  componentDidMount() {
    console.log('componentDidMount calendar');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate calendar', prevProps, prevState);
  }

  render() {
    return (
      <Container>
        <Month />
        <Event />
      </Container>
    )
  }
}

Calendar.propTypes = {
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
  // console.log('mapStateToProps calendar', currentDate);
  return {
    currentDate,
  }
};

export default connect(
  mapStateToProps
)(withRouter(Calendar));
