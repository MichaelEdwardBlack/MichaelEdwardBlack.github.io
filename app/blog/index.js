import React from 'react';
import { connect } from 'react-redux';
import { Container, Col, Carousel, Card, Overlay } from '../../components';
import { Theme } from '../../constants';
import BlogList from './BlogList';

class Blog extends React.Component {
  render() {
    let animationClass = "transition duration-1000 ease-in-out transform animate-slideup";
    let oppositeThemeBackgroundColor = (this.props.theme === Theme.Light) ? Theme.Dark.backgroundColor : Theme.Light.backgroundColor;

    return (
      <Container className="w-full">
        <Col className="mt-24 text-center">
          <h1 className={animationClass}>
            Blog
          </h1>
          <BlogList />

          <div className={"h-1 m-5 w-full max-w-xs mx-auto " + oppositeThemeBackgroundColor} />
          <br />

          <h2>Other Useful Reads</h2>
          <Carousel>
            <Carousel.Item active>
              <Card className={this.props.theme.cardBackground}>
                <h3>The Freeze Team</h3>
                <div>Blog by Steven T. Cramer, author of Blazor State</div>
                <Overlay hover centered
                  className="text-white cursor-pointer" 
                  onClick={_ => window.location.href = "https://thefreezeteam.com/author/steventcramer/"}
                >
                  <h4 className="tracking-wider">Read</h4>
                </Overlay>
              </Card>
              <Card className={this.props.theme.cardBackground}>
                <h3>Beto's Blog</h3>
                <div>Blog by Norberto Martinez, incredible developer at Trinsic</div>
                <Overlay hover centered
                  className="text-white cursor-pointer" 
                  onClick={_ => window.location.href = "https://thefreezeteam.com/author/steventcramer/"}
                >
                  <h4 className="tracking-wider">Read</h4>
                </Overlay>
              </Card>
            </Carousel.Item>
          </Carousel>
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

export default connect(mapStateToProps, null)(Blog);
