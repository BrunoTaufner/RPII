import React from 'react';
import PropTypes from 'prop-types';
import styles from './Carousel.module.css';

const Carousel = () => (
  <div className={styles.Carousel} data-testid="Carousel">
    Carousel Component
  </div>
);

Carousel.propTypes = {};

Carousel.defaultProps = {};

export default Carousel;
