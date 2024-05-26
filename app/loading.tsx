import React from "react";
import { Overlay, Progress } from "@mantine/core";

const LoadingPage = () => {
  return (
    <Overlay color="#000" backgroundOpacity={0.35} blur={3}>
      <Progress label="Loading..." indeterminate />
    </Overlay>
  );
};

export default LoadingPage;
