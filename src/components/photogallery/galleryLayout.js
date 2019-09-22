import React from 'react'
import Header from '../../components/photogallery/header'
import Footer from '../footer'

class GalleryLayout extends React.Component {
  
    render() {
      const { children } = this.props

      return (
        <div style={{backgroundColor: '#1E2019'}}>
            <Header></Header>
            <div>
                <main>{children}</main>
            </div>
            <Footer/>
        </div>
        
      )
    }
  }
  
  export default GalleryLayout