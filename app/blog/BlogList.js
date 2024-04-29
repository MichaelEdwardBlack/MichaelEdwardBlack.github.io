import React from 'react';
import { connect } from 'react-redux';
import { BREAKPOINTS } from '../../constants';
import { Card, Carousel, Overlay } from '../../components';

class BlogList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      blogs: []
    }
  }
  
  async componentDidMount() {
    let readableStream = await fetch('/blogList.json');
    let json = await readableStream.json();
    this.setState({
      blogs: json
    })
  }

  getBlogCardFromIndex(index) {
    let blogs = this.state.blogs;
    
    if (index < blogs.length) {
      return (
        <Card className={this.props.theme.cardBackground} key={index}>
          <h4 className="my-4">{blogs[index].title}</h4>
          <p className="my-4">{blogs[index].heading}</p>
          <Overlay hover centered
            className="text-white cursor-pointer" 
            onClick={_ => window.location.href = '/#/blog/' + blogs[index].file}
          >
            <h4 className="tracking-wider">Read</h4>
          </Overlay>
        </Card>
      );
    }
  }
  
  render() {
    let blogs = this.state.blogs;

    let itemsPerCarouselGroup = 
      window.innerWidth <= BREAKPOINTS.lg ? 1 :
      window.innerWidth <= BREAKPOINTS.xl ? 2 : 3;

    let i = 0;
    let carouselItems = [];

    while (i < blogs.length) {
      let j = 0;
      let carouselGrouping = [];

      for (j; j < itemsPerCarouselGroup; j++){
        carouselGrouping.push(this.getBlogCardFromIndex(i + j))
      }

      carouselItems.push(
        <Carousel.Item active={i === 0 ? true : false} key={i}>
          {carouselGrouping}
        </Carousel.Item>
      );
      
      i += j;
    }

    return (
      <Carousel id="BlogList" className="flex items-center justify-center">
        {carouselItems}
      </Carousel>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    theme: state.theme
  }
}

export default connect(mapStateToProps, null)(BlogList);