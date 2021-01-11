import React from 'react';
import { connect } from 'react-redux';
import { Button, Col, Container, Row } from '../components';


class Home extends React.Component {
  render() {
    let animationClass = "transition duration-1000 ease-in-out transform animate-slideup"
    return (
      <Container className="w-full">
        <Col className="mt-24 text-center">
          <h1 className={animationClass}>
            Hello, I'm <span className={`${animationClass} ${this.props.theme.primaryTextColor}`}>Michael Black</span>
          </h1>
          <h1 className={animationClass}>
            and I'm a <span className={`${animationClass} ${this.props.theme.primaryTextColor}`}>Full Stack Engineer</span>
          </h1>
          <Row className="items-center justify-center mt-8">
            <Button className="w-48 mx-2">Portfolio</Button>
            <Button variant="outline" className="w-48 mx-2" onClick={_ => window.location.href="/#/blog"}>Blog</Button>
          </Row>
        </Col>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    theme: state.theme
  }
}

export default connect(mapStateToProps, null)(Home);
