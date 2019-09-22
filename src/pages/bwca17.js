import React from 'react'
import GalleryLayout from '../components/photogallery/galleryLayout'
import { graphql } from 'gatsby'
import Gallery from '../components/photogallery/gallery'
import "react-image-gallery/styles/css/image-gallery.css"

class BWCA17 extends React.Component {

    render() {

        const { data } = this.props;
        let items =[]
        data.allFile.edges.map(pic => 
            items.push({original: pic.node.childImageSharp.sizes.src,
            thumbnail: pic.node.childImageSharp.sizes.src})
        )
     
        return (
            <GalleryLayout>
               <Gallery 
                  items={ items }
                  title={ "BWCA 2017" }
               />
            </GalleryLayout>
        )}
    }
  
export default BWCA17

export const query = graphql`
  query Bwca17Query {
    allFile (filter: {relativeDirectory: {eq: "bwca17" }}) {
      edges {
        node {
          childImageSharp {
            sizes(quality: 100) {
              ...GatsbyImageSharpSizes_withWebp
            }
          }
        }
      }  
    }
  }`