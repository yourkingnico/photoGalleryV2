import React from 'react'
import GalleryLayout from '../components/photogallery/galleryLayout'
import { graphql } from 'gatsby'
import Gallery from '../components/photogallery/gallery'
import "react-image-gallery/styles/css/image-gallery.css"

class BWCA14 extends React.Component {

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
                  title={ "BWCA 2014" }
               />
            </GalleryLayout>
        )}
    }
  
export default BWCA14

export const query = graphql`
  query Bwca14Query {
    allFile (filter: {relativeDirectory: {eq: "bwca14" }}) {
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