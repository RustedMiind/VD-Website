import GridImagesViewer from "components/GridImagesViewer";

function ImagesGrid() {
  return (
    <GridImagesViewer
      images={[
        {
          src: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
        },
        {
          src: "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg",
        },
        {
          src: "https://img.freepik.com/premium-photo/glacier-mountain-landscape-with-flowers-lake-beautiful-sunset-with-full-moon_713888-1322.jpg",
        },
        {
          src: "https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg",
        },
        {
          src: "https://deepai.org/static/images/cyberpunkdolphin.png",
        },
        {
          src: "https://www.gettyimages.com/gi-resources/images/500px/983794168.jpg",
        },
        {
          src: "https://images.pexels.com/photos/220429/pexels-photo-220429.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        },
      ]}
    />
  );
}

export default ImagesGrid;
