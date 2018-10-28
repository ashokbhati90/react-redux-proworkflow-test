import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from '../_actions';
import { Projects } from '../_constants';
class HomePage extends React.Component {
    componentDidMount() {
        this.props.dispatch(userActions.getAll());
    }

    handleDeleteUser(id) {
        return (e) => this.props.dispatch(userActions.delete(id));
    }

    render() {
        const { user, users } = this.props;
        return (
            <div>
                <div class="header">
                    <a href="#default" class="logo">Hi {user.firstName}!</a>
                    <div class="header-right">
                    <Link to="/login">Logout</Link>
                    </div>
                </div>
            <div className="row">
            { Projects.map((element)=>{
                return(
                    <div className="column">
                    <div className="card">
                        <div className="container">
                            <h2>{element.title} {element.number}</h2>
                            <p className="title">Manager: {element.manager.fullname}</p>
                            <p><b>Start Date: </b>{element.startdate} </p>
                            <p><b>Due Date:</b> {element.duedate}</p>
                            <p><b>Company:</b> {element.company.name}</p>
                        </div>
                    </div>
                </div>
                );
            })}
            </div>
            </div>
            );
    }
}

function mapStateToProps(state) {
    const { users, authentication } = state;
    const { user } = authentication;
    return {
        user,
        users
    };
}

const connectedHomePage = connect(mapStateToProps)(HomePage);
export { connectedHomePage as HomePage };