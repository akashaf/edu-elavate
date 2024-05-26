"use client";

import React, { useEffect, useState } from "react";
import { Container, Skeleton } from "@mantine/core";

const LoadingPage = () => {
  const [random, setRandom] = useState<number>(0.0);
  useEffect(() => {
    setInterval(() => {
      setRandom(Math.random() * 100);
    }, 1000);
  });

  return (
    <>
      <Container>
        <Skeleton height={8} radius="xl" />
        <Skeleton height={8} mt={6} radius="xl" />
        <Skeleton height={8} mt={6} width={`${random}%`} radius="xl" />
      </Container>
    </>
  );
};

export default LoadingPage;
