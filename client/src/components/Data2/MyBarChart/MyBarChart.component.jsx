import React, { Component } from 'react';
import "./MyBarChart.css";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';


export default class MyBarChart extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        let { bars, data, xAsisName } = this.props;

        let allBars;
        if (bars) {
            allBars = bars.map((bar, i) => {
                return <Bar key={i} dataKey={bar.dataKey} fill={bar.fill} />
            });
        }

        return (
            <div className="bar-chart">
                <BarChart width={1000} height={400} data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey={xAsisName} />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    {allBars}
                </BarChart>
            </div>
        )
    }
}
