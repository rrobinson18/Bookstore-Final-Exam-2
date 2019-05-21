import * as React from 'react';
import {json, User } from '../../utils/api';
import { RouteComponentProps } from 'react-router';

class PostBook extends React.Component<IPostBookProps, IPostBookState> {
    constructor(props: IPostBookProps) {
        super(props);
        this.state = {
            title: null,
            author: null,
            price: null,
            categoryid: null,
            categories: [],
            selectCategoryId: null
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCategoryChange = this.handleCategoryChange.bind(this);
    }

    async componentDidMount() {
        if(!User || User.userid === null || User.role !== 'admin') {
            this.props.history.replace('/login');
        }

        try {
            let categories = await json('/api/categories');
            this.setState({ categories });
        } catch(e) {
            console.log(e);
        }
    }

    async handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        let book = {
            title: this.state.title,
            author: this.state.author,
            price: this.state.price,
            categoryid: this.state.selectCategoryId
        }

        try {
            let result = await json(`/api/books`, 'POST', book);
            if(result) {
                this.setState({
                    title: '',
                    author: '',
                    price: null,
                    categoryid: null
                })

                this.props.history.replace('/books');
            }
        } catch (e) {
            console.log(e);
        }
    }

    renderCategories() {
        return this.state.categories.map(category => {
            return <option key={category.id} value={category.id}>{category.name}</option>
        })
    }

    handleCategoryChange(e: React.ChangeEvent<HTMLSelectElement>) {
        this.setState({ selectCategoryId: e.target.value })
    }

    render() {
        return(
            <div className="row">
            <div className="col-md-12">
                <form onSubmit={(e) => this.handleSubmit(e)} className="form-group m-2">
                    <label>Title:</label>
                    <input
                        type="text"
                        value={this.state.title}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setState({ title: e.target.value })}
                        className="form-control d-block"
                        placeholder={this.state.title}>
                    </input>
                    <label>Author:</label>
                    <input
                        type="text"
                        value={this.state.author}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setState({ author: e.target.value })}
                        className="form-control d-block"
                        placeholder={this.state.author}>
                    </input>
                    <label>Price:</label>
                    <input
                        type="number"
                        value={this.state.price}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setState({ price: e.target.valueAsNumber })}
                        className="form-control d-block">
                    </input>
                    <label>Category: (Note: You must select a choice from this field.)</label>
                    <select
                        value={this.state.selectCategoryId}
                        onChange={(e: React.ChangeEvent<HTMLSelectElement>) => this.setState({ selectCategoryId: e.target.value })}
                        className="form-control d-block"
                    >
                        <option>Select a category ...</option>
                        {this.renderCategories()}
                    </select>
                    <div className="d-flex">
                        <button className="btn btn-info mt-2">Post Book</button>
                    </div>
                </form>
            </div>
        </div>
        )
    }
}


interface IPostBookProps extends RouteComponentProps <{ id: string }> {}

interface IPostBookState {
             title: string,
            author: string,
            price: number,
            categoryid: number,
            categories: {id: number, name: string }[],
            selectCategoryId: string
}

export default PostBook;