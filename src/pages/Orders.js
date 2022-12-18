import React from "react";
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Resize,
  Sort,
  Page,
  Edit,
  ExcelExport,
  PdfExport,
  Inject,
  ContextMenu,
} from "@syncfusion/ej2-react-grids";
import { ordersData, ordersGrid, contextMenuItems } from "../data/dummy";
import Header from "../components/Header";

function Orders() {
  return (
    <div className="m-2 md:m-10 p-2 md:p-10 rounded-3xl bg-white dark:bg-secondary-dark-bg">
        <Header category={'page'} title={'orders'} />
        <GridComponent
          id="gridcomp"
          dataSource={ordersData}
          allowSorting={true}
          allowPaging
          allowExcelExport
          allowPdfExport
          allowResizing
          contextMenuItems={contextMenuItems}
          editSettings={{ allowEditing: true }}
        >
          <ColumnsDirective>
            {ordersGrid.map((item, index) => {
              return (
                <ColumnDirective
                  className="cursor-pointer "
                  key={index}
                  {...item}
                />
              );
            })}
          </ColumnsDirective>
          <Inject
            services={[
              Sort,
              Edit,
              Page,
              ContextMenu,
              ExcelExport,
              PdfExport,
              Resize
            ]}
          />
        </GridComponent>
      </div>
  );
}

export default Orders;
