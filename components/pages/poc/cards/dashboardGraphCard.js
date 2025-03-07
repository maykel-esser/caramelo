import { LineChart } from "@mantine/charts";

export default function DashboardGraphCard(props) {
    const { data, title, description, label } = props;

    return (
        <section className="mb-8 bg-white p-4 rounded-xl">
            <div className="flex items-center gap-3 mb-6">
                {props.icon && (
                    <props.icon className="rounded-full w-10 p-2 bg-yellow-400 text-white" />
                )}
                <div>
                    <h2 className="font-bold">{title}</h2>
                    <p className="text-sm">{description}</p>
                </div>
            </div>
            <div className="-ml-6">
                <LineChart
                    h={150}
                    data={data.data}
                    series={[{ name: "count", label: label }]}
                    dataKey={data.dataKey}
                    type="gradient"
                    gradientStops={[
                        { offset: 0, color: "lime.5" },
                        { offset: 20, color: "cyan.5" },
                        { offset: 50, color: "yellow.5" },
                        { offset: 70, color: "orange.6" },
                        { offset: 100, color: "red.6" },
                    ]}
                    strokeWidth={3}
                    curveType="natural"
                />
            </div>
        </section>
    );
}
