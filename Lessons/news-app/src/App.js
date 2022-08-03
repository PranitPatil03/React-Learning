import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {

  apiKey=process.env.REACT_APP_NEWS_API
  pageSize=5;

  render() {
    return (
      <>
        <BrowserRouter>
          <Navbar />
          <LoadingBar
            color='#f11946'
            progress={20}
          />
          <Routes>
            <Route path="/"  element={<News apiKey={this.apiKey} pageSize={12} country="in" category="general" key="general" />} />
            <Route exact strict path="/business"  element={<News apiKey={this.apiKey} pageSize={12} country="in" category="business" key="business" />} />
            <Route path="/entertainment" element={<News pageSize={12} apiKey={this.apiKey} country="in" category="entertainment" key="entertainment" />} />
            <Route path="/home"  element={<News pageSize={12} apiKey={this.apiKey} country="in" category="general" key="general" />} />
            <Route path="/health"  element={<News pageSize={12} apiKey={this.apiKey} country="in" category="health" key="health" />} />
            <Route path="/science"  element={<News pageSize={12} apiKey={this.apiKey} country="in" category="science" key="science" />} />
            <Route path="/sports"  element={<News pageSize={12} apiKey={this.apiKey} country="in" category="sports" key="sports" />} />
            <Route path="/technology" element={<News pageSize={12} apiKey={this.apiKey} country="in" category="technology" key="technology" />} />
          </Routes>
        </BrowserRouter>
      </>
    )
  }
}
