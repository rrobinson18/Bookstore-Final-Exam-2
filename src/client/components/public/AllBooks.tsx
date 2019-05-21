import * as React from 'react';
import { json } from '../../utils/api';
import { Link } from 'react-router-dom';



export default class AllBooks extends React.Component<IAllBooksProps, IAllBooksState> {
    constructor(props: IAllBooksProps) {
        super(props);

        this.state = {
            books: []
        };
    }

    async componentDidMount() {
        try { 
            let books = await json('/api/books');
            this.setState({ books });
        } catch (e) {
            console.log(e);
        }
    }
    render() {
        return(
            <section className="row">
            <article className="col-md-12">
                <ul className="list-group">
                    {this.state.books.map(book => (
                        <li className="list-group-item" key={book.id}>{book.title} <Link to={`/${book.id}/details`}>Get Details</Link></li>
                    ))}
                </ul>
            </article>
        </section>
        )
    }

}


 interface IAllBooksProps { }

 interface IAllBooksState {
     books: {
    id: number,
    categoryid: number,
    title: string,
    author: string,
    price: number,
    _created: Date
     }[];     
}


