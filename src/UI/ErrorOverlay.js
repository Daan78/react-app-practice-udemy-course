import React from 'react';
import styles from '../UI/ErrorOverlay.module.css';

const ErrorOverlay = ( props ) => {
      return (
            <section className={ styles.overlay }>
                  { props.children }
            </section>
      )
}

export default ErrorOverlay;