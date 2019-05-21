import * as React from 'react';
import { json, SetAccessToken, User } from '../../utils/api';
import { RouteComponentProps } from 'react-router-dom';


class Login extends React.Component<ILoginProps, ILoginState> {
    constructor(props: ILoginProps) {
        super(props);
        this.state = {
            email: '',
            password: '',
        };
    }

    componentDidMount() {
        if(User && User.role === 'admin') {
            this.props.history.replace('/books');
        }
    }

    async handleLoginSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        try {
            let result = await json('/auth/login', 'POST', {
                email: this.state.email,
                password: this.state.password
            });
            
            if(result) {
                SetAccessToken(result.token, { userid: result.userid, role: result.role });
                if (result.role === 'admin') {
                    this.props.history.push('/books');
                } else {
                    this.props.history.push('/');
                }
            } 
        } catch (e) {
            console.log(e)
        }
    }

    render() {

        return (
            <main className="container">
                <section className="row my-3">
                    <div className="col-md-12">
                        <form className="form-group border border-primary rounded shadow-lg p-3"
                        onSubmit={(e) => this.handleLoginSubmit(e)} >
                        <label>Email</label>
                        <input type="email" 
                        className="form-control p-1 mb-1" 
                        placeholder="Type Email Here" 
                        value={this.state.email} 
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setState({ email: e.target.value})} />
                        <label>Password</label>
                        <input type="password"
                        className="form-control p-1 mb-1"
                        placeholder="Password"
                        value={this.state.password}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setState({password: e.target.value})} />
                        <button type="submit" className="btn btn-info d-block border border-dark mt-2 py-2 px-4 shadow">Login</button>
                        </form>
                    </div>
                </section>
            </main>
        );
    }
}

interface ILoginProps extends RouteComponentProps { }

interface ILoginState {
    email: string;
    password: string;
}

export default Login;