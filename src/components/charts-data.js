import configDB from '../data/customizer/config';
const primary = localStorage.getItem('default_color') || configDB.data.color.primary_color;
const secondary = localStorage.getItem('secondary_color') || configDB.data.color.secondary_color;

export const radialChart ()= {
    series: [70],
    options : {
        chart: {
        height: 350,
        type: 'radialBar',
      },
      plotOptions: {
        radialBar: {
          hollow: {
            margin: 15,
            size: '70%',
            image: require('../assets/images/other-images/success.png'),
            imageWidth: 64,
            imageHeight: 64,
            imageClipped: false
          },
          dataLabels: {
            name: {
              show: false,
              color: '#fff'
            },
            value: {
              show: true,
              color: primary,
              offsetY: 70,
              fontSize: '22px'
            }
          }
        }
      },
      fill: {
        type: 'image',
        image: {
          src: [require('../assets/images/user-card/5.jpg')],
        }
      },
      stroke: {
        lineCap: 'round'
      },
      labels: ['Volatility'],
      }
}
