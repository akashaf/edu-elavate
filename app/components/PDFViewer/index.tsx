"use client";
import { Box, Container } from "@mantine/core";
import PDFViewer from "./PDFViewer";
import Assessment from "./assesment";

export default function PDFViewerIndex({
  subjectByUuid,
  assessmentBySubjectUuid
}: {
  subjectByUuid: any;
  assessmentBySubjectUuid: any;
}) {
  return (
    <Container>
      <Box pos="relative">
        <PDFViewer fileUrl={subjectByUuid[0].file_url} />
        <Assessment {...{assessmentBySubjectUuid}} />
      </Box>
    </Container>
  );
}
