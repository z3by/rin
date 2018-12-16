import React, { Component } from 'react';
import "./LineChart.css";
import { Line } from 'react-chartjs-2';

export default class LineChart extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {
        this.props.getResettlementData();
    }

    render() {
        return (
            <div className="lineChart">
                <Line
                    data={this.props.data}
                    options={{
                        title: {
                            display: true,
                            text: '',
                            fontSize: 25
                        },
                        legend: {
                            display: true,
                            position: 'left',
                            labels: {
                                fontColor: '#000'
                            }
                        }
                    }}
                    key={Math.random()}
                />
            </div>
        )
    }
}
