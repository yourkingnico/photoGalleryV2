import { Link } from 'gatsby'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col' 
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import PropTypes from "prop-types"
import React, { Component } from 'react';
import './style.scss'
import Img from 'gatsby-image'


class Album extends Component {

    constructor(props) {
        super(props);
    
    }

    renderText(){
        return(
            <Col xs="12" sm="12" md="6" lg="6" xl="6" style={{padding: '5% 0'}}>
                <div className="albumText">
                    <p className="lead">
                        {this.props.description}
                    </p>
                    <hr className="my-2" />
                    <p>{this.props.info}</p>
                    <p className="lead">
                        <Link to={ "/" + this.props.page }>
                            <Button
                                style={{ float: 'right'}}
                                color="brown"
                                size="lg"
                                onClick={ this.setTrip }
                                >
                                    View Photos
                            </Button>
                        </Link>
                        
                    </p>
                </div>
            </Col>
        )
    }

    renderMedia(){
        return(
            <Col xs="12" sm="12" md="6" lg="6" xl="6" style={{padding: '5% 0'}}>
                <div style={{ 
                    position: 'inherit',
                    display: 'block',
                    margin: 'auto',
                    width: '90%',
                    padding: '10% 0'
                 }} >
                      <Img sizes={this.props.image} />
                </div>
            </Col>
        )
    }

    renderForEnvironment(){
        if(this.props.imageRight){
            return(
                <Container style={{backgroundColor: '#8DAB7F'}}>
                    {this.renderMedia()}
                    {this.renderText()}
                </Container>
            )
        }else{
            return(
                <Container style={{backgroundColor: '#8DAB7F'}}>
                    {this.renderText()}
                    {this.renderMedia()}
                </Container>
            )
        }
    }

    render() {
        return(
            <Jumbotron 
                style={{ backgroundColor: '#394032'}} >
                <Row  >
                    <Col>
                        <h1 className="display-3">{this.props.title}</h1>
                    </Col>
                </Row>
                {this.renderForEnvironment()}
          </Jumbotron>
        )
    }
}

Album.defaultProps = {
    imageRight: true,
    description: "You forgot to add a description... ",
    page: "404.html"
}
  
Album.propTypes = {
    imageRight: PropTypes.bool,
    description: PropTypes.string,
    title: PropTypes.string.isRequired,
    page: PropTypes.string.isRequired,
}

export default Album