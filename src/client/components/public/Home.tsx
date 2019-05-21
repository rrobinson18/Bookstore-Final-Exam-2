import * as React from 'react';
import { Link } from 'react-router-dom';

export default class Home extends React.Component<IHomeProps, IHomeState> {
    constructor(props: IHomeProps) {
        super(props);

    }

    render() {
        return(
            <section className="row">
                <article className="col-md-12">
                    <h1 className="text-center m-3">Welcome to my Bookstore!</h1>
                    <Link to="/books" className="btn btn-success btn-block text-center">Enter the land of Books</Link>
                </article>
            </section>
        )
    }
}

interface IHomeProps {}

interface IHomeState {}