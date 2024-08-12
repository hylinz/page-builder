import { useState } from "react";
import moment from "moment";
import Link from "next/link";

interface PageData {
  template: string;
  title: string | number | boolean;
  updatedAt: string | Date;
  createdAt: string | Date;
}

interface PagesInfoProps {
  data: string;
  template: string;
}

const PagesInfoUI = ({ data, template }: PagesInfoProps) => {
  const parsedData: PageData[] = JSON.parse(data);
  const thClass =
    "px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider";
  const tdClass = 'px-5 py-5 border-b border-gray-200 bg-white text-sm"';

  const filteredData = parsedData.filter(
    (page: PageData) => page.template === template
  );

  const renderTableData = () => {
    if (filteredData.length === 0) {
      return (
        <tr>
          <td className={`${tdClass}`} colSpan={4}>No data available</td>
        </tr>
      );
    }

    return filteredData.map((data: PageData, index) => (
      <tr key={index}>
        <td className={`${tdClass}`}>{data.title}</td>
        <td className={`${tdClass}`}>{moment(data.createdAt).format("L HH:mm:ss")}</td>
        <td className={`${tdClass}`}>{moment(data.updatedAt).format("L HH:mm:ss")}</td>
        <td className={`${tdClass}`}>
          <Link href={`/${data.title}`} className="text-link hover:text-linkHover font-bold">
            Visit
          </Link>
        </td>
      </tr>
    ));
  };

  return (
    <table className="min-w-full leading-normal table-auto">
      <thead>
        <tr>
          <th className={thClass}>Title</th>
          <th className={thClass}>Created At</th>
          <th className={thClass}>Last Updated</th>
          <th className={thClass}>Link</th>
        </tr>
      </thead>
      <tbody>{renderTableData()}</tbody>
    </table>
  );
};

export default PagesInfoUI;
