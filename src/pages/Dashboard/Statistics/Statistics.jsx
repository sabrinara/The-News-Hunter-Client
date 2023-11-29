import Chart from "react-google-charts";


const Statistics = () => {
    const articleData = [
        ["Publication", "Percentage"],
        ["PublicationA", 20],
        ["PublicationB", 30],
        ["PublicationC", 50],
    ];

    const pieChartOptions = {
        title: "Percentage of Publication Articles",
        is3D: true,
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
        <div className="flex flex-col justify-center">
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    {/* Page content here */}
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                        {/* Sidebar content here */}
                        <li><a>Sidebar Item 1</a></li>
                        <li><a>Sidebar Item 2</a></li>
                    </ul>

                </div>
            </div>
            <Chart
                width={"100%"}
                height={"300px"}
                chartType="PieChart"
                data={articleData}
                options={pieChartOptions}
            />

            {/* Static Bar Chart */}
            <Chart
                width={"100%"}
                height={"300px"}
                chartType="BarChart"
                data={barChartData}
                options={barChartOptions}
            />

            {/* Static Line Chart */}
            <Chart
                width={"100%"}
                height={"300px"}
                chartType="LineChart"
                data={lineChartData}
                options={lineChartOptions}
            />
        </div>
    );
};

export default Statistics;