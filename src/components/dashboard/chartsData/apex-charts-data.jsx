import radialimage from '../../../assets/images/dashboard-2/radial-image.png'
import configDB from '../../../data/customizer/config'
import {chartData} from "./data"
const primary = localStorage.getItem('default_color') || configDB.data.color.primary_color;
const secondary = localStorage.getItem('secondary_color') || configDB.data.color.secondary_color;

const dates = chartData.map(val => val["Date"])
const actualData = chartData.map(val => val["Number of Incidents"])
const predictedData = chartData.map(val => val["Predicted Incidents"])

export const areaSpaline = {
  series: [{
    name: 'Actual incidents',
    data: actualData
  }, {
    name: 'Predicted incidents',
    data: predictedData
  }],
  options: {
    chart: {
      height: 350,
      type: 'area'
    },
    dataLabels: {
      enabled: false
    },
    colors:[primary, '#f10542'],
    stroke: {
      curve: 'smooth'
    },
    xaxis: {
      type: 'date',
      categories: dates
    },
    tooltip: {
      x: {
        format: 'dd/MM/yy'
      },
    },
},

}
// Defaut
export const Currentlysale = {
  series: [{
    name: 'Network',
    data: [6, 20, 15, 40, 18, 20, 18, 23, 18, 35, 30, 55, 0]
  }, {
    name: 'Server',
    data: [2, 22, 35, 32, 40, 25, 50, 38, 42, 28, 20, 45, 0]
  },
  {
    name: 'Application',
    data: [12, 2, 15, 22, 40, 35, 55, 48, 32, 18, 25, 15, 0]
  },
],
  options: {
    chart: {
      height: 240,
      type: 'area',
      toolbar: {
        show: false
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth'
    },
    xaxis: {
      type: 'category',
      low: 0,
      offsetX: 0,
      offsetY: 0,
      show: false,
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan"],
      labels: {
        low: 0,
        offsetX: 0,
        show: false,
      },
      axisBorder: {
        low: 0,
        offsetX: 0,
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    markers: {
      strokeWidth: 3,
      colors: "#ffffff",
      strokeColors: [primary, secondary ,"#51bb25" ],
      hover: {
        size: 6,
      }
    },
    yaxis: {
      low: 0,
      offsetX: 0,
      offsetY: 0,
      show: false,
      labels: {
        low: 0,
        offsetX: 0,
        show: false,
      },
      axisBorder: {
        low: 0,
        offsetX: 0,
        show: false,
      },
    },
    grid: {
      show: false,
      padding: {
        left: 0,
        right: 0,
        bottom: -15,
        top: -40
      }
    },
    colors: [primary, secondary, "#51bb25"],
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.5,
        stops: [0, 80, 100]
      }
    },
    legend: {
      show: false,
    },
    tooltip: {
      x: {
        format: 'MM'
      },
    },
  }

}

