import React, {Component} from 'react';
import GoogleMap from "../lib/GoogleMap"

class Navbar extends Component {
  componentDidMount() {
    GoogleMap.autocomplete()
  }
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">Real Map</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">Heat Map <span className="sr-only">(current)</span></a>
            </li>
          </ul>

        <form onSubmit={this.props.handleSubmit} className="form-inline my-lg-0">
            <input type="text" id="searchBox" name="address" className="form-control mr-sm-2"/>
              <button className="btn btn-outline-secondary my-2 my-sm-0" id="button-addon2"> <i className="fa fa-search" aria-hidden="true"></i></button>
        </form>
        </div>
      </nav>
    );
  }
}
export default Navbar