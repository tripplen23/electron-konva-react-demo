import React from "react";
import { Image, Layer } from "react-konva";
import useImage from "use-image";

import useBenStore from "../store";

const IMAGE_NUMBER = 1 + Math.round(Math.random() * 5);
const IMAGE_URL = `image-${IMAGE_NUMBER}.jpg`;

export default () => {
  const [image] = useImage(IMAGE_URL, "Anonymous");

  const setImageSize = useBenStore(state => state.setImageSize);
  const setScale = useBenStore(state => state.setScale);
  const setSize = useBenStore(state => state.setSize);
  const width = useBenStore(state => state.width);
  const height = useBenStore(state => state.height);

  const { brightness } = useBenStore();

  React.useEffect(() => {
    if (!image) {
      return;
    }
    const scale = Math.min(width / image.width, height / image.height);
    setScale(scale);
    setImageSize({ width: image.width, height: image.height });

    const ratio = image.width / image.height;
    setSize({
      width: width,
      height: width / ratio
    });
  }, [image, width, height, setScale, setImageSize, setSize]);

  const layerRef = React.useRef(null);

  React.useEffect(() => {
    const canvas = layerRef.current.getCanvas()._canvas;
    canvas.style.filter = `brightness(${(brightness + 1) * 100}%)`;
  }, [brightness]);

  return (
    <Layer ref={layerRef}>
      <Image image={image} />
    </Layer>
  );
};
