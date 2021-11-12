import React from 'react';
import styles from './UserItem.module.css';

const UserItem = ( props ) => {

      return (
            <p className={ styles.user }>
                  { props.user.name } ( { props.user.age } years old )
            </p>
      );
};

export default UserItem;