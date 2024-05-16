const AssessmentPage = ({ params }: { params: any }) => {
  const title = params.assessment_id.replace(/_/g, " ");
  return <>{title}</>;
};

export default AssessmentPage;
