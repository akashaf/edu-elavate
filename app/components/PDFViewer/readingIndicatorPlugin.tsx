import { createStore, Plugin, PluginFunctions } from "@react-pdf-viewer/core";

import ReadingIndicator from "./ReadingIndicator";
import StoreProps from "./StoreProps";
import { useMemo } from "react";

interface ReadingIndicatorPlugin extends Plugin {
  ReadingIndicator: () => React.ReactElement;
}

const ReadingIndicatorPlugin = (): ReadingIndicatorPlugin => {
  const store = useMemo(() => createStore<StoreProps>({}), []);

  const ReadingIndicatorDecorator = () => <ReadingIndicator store={store} />;

  return {
    install: (pluginFunctions: PluginFunctions) => {
      store.update("getPagesContainer", pluginFunctions.getPagesContainer);
    },
    ReadingIndicator: ReadingIndicatorDecorator,
  };
};

export default ReadingIndicatorPlugin;
