import React, {useContext} from 'react'
import { Navigate } from 'react-router-dom';
import { UserContext } from '../../App';

function PrivateRoute({ children }) {
    const { userData } = useContext(UserContext);

    return userData ? children : <Navigate to="/landing" />;
}

export default PrivateRoute