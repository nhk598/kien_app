import React from 'react'
import { useHistory } from 'react-router';
import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { AUTH_TOKEN } from '../../constants';
import {LOGIN, SIGNUP} from '../../graphql-client/Mutation'
export default function Login() {
    const history = useHistory();
  const [formState, setFormState] = useState({
    login: true,
    email: '',
    password: '',
    name: ''
  });
  const [login] = useMutation(LOGIN, {
    variables: {
      email: formState.email,
      password: formState.password
    },
    onCompleted: ({ login }) => {
      localStorage.setItem(AUTH_TOKEN, login.token);
      history.push('/');
    }
  });
  const [signup] = useMutation(SIGNUP, {
    variables: {
      name: formState.name,
      email: formState.email,
      password: formState.password
    },
    onCompleted: ({ signup }) => {
      localStorage.setItem(AUTH_TOKEN, signup.token);
      history.push('/');
    }
  });
    return (
        <div className="container">
            <div className="row ">
                <div className="col-8 formdangky mx-auto" style={{marginTop: '200px'}}>
                <div className="form-group" >
                    <h2>Đăng ký</h2>
                    <div>
                        <h4 className="mv3">
                            {formState.login ? 'Login' : 'Sign Up'}
                        </h4>
                        <div className="flex flex-column">
                            {!formState.login && (
                            <input
                                value={formState.name}
                                onChange={(e) =>
                                setFormState({
                                    ...formState,
                                    name: e.target.value
                                })
                                }
                                type="text"
                                placeholder="Your name"
                            />
                            )}
                            <input
                            value={formState.email}
                            onChange={(e) =>
                                setFormState({
                                ...formState,
                                email: e.target.value
                                })
                            }
                            type="text"
                            placeholder="Your email address"
                            />
                            <input
                            value={formState.password}
                            onChange={(e) =>
                                setFormState({
                                ...formState,
                                password: e.target.value
                                })
                            }
                            type="password"
                            placeholder="Choose a safe password"
                            />
                        </div>
                        <div className="flex mt3">
                            <button
                            className="pointer mr2 button"
                            onClick={formState.login ? login : signup}
                            >
                            {formState.login ? 'login' : 'create account'}
                            </button>
                            <button
                            className="pointer button"
                            onClick={(e) =>
                                setFormState({
                                ...formState,
                                login: !formState.login
                                })
                            }
                            >
                            {formState.login
                                ? 'need to create an account?'
                                : 'already have an account?'}
                            </button>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

       
    )
}
