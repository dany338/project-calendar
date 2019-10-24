import React  from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

/* Defined Constants */
import { monthsYear } from '../config/const';

/* Components */
import Week from '../Week';
import Days from '../Days';
import Header from '../Header';

/* Style Components */
import { Container } from './styled';

/* Defined Constants */
const now = new Date();

const Month = (props) => {
  return (
    <Container>
      <div>
        <Header month={monthsYear[now.getMonth()]} />
      </div>
      <div className="days">
        {Array.from({ length: 7 }, (_, index) => (
            <Days day={index} key={index}/>
          ))
        }
      </div>
      <div className="weeks">
        {Array.from({ length: 5 }, (_, index) => (
            <Week weeks={index} key={index}/>
          ))
        }
      </div>
    </Container>
  )
}

Month.propTypes = {

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
)(withRouter(Month));
