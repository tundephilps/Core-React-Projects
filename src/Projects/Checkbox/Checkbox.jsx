import React, { useMemo, useState } from 'react';

import UserList from './UserList';
import { useUsers } from './hooks';


function Checkbox() {
    const { users, loading } = useUsers();
    const [selectedIds, setSelectedIds] = useState([]);
    const selectedUsers = useMemo(() => users.filter(user => selectedIds.includes(user.id))
    .map(user => user.firstName).join(', '), [users, selectedIds]);
    return (<div className="App">
      <h6>
The application shows a list of selectable users. When selecting users, a greeting message is displayed with their names. The recommanded approach is:
Implement the useUsers hook in hooks.Js, so that it returns the list of users sent by fetchUsers
Pass the users returned by the hook to the UserList component in Checkbox.js
Implement the UserList component in UserList.js, so that it renders the specified users with checkboxes
Display the name of the selected users in Checkbox.js
          </h6>
      <header className="App-header">
      
      </header>
      
      <main>
        <div className="container">
          
          <p>
            Who would you like to greet?
          </p>
          <UserList users={users} loading={loading} onSelect={setSelectedIds} selectedIds={selectedIds}/>
          <p data-testid="greeting">
            {selectedUsers ? `👋 Well, hello ${selectedUsers}` : ''}
          </p>
        </div>
      </main>
    </div>);
}
export default Checkbox;
