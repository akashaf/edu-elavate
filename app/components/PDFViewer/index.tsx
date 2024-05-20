"use client";
import { Box } from "@mantine/core";
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
    <Box pos="relative">
      <PDFViewer fileUrl={subjectByUuid[0].location} />
      {assessmentBySubjectUuid.length > 0 && (
        <Assessment {...{ assessmentBySubjectUuid }} />
      )}
    </Box>
  );
}
