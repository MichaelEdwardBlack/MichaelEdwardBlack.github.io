import React from 'react';

export const CarouselItem = ({className, active, children, ...props}) => {
  let baseClass = [
    "absolute",
    "inset-0",
    "flex",
    "items-center",
    "justify-center",
    "w-full",
    "h-full",
    "transition-all",
    "ease-in-out",
    "duration-1000",
    "transform",
    active ? "translate-x-0" : "translate-x-full",
    "slide",
    className
  ].join(' ');
  
  return (
    <div className={baseClass} {...props}>
      {children}
    </div>
  );
}

export class Carousel extends React.Component {
  static Item = CarouselItem;

  constructor(props) {
    super(props);
    
    this.state = {
      hasNextSlide: false,
      hasPreviousSlide: false
    }
  }

  componentDidMount() {
    this.setState({
      hasNextSlide: this.props.children.length > 1
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state === prevState && !this.state.hasNextSlide && !this.state.hasPreviousSlide) {
      this.setState({
        hasNextSlide: this.hasNextSlide(),
        hasPreviousSlide: this.hasPreviousSlide()
      })
    }
  }

  hasNextSlide = () => {
    let activeSlide = document.querySelector(`#${this.props.id}>.slide.translate-x-0`);    
    let nextSlide = activeSlide?.nextElementSibling;
    if (nextSlide && nextSlide.classList.contains("slide")) return true;
    return false;
  }

  hasPreviousSlide = () => {
    let activeSlide = document.querySelector(`#${this.props.id}>.slide.translate-x-0`);
    let previousSlide = activeSlide?.previousElementSibling;
    if (previousSlide && previousSlide.classList.contains("slide")) return true;
    return false;
  }

  nextSlide = () => {
    let activeSlide = document.querySelector(`#${this.props.id}>.slide.translate-x-0`);    
    let nextSlide = activeSlide?.nextElementSibling;

    if (nextSlide && nextSlide.classList.contains("slide")) {
      activeSlide.classList.remove('translate-x-0');
      activeSlide.classList.add('-translate-x-full');
      nextSlide.classList.remove('translate-x-full');
      nextSlide.classList.add('translate-x-0');

      this.setState({
        hasNextSlide: this.hasNextSlide(),
        hasPreviousSlide: true
      });
    }
  }

  previousSlide = () => {
    let activeSlide = document.querySelector(`#${this.props.id}>.slide.translate-x-0`);
    let previousSlide = activeSlide?.previousElementSibling;

    if (previousSlide && previousSlide.classList.contains("slide")) {
      activeSlide.classList.remove('translate-x-0');
      activeSlide.classList.add('translate-x-full');
      previousSlide.classList.remove('-translate-x-full');
      previousSlide.classList.add('translate-x-0');

      this.setState({
        hasPreviousSlide: this.hasPreviousSlide(),
        hasNextSlide: true
      });
    }
  }

  render() {
    let baseClass = [
      "relative",
      "flex",
      "flex-row",
      "h-96",
      this.props.className
    ].join(' ');

    let animationClass = "transition duration-500 ease-in-out hover:scale-150 transform -translate-y-1/2";

    return (
      <div id={this.props.id} className={baseClass}>
        {this.props.children}

        {this.hasPreviousSlide() && 
          <div 
            className={`absolute left-0 lg:left-4 flex items-center justify-center w-8 h-8 cursor-pointer top-1/2 ${animationClass}`}
            onClick={this.previousSlide}
          >
            &#x276E;
          </div>
        }

        {this.hasNextSlide() && 
          <div 
            className={`absolute right-0 lg:right-4 flex items-center justify-center w-8 h-8 cursor-pointer top-1/2 ${animationClass}`}
            onClick={this.nextSlide}
          >
            &#x276F;
          </div>
        }

      </div>
    );
  }
}

Carousel.defaultProps = {
  id: "carousel"
}