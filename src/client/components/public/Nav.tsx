import React from "react";
import { Link } from "react-router-dom";

export default class Nav extends React.Component<INavProps, INavState> {
  constructor(props: INavProps) {
    super(props);

    this.state = {
      books: []
    };
  }

  render() {
    return (
      <nav className="navbar navbar-expand-sm bg-dark navbar-success">
        <ul className="navbar-nav justify-content-end">
          <li className="nav-item">
          <Link to="/" className="mt-5 mx-5 mb-5">Home</Link>
          <Link to="/login" className="mt-5 mx-5 mb-5">Log In</Link>
          <Link to="/register" className="mt-5 mx-5 mb-5">Register</Link>
         </li>
        </ul>
      </nav>
    );
  }
}

interface INavProps {}

interface INavState {
    books: { id: number; title: string, author: string, price: number}[];
}
