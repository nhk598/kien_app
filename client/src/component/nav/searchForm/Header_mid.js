import React, { Component } from 'react'

export default class HeaderMid extends Component {
    render() {
        return (
          <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit"><i className="fas fa-search" /></button>
          </form>

        )
    }
}
