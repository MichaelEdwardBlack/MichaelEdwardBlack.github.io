import React from 'react';

export const DropdownButton = ({children, className, toggle, ...props}) => {
  let classArray = [
    "block",
    "overflow-hidden",
    "relative",
    "z-30",
    className
  ];

  let baseClass = classArray.join(' ');

  return (
    <button className={baseClass} onClick={toggle} {...props}>
      {children}
    </button>
  );
}

export const DropdownMenu = ({children, className, show, toggle, ...props}) => {
  let classArray = [
    "absolute",
    "py-2",
    "mt-2",
    "w-48",
    "bg-white",
    "rounded-lg",
    "shadow-lg",
    "z-30",
    className
  ];

  let baseClass = classArray.join(' ');

  return (
    <div className={baseClass} {...props}>
      {children}
    </div>
  );
}

export const DropdownMenuItem = ({children, className, ...props}) => {
  let classArray = [
    "block",
    "px-4",
    "py-2",
    "text-gray-800",
    "hover:bg-primary-500",
    "hover:text-white",
    className
  ];

  let baseClass = classArray.join(' ');

  return (
    <div className={baseClass} {...props}>
      {children}
    </div>
  )
}


export class Dropdown extends React.Component {
  static Button = DropdownButton;
  static Menu = DropdownMenu;
  static MenuItem = DropdownMenuItem;

  constructor(props) {
    super(props);

    this.state = {
      showMenu: false
    }
    
    let classArray = [
      "relative",
      props.className
    ];
  
    this.baseClass = classArray.join(' ');
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleEscape)
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleEscape);
  }

  handleEscape = (e) => {
    if (e.key === 'Esc' || e.key === 'Escape') {
      this.setState({ showMenu: false })
    }
  }

  toggleDropdown = (e) => {
    this.setState({
      showMenu: !this.state.showMenu
    })
  }

  render() {
    const childrenWithProps = React.Children.map(this.props.children, child => {
      // checking isValidElement is the safe way and avoids a typescript error too
      if (React.isValidElement(child)) {
        if (child.type === DropdownButton) {
          return React.cloneElement(child, { toggle: this.toggleDropdown });
        }
      }
      return child;
    });
    const visibleChildren = React.Children.map(childrenWithProps, child => {
      if (React.isValidElement(child)) {
        if (child.type === DropdownMenu && this.state.showMenu === false) {
          return <></>
        }
      }
      return child;
    })

    return (
      <div className={this.baseClass} {...this.props}>
        {visibleChildren}
        {this.state.showMenu && 
          <button
            className="fixed inset-0 z-10 w-full h-full bg-black opacity-50 cursor-default" 
            onClick={() => this.setState({ showMenu: false })} 
            tabIndex="-1"
          />
        }
      </div>
    );
  }
}

export default Dropdown;