import React from 'react';
import Wrapper from '../UI/Wrapper';
import Card from '../UI/Card';
import ErrorOverlay from '../UI/ErrorOverlay'

import styles from './NewUserError.module.css';
import Button from '../UI/Button';

const NewUserError = ( props ) => {
      const clearErrorMessage = () => {
            props.setErrorMessage('');
      }

      return (
            <ErrorOverlay>
                  <Wrapper>
                        <Card className="overlay">
                              <h2 className={ styles.h2 }>Invalid Input</h2>
                              <p>{ props.errorMessage }</p>
                              <Button
                                    onClick={ clearErrorMessage }
                                    type="submit"
                                    className="btn-green__overlay"
                              >
                                    Okay
                              </Button>
                        </Card>
                  </Wrapper>
            </ErrorOverlay>
      )
}

export default NewUserError;