import React from 'react'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css"
import './style.scss'

class Gallery extends React.Component {

    render() {
        
        const { items, title } = this.props;
     
        return (
            <Container>
                    <h2 style={{marginBottom: '5px'}}> {title} </h2>
                
                <div style={{ padding: '4%', paddingTop: '1%'}}>
                    <div style={{ marginBottom: '4%' }}>
                    <ImageGallery
                        useTranslate3D={false}
                        lazyLoading={true} 
                        items={items} 
                        useBrowserFullscreen={true}>
                    </ImageGallery>
                    </div>
                </div>
            </Container>  
        )}
    }
  
export default Gallery
