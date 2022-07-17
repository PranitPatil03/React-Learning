import React from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="/">{props.title}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">About</a>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
          <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
            <button onClick={props.togglemode} type="button" class={`btn btn-${props.mode === 'light' ? 'dark' : 'light'}`}>{props.mode === 'light' ? 'dark' : 'light'}</button>
          </div>
          <div className={`form-check form-switch text-${{color:props.mode === '#0d6efd' ? 'light' : 'dark'}}`}>
            <button onClick={props.togglToBlue} type="button" class={`btn btn-${props.mode === 'light' ? 'primary' : 'light'}`}>{props.mode === 'light' ? 'blue' : 'light'}</button>
          </div>
          <div className={`form-check form-switch text-${{color:props.mode === '#198754' ? 'light' : 'dark'}}`}>
            <button onClick={props.togglToGreen} type="button" class={`btn btn-${props.mode === 'light' ? 'success' : 'light'}`}>{props.mode === 'light' ? 'green' : 'light'}</button>
          </div>
          <div className={`form-check form-switch text-${{color:props.mode === '#ffc107' ? 'light' : 'dark'}}`}>
            <button onClick={props.togglToYellow} type="button" class={`btn btn-${props.mode === 'light' ? 'warning' : 'light'}`}>{props.mode === 'light' ? 'yellow' : 'light'}</button>
          </div>
        </div>
      </div>
    </nav>
  )
}


Navbar.propTypes = {
  title: PropTypes.string.isRequired
}

Navbar.defaultProps = {
  title: 'Title here'
}