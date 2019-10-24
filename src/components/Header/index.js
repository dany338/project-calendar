import React  from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

/* Dispatchers */
import { setMonth } from '../dispatchers';

/* Style Components */
import { Container } from './styled';

const Header = ({ month, monthCalendar, onSetMonth }) => {
  const handleNextMonth = direction => onSetMonth(direction);

  return (
    <Container>
      <div>
        <h5>{month}</h5>
      </div>
      <div className="icon-left">
        {(monthCalendar > 0) && (
          <span className="icon" onClick={() => handleNextMonth('<')}>
            <i class="fas fa-angle-left"></i>
          </span>
        )}
      </div>
      <div className="icon-right">
        {(monthCalendar < 11) && (
          <span className="icon" onClick={() => handleNextMonth('>')}>
            <i class="fas fa-angle-right"></i>
          </span>
        )}
      </div>
    </Container>
  )
}

Header.propTypes = {
  month: PropTypes.string.isRequired,
  monthCalendar: PropTypes.string.isRequired,
  onSetMonth: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  return {
    monthCalendar: state.get('calendarReducer').get('month'),
  }
};

const mapDispatchToProps = dispatch => ({
  onSetMonth: direction => dispatch(setMonth(direction)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Header));
