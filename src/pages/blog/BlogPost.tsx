import { Link, useParams } from "react-router-dom";
import { ArrowCircleLeftIcon } from "../../components";
import { MarkdownPage } from "../../components/MarkdownPage";

export const BlogPost = () => {
  const { id } = useParams<{ id?: string }>();

  return (
    <div className="px-8 md:mx-8 lg:mx-24">
      <div className="transform translate-y-4">
        <Link to="/blog">
          <ArrowCircleLeftIcon />
        </Link>
      </div>
      <MarkdownPage file={"/blog/" + id} />
    </div>
  );
};

export default BlogPost;
