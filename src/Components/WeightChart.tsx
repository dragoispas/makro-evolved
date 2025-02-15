import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

// Mock weight data over time
const data = [
    { date: "Jan 1", weight: 70 },
    { date: "Jan 15", weight: 71 },
    { date: "Feb 1", weight: 69.5 },
    { date: "Feb 15", weight: 70.2 },
    { date: "Mar 1", weight: 68.9 },
    { date: "Mar 15", weight: 69.3 },
    { date: "Apr 1", weight: 68.0 },
];

const WeightChart: React.FC = () => {
    return (
        <ResponsiveContainer width="100%" height={400}>
            <LineChart data={data} margin={{ right: 25, left: -30, top: 20, bottom: 20 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" tick={{ fontSize: 12 }} />
                <YAxis domain={["dataMin - 1", "dataMax + 1"]} tick={{ fontSize: 12 }} />
                <Tooltip />
                <Line type="monotone" dataKey="weight" stroke="rgb(68, 68, 68)" strokeWidth={2} dot={{ r: 4 }} />
            </LineChart>
        </ResponsiveContainer>
    );
};

export default WeightChart;
