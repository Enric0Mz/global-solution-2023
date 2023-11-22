// Login.js

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../Header/Header';
import '../../scss/Login.scss';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const usenavigate = useNavigate();

    const proceedLogin = (e) => {
        e.preventDefault();

        fetch(`http://localhost:3001/users?username=${username}`)
            .then((res) => {
                if (res.ok) {
                    return res.json();
                }
                throw new Error('Network response was not ok.');
            })
            .then((users) => {
                if (users.length === 0) {
                    alert('Por favor, insira um usuário válido');
                } else {
                    const user = users[0];
                    if (user.password === password) {
                        alert('Login efetuado com sucesso!');
                        localStorage.setItem('authorized', 'true');
                        usenavigate('/index');
                    } else {
                        alert('Por favor, insira credenciais válidas');
                    }
                }
            })
            .catch((err) => {
                alert('Login falhou por causa de: ' + err.message);
            });
    };

    return (
        <div>
            <Header />
            <div className="container">
                <form onSubmit={proceedLogin} className="login-form">
                    <div className='login-container'>
                        <h3>Nome</h3>
                        <div className="input-container">
                            <input
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                type="text"
                                className="login-input"
                            />
                        </div>
                        <h3>Senha</h3>
                        <div className="input-container">
                            <input
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                type="password"
                                className="login-input"
                            />
                        </div>
                        <button type="submit" className="login-button">Login</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;
