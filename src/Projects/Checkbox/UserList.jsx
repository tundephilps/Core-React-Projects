import { useCallback } from "react";
import './UserList.css';


const UserList = ({ users = [], selectedIds = [], onSelect = f => f, loading }) => {
    const onChange = useCallback((id) => {
        if (selectedIds.includes(id)) {
            onSelect(selectedIds.filter(selectedId => selectedId !== id));
        }
        else {
            onSelect([...selectedIds, id]);
        }
    }, [selectedIds, onSelect]);
    return (<div data-testid="users" className="UserList">
        {!loading && users.map((user, i) => (<label key={i}><input type="checkbox" data-testid={user.id} onChange={() => onChange(user.id)} checked={selectedIds.includes(user.id)}/>{`${user.firstName} ${user.lastName}`}</label>))}
        {loading && <div data-testid="loader" className="loading-container">loading...</div>}
    </div>);
};
export default UserList;
