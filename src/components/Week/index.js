import React  from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

/* Components */
import Date from '../Date';

/* Style Components */
import { Container } from './styled';

const calculateDates = weeks => {
  return 0;
};

const Week = ({ weeks }) => {
  const dates = calculateDates(weeks);

  return (
    <Container>
      {Array.from({ length: 7 }, (_, index) => (
          <Date dates={dates} key={index}/>
        ))
      }
    </Container>
  )
};

Week.propTypes = {
  weeks: PropTypes.number.isRequired,
};

const mapStateToProps = state => {
  return null
};

const mapDispatchToProps = dispatch => {
  return null
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Week));
