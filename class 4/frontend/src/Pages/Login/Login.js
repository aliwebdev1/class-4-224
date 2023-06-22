import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Login.css'
import { AuthContext } from '../../contexts/AuthProvider';
import { toast } from 'react-hot-toast';

const Login = () => {

    const { register, formState: { errors }, handleSubmit } = useForm();

    const [loginError, setLoginError] = useState("")
    const { singIn } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/'


    const handleLogin = data => {
        // console.log(data)
        singIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true })

            })
            .catch(error => {
                console.log(error);
                setLoginError(error.message)
            })



    }
    return (
        <div className='from-main mx-auto'>
            <div className="login">
                <h4 className='text-center'>Login</h4>
                <form onSubmit={handleSubmit(handleLogin)}>
                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input
                            {...register("email", {
                                required: "Email Address Is Required"
                            })
                            }
                            type="email" className="form-control" />
                        {errors.email && <p className='text-danger mt-1'>{errors.email?.message}</p>}
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input type="password" className="form-control"
                            {...register("password", {
                                required: "password Is Required",
                                minLength: { value: 6, message: "Password must be 6 characters or more" }
                            })
                            }
                        />
                        {errors.password && <p className='text-danger mt-1'>{errors.password?.message}</p>}
                        <small>Forgetet Password?</small>
                    </div>

                    <input className='btn btn-secondary w-100' type="submit" value="Login" />

                    {loginError && <p className='text-danger mt-1'>{loginError}</p>}

                    <p className='mt-3'>New to Doctors House? <Link to='/sign-up'>Create new account</Link></p>

                    <div className='mt-3 d-flex align-items-center justify-content-center'>
                        <p className='left-right'></p>
                        <p className='mx-2'> Or </p>
                        <p className='left-right'></p>
                    </div>
                    <button className='google btn btn-outline-secondary w-100'>Continue With Google</button>

                </form>
            </div>
        </div>
    );
};

export default Login;