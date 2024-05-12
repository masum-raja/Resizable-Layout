import React from "react";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import { Responsive, WidthProvider } from "react-grid-layout";
import { layouts } from "../constants/layouts";

const ResponsiveGridLayout = WidthProvider(Responsive);

const ExampleGrid = () => {
  // Define the layout configuration for each grid item
  const responsiveProps = {
    className: "responsive-grid",
    breakpoints: { lg: 1200, md: 960, sm: 720, xs: 480, xxs: 0 },
    cols: { lg: 10, md: 10, sm: 10, xs: 10, xxs: 10 },
    layouts: {
      lg: layouts.lg,
      md: layouts.lg,
      sm: layouts.lg,
      xs: layouts.lg,
      xxs: layouts.lg,
    },
    rowHeight: 20,
    compactType: 'horizontal'
  };

  return (
    <ResponsiveGridLayout
      {...responsiveProps}
      style={{ background: "#f0f0f0" }}
    >
      <div key="0" style={{ background: "#4caf50" }}>
        Responsive Item 0
      </div>
      <div key="1" style={{ background: "#4caf50" }}>
        Responsive Item 1
      </div>
      <div key="2" style={{ background: "#4caf50" }}>
        Responsive Item 2
      </div>
    </ResponsiveGridLayout>
  );
};

export default ExampleGrid;
