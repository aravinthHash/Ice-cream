import UserLogin from '../Login/Login';
import './admin.css';

const Admin = () => {
    return (
        <div>
            <div style={{width:'600px', margin:'0 auto', marginTop: '13%'}}>
            <h3>Admin Login</h3>
                <UserLogin></UserLogin>
            </div>
        </div>
    )
}

export default Admin;