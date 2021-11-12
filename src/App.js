import React, { useState } from 'react';

import NewUser from './NewUser/NewUser';
import Users from './Users/Users';
import NewUserError from './NewUser/NewUserError';

const DUMMY_USERS = [
      {
            id: 'u1',
            name: 'Max',
            age: 31
      },
      {
            id: 'u2',
            name: 'Tanya',
            age: 27
      }
]

function App() {
      const [ users, setUsers ] = useState( DUMMY_USERS );
      const [ error, setError ] = useState( '' );

      const addUserHandler = user => {
            setUsers( prevUsers => {
                  return [ user, ...prevUsers ];
            });
      }

      const onErrorHandler = ( message ) => {
            if ( message !== '' ) {
                  setError( message );
            }
      }

      return (
            <div>
                  
                  <NewUser onAddUser={ addUserHandler } onError={ onErrorHandler }/>
                  <Users users={ users } />
                  { error && <NewUserError
                        errorMessage={ error }
                        setErrorMessage={ setError } />
                  }
                  { error && <div className="shadowoverlay"></div> }
            </div>
      );
};

export default App;