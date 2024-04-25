import { BREAKPOINTS } from "../../constants";
import { Card, Carousel, CarouselItem, Overlay } from "../../components";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { themeState } from "../../atoms/theme";

type BlogType = {
  title: string;
  heading: string;
  file: string;
};
export const BlogList = () => {
  const theme = useRecoilValue(themeState);
  const [blogs, setBlogs] = useState<BlogType[]>([]);

  useEffect(() => {
    fetch("/blogList.json").then((readableStream) => {
      readableStream.json().then((json) => {
        setBlogs(json);
      });
    });
  }, [blogs, setBlogs]);

  const getBlogCardFromIndex = (index: number) => {
    if (index < blogs.length) {
      return (
        <Card className={theme.cardBackground} key={index}>
          <h4 className="my-4">{blogs[index].title}</h4>
          <p className="my-4">{blogs[index].heading}</p>
          <Overlay
            hover
            centered
            className="text-white cursor-pointer"
            onClick={(_) => (window.location.href = "/#/blog/" + blogs[index].file)}
          >
            <h4 className="tracking-wider">Read</h4>
          </Overlay>
        </Card>
      );
    }
  };

  const itemsPerCarouselGroup = window.innerWidth <= BREAKPOINTS.lg ? 1 : window.innerWidth <= BREAKPOINTS.xl ? 2 : 3;

  let i = 0;
  let carouselItems = [];

  while (i < blogs.length) {
    let j = 0;
    let carouselGrouping = [];

    for (j; j < itemsPerCarouselGroup; j++) {
      carouselGrouping.push(getBlogCardFromIndex(i + j));
    }

    carouselItems.push(
      <CarouselItem active={i === 0 ? true : false} key={i}>
        {carouselGrouping}
      </CarouselItem>
    );

    i += j;
  }

  return (
    <Carousel id="BlogList" className="flex items-center justify-center">
      {carouselItems}
    </Carousel>
  );
};
