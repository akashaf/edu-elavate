import React from "react";
import { Skeleton } from "@mantine/core";

const LoadingPage = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <Skeleton height={400} width={600} radius="md" />
      <Skeleton
        height={40}
        width={200}
        radius="sm"
        style={{ marginLeft: "20px" }}
      />
    </div>
  );
};

export default LoadingPage;
