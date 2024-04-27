import { Container, Col, Carousel, Card, Overlay, CarouselItem } from "../../components";
import { Theme } from "../../constants";
import { BlogList } from "./BlogList";
import { useRecoilValue } from "recoil";
import { themeState } from "../../atoms/theme";

export const Blog = () => {
  const theme = useRecoilValue(themeState);
  const animationClass = "transition duration-1000 ease-in-out transform animate-slideup";
  const oppositeThemeBackgroundColor = theme === Theme.Light ? Theme.Dark.backgroundColor : Theme.Light.backgroundColor;

  return (
    <Container className="w-full">
      <Col className="mt-24 text-center">
        <h1 className={animationClass}>Blog</h1>
        <BlogList />

        <div className={"h-1 m-5 w-full max-w-xs mx-auto " + oppositeThemeBackgroundColor} />
        <br />

        <h2>Other Useful Reads</h2>
        <Carousel>
          <CarouselItem active>
            <Card className={theme.cardBackground}>
              <h3>The Freeze Team</h3>
              <div>Blog by Steven T. Cramer, author of Blazor State</div>
              <Overlay
                hover
                centered
                className="text-white cursor-pointer"
                onClick={(_) => (window.location.href = "https://thefreezeteam.com/author/steventcramer/")}
              >
                <h4 className="tracking-wider">Read</h4>
              </Overlay>
            </Card>
            <Card className={theme.cardBackground}>
              <h3>Beto's Blog</h3>
              <div>Blog by Norberto Martinez, incredible developer at Trinsic</div>
              <Overlay
                hover
                centered
                className="text-white cursor-pointer"
                onClick={(_) => (window.location.href = "https://thefreezeteam.com/author/steventcramer/")}
              >
                <h4 className="tracking-wider">Read</h4>
              </Overlay>
            </Card>
          </CarouselItem>
        </Carousel>
      </Col>
    </Container>
  );
};
