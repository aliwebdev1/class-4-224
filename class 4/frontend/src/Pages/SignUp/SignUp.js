import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import { toast } from 'react-hot-toast';

const SignUp = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const { creaeUser, updateUser } = useContext(AuthContext);
    const [signUpError, setSingUpError] = useState("");


    const handleSingUp = data => {
        console.log(data);
        creaeUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast.success('Successfully User Created!')
                const userInfo = {
                    displayName: data.name
                }
                updateUser(userInfo)
                    .then(() => { })
                    .catch(err => console.log(err))

            })
            .catch(error => {
                console.log(error);
                setSingUpError(error.message)
            });
    }

    return (
        <div className='from-main mx-auto'>
            <div className="login">
                <h4 className='text-center'>Sign Up</h4>
                <form onSubmit={handleSubmit(handleSingUp)}>
                    <div className="mb-3">
                        <label className="form-label">Name</label>
                        <input
                            {...register("name", {
                                required: "Your Name Is Required"
                            })
                            }
                            type="text" className="form-control" />
                        {errors.name && <p className='text-danger mt-1'>{errors.name?.message}</p>}
                    </div>

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

                    <input className='btn btn-secondary w-100' type="submit" value="Sing Up" />

                    {signUpError && <p className='text-danger mt-1'>{signUpError}</p>}

                    <p className='mt-3'>Already Have an acccount? <Link to='/login'>Please Login</Link></p>

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

export default SignUp;