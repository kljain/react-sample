import React from 'react';
import { connect } from 'react-redux';
import { logoutUser } from '../redux/actions/authActions';

const Dashboard = ({ user, logoutUser }) => {
  return (
    <div>
      <h1>Welcome {user?.email}</h1>
      <button onClick={logoutUser}>Logout</button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.auth.user,
});

export default connect(mapStateToProps, { logoutUser })(Dashboard);