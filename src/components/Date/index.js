import React  from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

/* Style Components */
import { Container } from './styled';

const Date = ({ dates }) => {
  return (
    <Container>
      {dates}
    </Container>
  )
}

Date.propTypes = {
  dates: PropTypes.string.isRequired,
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
)(withRouter(Date));
