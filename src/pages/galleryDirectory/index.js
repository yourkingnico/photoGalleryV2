import React from 'react'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Album from '../../components/photogallery/album'
import GalleryLayout from '../../components/photogallery/galleryLayout'
import { graphql } from 'gatsby'
import get from 'lodash/get'


class GalleryDirectory extends React.Component {
    render() {
        const { data } = this.props;
        const b14 = get(data, 'b14.childImageSharp.sizes');
        const b15 = get(data, 'b15.childImageSharp.sizes');
        const b17 = get(data, 'b17.childImageSharp.sizes');
      
        return (
            <GalleryLayout>
                <Container>
                    <Row>
                        <Album
                            image={b17}
                            title="BWCA 2017"
                            description="Uncle Matt, Dan, and myself return to the Boundary Waters for our most difficult
                            trip yet. Trekking through moose territory and camping on our own island made this an
                            unforgettable experience. "
                            info="Photos by Daniel Torres"
                            page={ "bwca17" }
                        ></Album>
                        
                        <Album
                            image={b15}
                            imageRight={false}
                            title="BWCA 2015"
                            description="The Gang gets their feet wet as Dan and Sam join us for another trip to the
                            Boundary Waters Canoe Area. This remote trip proved to have some beautiful views and peacful
                            campsites."
                            info="Photos by Nick and Daniel Torres"
                            page={ "bwca15" }>
                        </Album>
                        <Album
                            image={b14}
                            imageRight={true}
                            title="BWCA 2014"
                            description="In this album my Uncle Matt and I explore the Boundary Waters Canoe Area in search
                            of big fish and wild blueberries. This week long paddle through Minnesota covered roughly
                            20 lakes in the eastern part of Superior National Forest."
                            info="Shot with an IPhone 4 camera "
                            page={ "bwca14" }>
                        </Album>
                    </Row>
              </Container>
            </GalleryLayout>      
        )}
}
  
export default GalleryDirectory

export const query = graphql`
  query GalleryQuery {
    b14: file(name: { eq: "b14" }) {
      childImageSharp {
        sizes(quality: 100) {
          ...GatsbyImageSharpSizes_withWebp
        }
      }
    }
    b15: file(name: { eq: "b15" }) {
      childImageSharp {
        sizes(quality: 100){
          ...GatsbyImageSharpSizes_withWebp
        }
      }
    }
    b17: file(name: { eq: "b17" }) {
        childImageSharp {
          sizes(quality: 100) {
            ...GatsbyImageSharpSizes_withWebp
          }
        }
      }
  }`