import { getAssessmentBySubjectUuid, getSubjectByUuid } from "@/app/actions";
import PDFViewerIndex from "@/app/components/PDFViewer";
import { Title } from "@mantine/core";

interface PageProps {
  params: {
    uuid: string;
  };
}

const TopicPage = async ({ params }: PageProps) => {
  const subjectByUuid = await getSubjectByUuid(params.uuid);
  const assessmentBySubjectUuid = await getAssessmentBySubjectUuid(params.uuid);

  return (
    <div>
      <Title
        classNames={{
          root: "capitalize text-center pb-4",
        }}
        order={1}
      >
        {subjectByUuid?.[0].name}
      </Title>
      <PDFViewerIndex {...{ subjectByUuid, assessmentBySubjectUuid }} />
    </div>
  );
};

export default TopicPage;
