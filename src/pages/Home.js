import React from 'react';
import { Container } from '../components';


class Home extends React.Component {
  render() {
    return (
      <Container className="w-full">
        <div className="flex items-center justify-center w-full mt-12">
          <h1 className="transition duration-500 ease-in transform -translate-y-1">Hello</h1>
        </div>
      </Container>
    );
  }
}

export default Home;
