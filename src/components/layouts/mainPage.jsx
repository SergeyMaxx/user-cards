import React from 'react';
import User from '../user';
import { users } from '../../api/fake.api';

function MainPage() {
  return (
    <div className="">
      <h1>Наша команда</h1>
      <ul className="flex flex-wrap gap-10">
        {users.map(u => <User key={u.id} userData={u} />)}
      </ul>
    </div>
  );
}

export default MainPage;
