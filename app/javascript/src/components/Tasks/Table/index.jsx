import React from "react";

import Header from "./Header";
import Row from "./Row";

const Table = ({ data, showTask }) => (
  <div className="flex flex-col">
    <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
        <div className="border-b border-bb-gray-200 shadow overflow-hidden sm:rounded-lg">
          <table className="divide-y min-w-full divide-gray-200">
            <Header />
            <Row data={data} showTask={showTask} />
          </table>
        </div>
      </div>
    </div>
  </div>
);

export default Table;
