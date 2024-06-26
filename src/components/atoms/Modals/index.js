import React from 'react';
import { XIcon } from '../Icons';

export class Modal extends React.Component {
  constructor(props) {
    super(props);
    
    let classArray = [
      "bg-white",
      "rounded",
      "shadow",
      "p-8",
      "m-4",
      "max-w-sm",
      "max-h-full",
      "text-center",
      "overflow-y-auto",
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
      this.props.onClose(e);
    }
  }

  render() {
    if (this.props.open) {
      return (
        <>
          <div 
            className="fixed inset-0 bg-black opacity-50 cursor-default" 
            onClick={(e) => this.props.onClose(e)} 
            tabIndex="-1"
          />
          <div className="fixed inset-0">
            <div className="absolute flex items-center justify-center w-full h-screen p-8">
              <div className={this.baseClass} {...this.props}>
                <XIcon className="absolute top-0 right-0 w-4 h-4 mt-4 mr-4 text-gray-700 cursor-pointer" onClick={this.props.onClose} />
                {this.props.children}
              </div>
            </div>
          </div>
        </>
      );
    }
    else return <></>
  }
}

Modal.defaultProps = {
  onClose: () => { return; },
  open: true
}

export default Modal;