import { useEffect, useState } from "react";

function ForceRerender(props: PropsType) {
  const [render, setRender] = useState(true);

  useEffect(() => {
    setRender(false);
    setTimeout(() => {
      setRender(true);
    }, 1);
  }, [props.condition]);

  if (render) {
    return props.children;
  } else {
    return <></>;
  }
}

export default ForceRerender;

type PropsType = {
  children: JSX.Element;
  condition: any;
};
