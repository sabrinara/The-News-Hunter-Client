import { useState } from "react";
import Chart from "react-google-charts";
import { NavLink } from "react-router-dom";

const Charts = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const pieChartData = [
        ["Category", "Value"],
        ["CategoryA", 10],
        ["CategoryB", 20],
        ["CategoryC", 30],
    ];

    const pieChartOptions = {
        title: "Pie Chart Example",
    };

    const barChartData = [
        ["Category", "Value"],
        ["CategoryA", 10],
        ["CategoryB", 20],
        ["CategoryC", 30],
    ];

    const barChartOptions = {
        title: "Bar Chart Example",
    };

    const lineChartData = [
        ["Date", "Value"],
        ["2023-01-01", 50],
        ["2023-01-02", 60],
        ["2023-01-03", 45],
    ];

    const lineChartOptions = {
        title: "Line Chart Example",
        curveType: "function",
    };

    return (
        <div className="flex ">
            {/* Sidebar */}
            <div className={`fixed inset-0 overflow-hidden z-50 ${isSidebarOpen ? "block" : "hidden"}`}>
                <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                    <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                </div>
                <div className="fixed inset-y-0 right-0 pl-10 max-w-full flex sm:pl-16">
                    <div className="w-screen max-w-md">
                        {/* Sidebar Content */}
                        <div className="h-full flex flex-col bg-white shadow-xl overflow-y-scroll">
                            <div className="p-4">
                            <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                        <li>
                            <NavLink to="/allusers">All Users</NavLink>
                        </li>
                        <li>
                            <NavLink to="/allarticlesadmin">All Articles</NavLink>
                        </li>
                        <li>
                            <NavLink to="/addpublishers">Add Publisher</NavLink>
                        </li>
                    </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-grow p-8">
                {/* Button to toggle sidebar */}
                <button
                    onClick={toggleSidebar}
                    className="bg-blue-500 text-white px-4 py-2 rounded-md mb-4"
                >
                    {isSidebarOpen ? "Close Sidebar" : "Open Sidebar"}
                </button>

                {/* Responsive Pie Chart */}
                <Chart
                    width={"100%"}
                    height={"300px"}
                    chartType="PieChart"
                    data={pieChartData}
                    options={pieChartOptions}
                />

                {/* Responsive Bar Chart */}
                <Chart
                    width={"100%"}
                    height={"300px"}
                    chartType="BarChart"
                    data={barChartData}
                    options={barChartOptions}
                />

                {/* Responsive Line Chart */}
                <Chart
                    width={"100%"}
                    height={"300px"}
                    chartType="LineChart"
                    data={lineChartData}
                    options={lineChartOptions}
                />
            </div>
        </div>
    );
};

export default Charts;
