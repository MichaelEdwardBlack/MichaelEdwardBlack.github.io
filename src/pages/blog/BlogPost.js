import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowCircleLeftIcon } from '../../components';
import MarkdownPage from '../../components/MarkdownPage';

export const BlogPost = (props) => {
  let fileName = props.match.params.id;

  return(
    <div className="px-8 md:mx-8 lg:mx-24">
      <div className="transform translate-y-4">
        <Link to="/blog">
          <ArrowCircleLeftIcon/>
        </Link>
      </div>
      <MarkdownPage file={"/blog/" + fileName} />
    </div>
  );
}

export default BlogPost;