import React, { Component } from 'react'
import {getData} from "./service/news"
import Berita from './component/Berita/Berita'
import Nav from './component/Nav/Nav'

export default class App extends Component {
  constructor(){
    super()
    this.state = {
      data: []
    }
  }

  componentDidMount(){
    getData()
    .then(res=>this.setState({data: res}))
    .catch(err=>console.log(err))
  }

  render() {
    return (
      <div>
        <Nav/>
        <div style={{padding:'60px'}}></div>
        {this.state.data.map((item,index)=>{
          return(
            <div key={index}>
              <Berita
               title={item.title} 
               thumbnail={item.thumbnail} 
               pubDate={item.pubDate} 
               link={item.link}
               description={item.description}
              />
            </div>
          )
        })}
      </div>
    )
  }
}
