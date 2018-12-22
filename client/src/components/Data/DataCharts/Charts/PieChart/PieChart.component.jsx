import React, { Component } from 'react';
import "./PieChart.css";
import { Pie } from 'react-chartjs-2';

export default class PieChart extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentWillMount() { }

    componentDidMount() { }

    getChartData = () => { }

    render() {
        return (
            <div className="pieChart">
                <Pie
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