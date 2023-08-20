import ScrollAnimation from "react-animate-on-scroll";

function arrToTemplate<T>(data: T[], template: number[]) {
  const temp: T[][] = [];
  let start = 0;
  template.forEach((i) => {
    console.log("i ", i);
    if (start < data.length) {
      temp.push(data.slice(start, start + i));
    }
    start += i;
  });
  return temp;
}

type PropsType = {
  icons: string[];
};

function PartnersIconsContainer(props: PropsType) {
  console.log("called");
  const template = [1, 2, 3, 4, 5, 5, 4, 3, 2, 1];
  const data = props.icons;
  const theGrid = arrToTemplate<string>(data, template);
  return (
    <div className="partners-icons-container">
      {theGrid.map((row) => (
        <ScrollAnimation animateIn="animate-fade-to-left">
          <div className="row">
            {row.map((image) => (
              <div className="icon-item">
                <img src={image} alt="" />
              </div>
            ))}
          </div>
        </ScrollAnimation>
      ))}
    </div>
  );
}

export default PartnersIconsContainer;
