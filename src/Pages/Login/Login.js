import { Alert, AlertTitle } from '@mui/material';
import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';
import bgServiceDetails from '../../car-service-header.jpg';

const Login = () => {
    const [isLogin, setIsLogin] = useState(false);
    const handleToggle = (e) => {
        setIsLogin(e.target.checked);
    }

    const { getGoogleSignIn, getGithubSignIn, getEmailSignUp, getEmailSignIn, getName, getEmail, getPassword, getVerifyEmail, getUpdateProfile, getResetPassword, error, success, setUser, setError, setSuccess } = useAuth();

    const location = useLocation();
    const redirect_uri = location.state?.from || '/home';
    const history = useHistory();

    const handleGoogleLogin = () => {
        getGoogleSignIn()
            .then(result => {
                history.push(redirect_uri);
                console.log(result.user);
                setUser(result.user);
                setSuccess('Signed-In successfully!');
            })
            .catch(err => {
                setError(err.code);
                setSuccess('');
            })
    }
    const handleGithubLogin = () => {
        getGithubSignIn()
            .then(result => {
                console.log(result.user);
                setUser(result.user);
                setSuccess('Signed-In successfully!');
            })
            .catch(err => {
                setError(err.code);
                setSuccess('');
            })
    }

    // handle Login / register form
    const handleEmailForm = (e) => {
        e.preventDefault();
        isLogin ? handleEmailRegister() : handleEmailLogin();
    }
    // register
    const handleEmailRegister = () => {
        getEmailSignUp()
            .then(result => {
                console.log(result.user);
                handleUpdateProfile();
                setSuccess('Signed-Up successfully!');
                setTimeout(() => {
                    handleVerifyEmail();
                }, 3000)
                setError('');
            })
            .catch(err => {
                setError(err.code);
                setSuccess('');
            })
    }
    // login
    const handleEmailLogin = () => {
        getEmailSignIn()
            .then(result => {
                console.log(result.user);
                if (result.user.emailVerified) {
                    console.log(result.user.emailVerified)
                    setUser(result.user);
                    setSuccess('Signed-In successfully!');
                    setError('');
                }
                else {
                    setError('You must verify your email to get access to your content!');
                    setSuccess('');
                }
            })
            .catch(err => {
                setError(err.code);
                setSuccess('');
            })
    }
    const handleVerifyEmail = () => {
        getVerifyEmail()
            .then(() => {
                setSuccess('Verification message sent to your email!');
            })
    }
    const handleUpdateProfile = () => {
        getUpdateProfile();
    }

    const backgroundStyle = {
        backgroundImage: `linear-gradient(rgba(0.5, 0.5, 0.5, 0.5), rgba(0.9, 0.8, 0.9, 0.9)), URL(${bgServiceDetails})`,
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh'
    }

    return (
        <div className="container-fluid text-white shadow-lg pt-2" style={backgroundStyle}>
            <div className="alert alert-light col-md-6 mx-auto bg-primary">
                <a href="/login" className="text-decoration-none text-primary"><h4 className="fw-bold text-white"> <i className="fas fa-power-off"></i> Please {isLogin ? 'Register' : 'Login'}</h4></a>
            </div>
            <div className="d-flex justify-content-center">
                <form onSubmit={handleEmailForm} className="col-10 col-md-6 shadow px-3 my-2 rounded-3 pb-3">
                    {
                        success &&
                        <Alert severity="success" className="mb-2 fw-bold">
                            <AlertTitle>Success</AlertTitle>
                            {success}
                        </Alert>
                    }
                    {
                        error &&
                        <Alert severity="error" className="mb-2 fw-bold">
                            <AlertTitle>Error</AlertTitle>
                            {error}
                        </Alert>
                    }

                    {
                        isLogin ?
                            <div className="row mb-3">
                                <label htmlFor="inputEmail3" className="col-sm-2 col-form-label" placeholder="Enter your name">Name</label>
                                <div className="col-sm-10">
                                    <input type="text" onBlur={getName} className="form-control" id="inputName3" placeholder="Enter your name" />
                                </div>
                            </div>
                            :
                            ""
                    }
                    <div className="row mb-3">
                        <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                        <div className="col-sm-10">
                            <input type="email" onBlur={getEmail} className="form-control" id="inputEmail3" placeholder="Enter your email" />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                        <div className="col-sm-10">
                            <input type="password" onBlur={getPassword} className="form-control" id="inputPassword3" placeholder="Enter your password" />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-sm-10 offset-sm-2">
                            <div className="form-check">
                                <input onClick={handleToggle} className="form-check-input" type="checkbox" id="gridCheck1" />
                                <label className="form-check-label" htmlFor="gridCheck1">
                                    {isLogin ? 'Already Registered?' : 'New User?'}
                                </label>
                            </div>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary shadow">{isLogin ? <i className="fas fa-user-plus"></i> : <i className="fas fa-sign-in-alt"></i>} Sign {isLogin ? 'up' : 'in'}</button>
                </form>
            </div>
            <div className="d-flex justify-content-center align-items-center">
                <button onClick={getResetPassword} className="btn-warning rounded shadow"><i className="fas fa-unlock-alt"></i> Forgot password?</button>
            </div>
            <div className="d-flex justify-content-center gap-2 mt-3 mb-5">
                <button onClick={handleGoogleLogin} className="btn btn-danger shadow"><i className="fa fa-google"></i> Sign in with Google</button>
                <button onClick={handleGithubLogin} className="btn btn-secondary shadow"><i className="fa fa-github"></i> Sign in with Github</button>
            </div>
        </div>
    );
};

export default Login;