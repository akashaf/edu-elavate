import { Viewer, Worker } from "@react-pdf-viewer/core";
import {
  defaultLayoutPlugin,
  ToolbarProps,
} from "@react-pdf-viewer/default-layout";

import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

import readingIndicatorPlugin from "./readingIndicatorPlugin";
import { useCallback } from "react";

interface PDFViewerProps {
  fileUrl: string;
}

const PDFViewer: React.FC<PDFViewerProps> = ({ fileUrl }) => {
  const readingIndicatorPluginInstance = readingIndicatorPlugin();
  const { ReadingIndicator } = readingIndicatorPluginInstance;

  const renderToolbar = useCallback(
    (Toolbar: (props: ToolbarProps) => React.ReactElement) => (
      <>
        <Toolbar />
        <div
          style={{
            bottom: "-0.25rem",
            position: "absolute",
            left: 0,
            // Take the full width of toolbar
            width: "100%",
          }}
        >
          <ReadingIndicator />
        </div>
      </>
    ),
    [ReadingIndicator]
  );

  const defaultLayoutPluginInstance = defaultLayoutPlugin({
    renderToolbar,
  });

  return (
    <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
      <Viewer
        fileUrl={fileUrl}
        plugins={[defaultLayoutPluginInstance, readingIndicatorPluginInstance]}
      />
    </Worker>
  );
};

export default PDFViewer;
