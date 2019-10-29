import React  from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

/* Defined Constants */
import { daysWeek } from '../../config/const';

/* Style Components */
import { Container } from './styled';

const Days = ({ day }) => {
  return (
    <Container>
      {daysWeek[day]}
    </Container>
  )
}

Days.propTypes = {
  day: PropTypes.number.isRequired,
};

// const mapStateToProps = state => {
//   return null
// };

// const mapDispatchToProps = dispatch => {
//   return null
// };

export default connect(
  null,
  null
)(withRouter(Days));
