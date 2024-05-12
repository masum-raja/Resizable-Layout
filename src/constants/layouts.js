const availableHandles = ["s", "w", "e", "n"];
export const layouts = {
  lg: [
    {
      x: 0,
      y: 0,
      w: 2,
      h: 10,
      maxW: 8,
      i: "0",
      isDraggable: false,
      resizeHandles: availableHandles,
    },
    {
      x: 2,
      y: 0,
      w: 2,
      h: 10,
      i: "1",
      isDraggable: false,
      resizeHandles: availableHandles,
    },
    {
      x: 0,
      y: 10,
      w: 10,
      h: 10,
      i: "2",
      isDraggable: false,
      resizeHandles: availableHandles,
    },
  ],
};
