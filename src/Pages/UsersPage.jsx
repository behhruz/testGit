import React, { useEffect, useState } from 'react'

const UsersPage = () => {
    const [user, setUsers] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/users/')
            .then((res) => res.json())
            .then((res) => setUsers(res))
    }, [])

    console.log(user);

    return (
        <div>UsersPage</div>
    )
}

export default UsersPage