import React, { useEffect, useState } from "react";
import { Overlay, Progress } from "@mantine/core";

const LoadingPage = () => {
  const [random, setRandom] = useState<number>(0.0);
  useEffect(() => {
    setInterval(() => {
      setRandom(Math.random() * 100);
    }, 1000);
  });

  return (
    <Overlay color="#000" backgroundOpacity={0.35} blur={3}>
      <Progress label="Loading..." indeterminate />
    </Overlay>
  );
};

export default LoadingPage;
