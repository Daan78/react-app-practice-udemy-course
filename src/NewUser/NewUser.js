import React from 'react';
import Wrapper from '../UI/Wrapper';
import Card from '../UI/Card';
import UserForm from './UserForm';

const NewUser = ( props ) => {
      const saveUserDataHandler = ( enteredUserData ) => {
            const userData = {
                  ...enteredUserData,
                  id: Math.random().toString() + new Date().getTime()
            };
            props.onAddUser( userData );
      };

      return (
            <section className="user-form">
                  <Wrapper>
                        <Card className="new-userform">
                              <UserForm
                                    onSaveUserData={ saveUserDataHandler }
                                    autoComplete="off"
                                    onError={ props.onError }
                              />
                        </Card>
                  </Wrapper>
            </section>
      );
}

export default NewUser;