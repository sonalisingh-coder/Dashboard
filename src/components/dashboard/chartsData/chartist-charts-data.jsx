import React from 'react';
import { Chart } from "react-google-charts";
import configDB from '../../../data/customizer/config'
const primary = localStorage.getItem('default_color') || configDB.data.color.primary_color;
const secondary = localStorage.getItem('secondary_color') || configDB.data.color.secondary_color;

export const smallchart1data = {
    labels: ['Q1', 'Q2', 'Q3', 'Q4', 'Q5', 'Q6', 'Q7'],
    series: [
        [400, 900, 800, 1000, 700, 1200, 300],
        [1000, 500, 600, 400, 700, 200, 1100]
    ]
}
export const smallchart1option = {
    stackBars: true,
    axisX: {
        showGrid: false,
        showLabel: false,
        offset: 0
    },
    axisY: {
        low: 0,
        showGrid: false,
        showLabel: false,
        offset: 0,
        labelInterpolationFnc: function (value) {
            return (value / 1000) + 'k';
        }
    }

}
export const smallchart2data = {
    labels: ['Q1', 'Q2', 'Q3', 'Q4', 'Q5', 'Q6', 'Q7'],
    series: [
        [400, 600, 900, 800, 1000, 1200, 500],
        [1000, 800, 500, 600, 400, 200, 900]
    ]
}
export const smallchart2option = {
    stackBars: true,
    axisX: {
        showGrid: false,
        showLabel: false,
        offset: 0
    },
    axisY: {
        low: 0,
        showGrid: false,
        showLabel: false,
        offset: 0,
        labelInterpolationFnc: function (value) {
            return (value / 1000) + 'k';
        }
    }

}
export const smallchart3data = {
    labels: ['Q1', 'Q2', 'Q3', 'Q4', 'Q5', 'Q6', 'Q7'],
    series: [
        [1100, 900, 600, 1000, 700, 1200, 300],
        [300, 500, 800, 400, 700, 200, 1100]
    ]
}
export const smallchart3option = {
    stackBars: true,
    axisX: {
        showGrid: false,
        showLabel: false,
        offset: 0
    },
    axisY: {
        low: 0,
        showGrid: false,
        showLabel: false,
        offset: 0,
        labelInterpolationFnc: function (value) {
            return (value / 1000) + 'k';
        }
    }
}

export const smallchart4data = {
    labels: ['Q1', 'Q2', 'Q3', 'Q4', 'Q5', 'Q6', 'Q7'],
    series: [
        [400, 600, 800, 1000, 700, 1100, 300],
        [1000, 500, 600, 300, 700, 200, 1100]
    ]
}
export const smallchart4option = {
    stackBars: true,
    axisX: {
        showGrid: false,
        showLabel: false,
        offset: 0
    },
    axisY: {
        low: 0,
        showGrid: false,
        showLabel: false,
        offset: 0,
        labelInterpolationFnc: function (value) {
            return (value / 1000) + 'k';
        }
    }
}

// export const GooglePieChart2 = () => {
//     return (
//         <Chart
//             width={'100%'}
//             height={'320px'}
//             chartType="PieChart"
//             loader={<div>{"Loading Chart"}</div>}
//             data={[
//                 ['Tickets', 'Numbers'],
//                 ['Open', 30],
//                 ['Closed', 30],
//                 ['Progress', 40]
               
//             ]}
//             options={{
//                 title: '',
//                 colors: ["#a927f9", primary, "#51bb25", "#f8d62b", secondary],
//                 is3D: true,
//             }}
//             rootProps={{ 'data-testid': '2' }}
//         />
//     )
// }

