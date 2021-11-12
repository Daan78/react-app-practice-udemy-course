import React from 'react';
import Wrapper from '../UI/Wrapper';
import Card from '../UI/Card';
import UserItem from './UserItem';

const Users = ( props ) => {
      const userItems = props.users.map( user => { 
            return (
                  <UserItem user={ user } key={ user.id } />
            )
      });

      return (
            <section className="users">
                  <Wrapper>
                        <Card className="users-overview">
                              { userItems }
                        </Card>
                  </Wrapper>
            </section>
      );
};

export default Users;