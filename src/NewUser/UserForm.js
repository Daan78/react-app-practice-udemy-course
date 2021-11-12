import React, { useState } from 'react';
import Button from '../UI/Button';
import styles from './UserForm.module.css';

const NewUser = ( props ) => {
      const [ enteredName, setEnteredName ] = useState( '' );
      const [ enteredAge, setEnteredAge ] = useState( '' );

      const nameChangeHandler = event => {
            setEnteredName( event.target.value );
      }

      const ageChangeHandler = event => {
            setEnteredAge( event.target.value );
      }
      
      const onSubmitHandler = ( event ) => {
            event.preventDefault();

            const userData = {
                  name: enteredName,
                  age: enteredAge
            };

            if ( userData.age === '' || userData.name === '' ) {
                  props.onError( 'Please, enter a valid name and age' );
            } else if ( userData.age < 1 ) {
                  props.onError( 'Please, enter a valid age ( > 0 )' );
            }

            if ( userData.name !== '' && userData.age !== '' && userData.age > 0 ) {
                  props.onSaveUserData( userData );
                  props.onError( '' );

                  setEnteredName( '' );
                  setEnteredAge( '' );
            } 
            
      };

      return (

            <form onSubmit={ onSubmitHandler } autoComplete={ props.autoComplete }>

                  <div className={ styles[ 'form-control' ] }>
                        <label htmlFor="username">Username</label>
                        <input 
                              type="text"
                              id="username"
                              value={ enteredName }
                              onChange={ nameChangeHandler }
                        />
                  </div>

                  <div className={ styles[ 'form-control' ] }>
                        <label htmlFor="age">Age</label>
                        <input 
                              type="number"
                              id="age"
                              value={ enteredAge }
                              onChange={ ageChangeHandler }
                        />
                  </div>

                  <Button type="submit" className="btn-green">Add User</Button>
            </form>
      );
}

export default NewUser;