export const GoogleDonutChart = () => {
    return (
        <Chart
            width={'100%'}
            height={'200px'}
            chartType="PieChart"
            loader={<div>{"Loading Chart"}</div>}
            data={[
                ['Tickets', 'Categories'],
                ['Bug/Error', 20],
                ['Feature Request', 30],
                ['Security', 30],
                ['Others', 20]
               
            ]}
            options={{
                title: '',
                colors: ["#a927f9", primary, "#51bb25", "#f8d62b", secondary, secondary],
                pieHole: 0.4,
            }}
        />

    )
}

export const GoogleBasicbarChart = () => {
    return (
        <Chart
            width={'100%'}
            height={'400px'}
            chartType="BarChart"
            loader={<div>{"Loading Chart"}</div>}
            data={[
                ['City', '2010 Population', '2000 Population'],
                ['New York City, NY', 8175000, 8008000],
                ['Los Angeles, CA', 3792000, 3694000],
                ['Chicago, IL', 2695000, 2896000],
                ['Houston, TX', 2099000, 1953000],
                ['Philadelphia, PA', 1526000, 1517000],
            ]}
            options={{
                title: 'Population of Largest U.S. Cities',
                chartArea: { width: '50%' },
                colors: [primary, secondary],
                backgroundColor: 'transparent',
                hAxis: {
                    title: 'Total Population',
                    minValue: 0,
                },
                vAxis: {
                    title: 'City',
                },
            }}
            rootProps={{ 'data-testid': '1' }}
        />
    )
}

export const barChartData = {
    labels: ['Low' , 'Medium' , 'High'],
    datasets: [
        // {
        //     label: 'z',
        //     lagend: 'z',
        //     data: [ 50, 59, 80],
        //     borderColor: primary,
        //     barThickness: 50,
        //     backgroundColor: "rgba(145, 46, 252, 0.4)",
        //     highlightFill: "rgba(145, 46, 252, 0.4)",
        //     highlightStroke: primary,
        //     borderWidth: 2
        // },
        {
            label: 'y',
            lagend: 'y',
            data: [28, 48, 40, 19, 86, 27, 90],
            borderColor: primary,
            barThickness: 80,
            backgroundColor: "rgba(145, 46, 252, 0.4)",
            highlightFill: "rgba(145, 46, 252, 0.4)",
            highlightStroke: primary,
            borderWidth: 2
        }

    ],
    plugins: {
        datalabels: {
            display: false,
            color: 'white'
        }
    }
}
export const barChartOptions = {
    maintainAspectRatio: true,
    legend: {
        display: false,
    },
    plugins: {
        datalabels: {
            display: false,
        }
    }
}

export const GoogleTreeChart = () => {
    return (
        <Chart
            width={'100%'}
            height={'400px'}
            chartType="WordTree"
            loader={<div>{"Loading Chart"}</div>}
            data={[
                ['Phrases'],
                ['cats are better than dogs'],
                ['cats eat kibble'],
                ['cats are better than hamsters'],
                ['cats are awesome'],
                ['cats are people too'],
                ['cats eat mice'],
                ['cats meowing'],
                ['cats in the cradle'],
                ['cats eat mice'],
                ['cats in the cradle lyrics'],
                ['cats eat kibble'],
                ['cats for adoption'],
                ['cats are family'],
                ['cats eat mice'],
                ['cats are better than kittens'],
                ['cats are evil'],
                ['cats are weird'],
                ['cats eat mice'],
            ]}
            options={{
                wordtree: {
                    format: 'implicit',
                    word: 'cats',
                    backgroundColor: 'transparent',
                },
            }}
            rootProps={{ 'data-testid': '1' }}
        />
    )
}
export const doughnutData = {
    labels: ['Bug/Error', 'Feature Request', 'Security' , 'Others'],
    datasets: [{
        data: [350, 450, 100, 200],
        backgroundColor: [primary, secondary, "#51bb25" , "#f8d62b"]
    }]
}
export const doughnutOption = {
    maintainAspectRatio: false,
    legend: {
        display: false,
    },
    plugins: {
        datalabels: {
            display: false,
            color: 'white'
        }
    }
}

