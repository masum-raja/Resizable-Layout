import React from "react";
import SampleSplitter from "./SampleSplitter";
import { useResizable } from "react-resizable-layout";
import { cn } from "../utils/cn";

const IdeClone = () => {
  const {
    isDragging: isTerminalDraggingT,
    position: terminalT,
    splitterProps: terminalDragBarPropsT,
  } = useResizable({
    axis: "y",
    initial: 150,
    min: 50,
    reverse: true,
  });

  const {
    isDragging: isTerminalDraggingL,
    position: terminalMarginL,
    splitterProps: terminalDragBarPropsL,
  } = useResizable({
    axis: "x",
  });

  const {
    isDragging: isTerminalDraggingR,
    position: terminalMarginR,
    splitterProps: terminalDragBarPropsR,
  } = useResizable({
    axis: "x",
    reverse: true,
  });

  const {
    isDragging: isTerminalDraggingB,
    position: terminalMarginB,
    splitterProps: terminalDragBarPropsB,
  } = useResizable({
    axis: "y",
    initial: 0,
    min: 0,
    reverse: true,
  });

  const {
    isDragging: isFileDragging,
    position: fileW,
    splitterProps: fileDragBarProps,
  } = useResizable({
    axis: "x",
    initial: 250,
    min: 50,
  });

  const {
    isDragging: isFileDraggingL,
    position: fileMarginL,
    splitterProps: fileDragBarPropsL,
  } = useResizable({
    axis: "x",
    initial: 0,
    min: 0,
  });

  const {
    isDragging: isEditorDraggingR,
    position: editorMarginR,
    splitterProps: pluginDragBarProps,
  } = useResizable({
    axis: "x",
    initial: 0,
    min: 0,
    reverse: true,
  });

  console.log(terminalMarginL, ">>>");

  return (
    <div
      className={
        "flex flex-column h-screen font-mono color-white overflow-hidden"
      }
    >
      <div className={"flex grow"}>
        <SampleSplitter
          isDragging={isFileDraggingL}
          {...fileDragBarPropsL}
          style={{ marginLeft: fileMarginL }}
        />
        <div
          className={cn(
            "shrink-0 contents bg-dark",
            isFileDragging || (isFileDraggingL && "dragging")
          )}
          style={{ width: fileW - fileMarginL }}
        >
          Screen 1
        </div>
        <SampleSplitter isDragging={isFileDragging} {...fileDragBarProps} />
        <div className={"flex grow"}>
          <div className={"grow bg-darker contents"}>Screen 2</div>
          <SampleSplitter
            isDragging={isEditorDraggingR}
            {...pluginDragBarProps}
            style={{ marginRight: editorMarginR }}
          />
        </div>
      </div>
      {/* Terminal */}
      <div style={{ display: "flex" }}>
        <SampleSplitter
          isDragging={isTerminalDraggingL}
          {...terminalDragBarPropsL}
          style={{
            marginLeft: terminalMarginL,

            height: terminalT - terminalMarginB + 10,
          }}
        />
        <div className="grow" >
          <SampleSplitter
            dir={"horizontal"}
            isDragging={isTerminalDraggingT}
            {...terminalDragBarPropsT}
          />
          <div
            className={cn(
              "shrink-0 bg-darker contents",
              isTerminalDraggingT | isTerminalDraggingB | isTerminalDraggingL &&
                "dragging"
            )}
            style={{ height: terminalT - terminalMarginB }}
          >
            Screen 3
          </div>
          <SampleSplitter
            dir={"horizontal"}
            isDragging={isTerminalDraggingB}
            {...terminalDragBarPropsB}
            style={{ marginBottom: terminalMarginB }}
          />
        </div>
        <SampleSplitter
          isDragging={isTerminalDraggingR}
          {...terminalDragBarPropsR}
          style={{
            marginRight: terminalMarginR,

            height: terminalT - terminalMarginB + 10,
          }}
        />
      </div>
    </div>
  );
};

export default IdeClone;
