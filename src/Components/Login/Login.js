// import axios from "axios";
// import { useEffect } from "react";

const UserLogin = (props) => {
    // console.log("this.props.location.state");
    console.log(props.location.state);
    /* useEffect(() => {
        axios.get(`http://localhost:3001/users/all`).then((response) => {
            console.log("response");
            console.log(response);
        }, (error) => {
            console.log("error");
            console.log(error);
        })
    }) */
    return (
        <form style={{width:'600px', margin:'0 auto', marginTop: '13%'}}>
            <h2>{props.location.state.from}</h2>
            <div className="form-group">
                <input type="email" width="40%" className="form-control" placeholder="Enter email" />
            </div>

            <div className="form-group">
                <input type="password" className="form-control" placeholder="Enter password" />
            </div>

            <button type="submit" className="btn btn-primary btn-block">Log in</button>
        </form>
    )
}

export default UserLogin;