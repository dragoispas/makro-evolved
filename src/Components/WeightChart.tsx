import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

// Convert dates to timestamps for a linear X-axis
const data = [
    { date: new Date("2024-01-01").getTime(), weight: 70 },
    { date: new Date("2024-01-15").getTime(), weight: 71.6 },
    { date: new Date("2024-02-01").getTime(), weight: 69.5 },
    { date: new Date("2024-02-15").getTime(), weight: 70.2 },
    { date: new Date("2024-03-01").getTime(), weight: 68.9 },
    { date: new Date("2024-03-15").getTime(), weight: 69.3 },
    { date: new Date("2024-04-01").getTime(), weight: 68.0 },
    { date: new Date("2024-04-02").getTime(), weight: 68.4 },
    { date: new Date("2024-04-03").getTime(), weight: 68.7 },
    { date: new Date("2024-04-04").getTime(), weight: 67 },
    { date: new Date("2024-04-04").getTime(), weight: 66.7 }
];

// Format X-axis labels (e.g., "3 Jan")
const formatXAxis = (tickItem: number) => {
    return new Date(tickItem).toLocaleDateString("en-GB", { day: "numeric", month: "short" });
};

// Format Tooltip date (e.g., "3 Jan 2024")
const formatTooltipLabel = (value: number) => {
    return new Date(value).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
};

const generateTicks = (minWeight: number, maxWeight: number) => {
    const ticksArray: number[] = [];
    for (let i = minWeight; i <= maxWeight + 1; i++) {
        ticksArray.push(i);
    }
    return ticksArray;
};

const WeightChart: React.FC = () => {
    // Calculate min and max weight values to set the Y-axis range
    const minWeight = Math.ceil(Math.min(...data.map(item => item.weight))); // Round down
    const maxWeight = Math.floor(Math.max(...data.map(item => item.weight))); // Round up

    const yAxisTicks = generateTicks(minWeight, maxWeight);

    return (
        <ResponsiveContainer width="100%" height={400}>
            <LineChart data={data} margin={{ right: 25, left: -28, top: 20, bottom: 20 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis
                    dataKey="date"
                    type="number"
                    domain={["dataMin", "dataMax"]}
                    scale="time"
                    tickFormatter={formatXAxis}
                    tick={{ fontSize: 12 }}
                />
                <YAxis
                    domain={[minWeight - 1, maxWeight + 1]}  // Set domain to show whole numbers
                    tick={{ fontSize: 12 }}
                    tickFormatter={(tick) => tick.toString()} // Ensure tick value is returned as string
                    ticks={yAxisTicks} // Explicitly set all ticks
                />
                <Tooltip labelFormatter={formatTooltipLabel} />
                <Line type="monotone" dataKey="weight" stroke="rgb(68, 68, 68)" strokeWidth={2} dot={{ r: 3 }} />
            </LineChart>
        </ResponsiveContainer>
    );
};

export default WeightChart;
