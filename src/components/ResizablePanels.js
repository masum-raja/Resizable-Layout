import React from "react";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";

const ResizablePanels = () => {
  return (
    <div style={{width: '100%', height: '100vh' }}>
      <PanelGroup direction="horizontal">

        <Panel
          style={{ backgroundColor: "lightgray", border: "1px solid black" }}
          defaultSize={30}
          minSize={20}
        >
          Screen 1
        </Panel>
        <PanelResizeHandle />
        <Panel
          style={{ backgroundColor: "lightgray", border: "1px solid black" }}
          minSize={30}
        >
          Screen 2
        </Panel>
      </PanelGroup>
    </div>
  );
};

export default ResizablePanels;
