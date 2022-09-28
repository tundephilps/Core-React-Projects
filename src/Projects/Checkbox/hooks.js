import { useEffect, useState } from "react";
import { fetchUsers } from "./api";
export const useUsers = () => {
    // TODO: fetch users using fetchUsers API and return them
    const [loading, setLoading] = useState(false);
    const [users, setUsers] = useState([]);
    useEffect(() => {
        setLoading(true);
        fetchUsers().then(users => {
            setUsers(users);
            setLoading(false);
        }).catch(error => {
            console.log("Error fetching users", error);
        });
    }, []);
    return { users, loading };
};
