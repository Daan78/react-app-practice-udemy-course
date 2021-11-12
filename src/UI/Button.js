import React from 'react';
import styles from './Button.module.css';

const Button = ( props ) => {
      const classes = styles.btn + ' ' + styles[ props.className ];

      const closeModal = ( event ) => {
            event.preventDefault();
            props.onClick();
      }

      if ( props.onClick ) {
            return (

                  <button
                        onClick={ closeModal }
                        type={ props.type }
                        className={ classes }
                  >
                        { props.children }
                  </button>
            );
      }

      return (

            <button 
                  type={ props.type }
                  className={ classes }
            >
                  { props.children }
            </button>
      );
};

export default Button;