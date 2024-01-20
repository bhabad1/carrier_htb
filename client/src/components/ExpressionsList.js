import { useEffect, useState } from "react";

const API_URL = "";

const ExpressionsList = () => {
  const [metricData, setMetricData] = useState([
    { metric: "Comfort Index", Expression: "a+b" },
    { metric: "Load", Expression: "avg_runtime" },
    { metric: "kW/Ton", Expression: "1.7325*09*abc" },
  ]);

  useEffect(() => {}, []);
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-4">
      <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
        {/* <div>
          <h2 className="text-lg font-semibold">Expressions list</h2>
          <p className="mt-1 text-sm text-gray-700">
            This is a list of all Expressions.
          </p>
        </div> */}
        {/* <div>
      <button
        type="button"
        className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
      >
        Add new item
      </button>
    </div> */}
      </div>
      <div className="mt-6 flex flex-col">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden border border-gray-200 md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr className="divide-x divide-gray-200">
                    <th
                      scope="col"
                      className="px-7 w-1/3 py-3.5 ml-4 text-left text-lg  font-extrabold fon text-gray-700"
                    >
                      <span>Metric</span>
                    </th>
                    <th
                      scope="col"
                      className="px-12 w-2/3 py-3.5 ml-4 text-left text-lg font-extrabold text-gray-700"
                    >
                      Expression
                    </th>
                    {/* <th scope="col" className="relative px-4 py-3.5">
                  <span className="sr-only">Edit</span>
                </th> */}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {metricData.map((item) => (
                    <tr
                      key={item.metric}
                      className="divide-x divide-gray-200 hover:cursor-pointer"
                    >
                      <td className="whitespace-nowrap px-4 py-4">
                        <div className="flex items-center">
                          <div className="ml-4 text-left">
                            <div className=" text-sm font-medium text-gray-900">
                              {item.metric}
                            </div>
                            {/* Email is not present in your metricData, so skipping it */}
                          </div>
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-12 py-4">
                        <div className="text-sm text-gray-900 ">
                          {item.Expression}
                        </div>
                      </td>
                      {/* <td className="whitespace-nowrap px-4 py-4 text-right text-sm font-medium">
                    <a href="#" className="text-gray-700">
                      Edit
                    </a>
                  </td> */}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpressionsList;
