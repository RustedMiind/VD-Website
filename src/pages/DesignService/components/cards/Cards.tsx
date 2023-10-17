import ImageCard from "image-card/ImageCard";

function Cards() {
  return (
    <div className="design-cards-container xl:ps-8 xl:pt-0 pt-4 ps-0 lg:w-2/3 xl:w-3/4  w-full flex flex-wrap">
      <div className="w-full md:w-1/2 xl:w-1/3 p-1">
        <ImageCard />
      </div>
      <div className="w-full md:w-1/2 xl:w-1/3 p-1">
        <ImageCard />
      </div>
      <div className="w-full md:w-1/2 xl:w-1/3 p-1">
        <ImageCard />
      </div>
    </div>
  );
}

export default Cards;
