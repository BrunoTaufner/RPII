import React from 'react';
import styles from './Logo.module.css';

const Logo = () => (
  <div className={styles.Logo} data-testid="Logo">
    Logo Component:
    <label className={styles.label_q}>Q</label>
    <label>Qato Doacoes</label>
  </div>
);

Logo.propTypes = {};

Logo.defaultProps = {};

export default Logo;
