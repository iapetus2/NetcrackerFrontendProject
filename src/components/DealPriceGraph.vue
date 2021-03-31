<template>
  <div class="graph">
    <apexChart ref="dealchart" width="600" height="300" type="area" :options="options" :series="series"></apexChart>
  </div>
</template>

<script>
import VueApexCharts from 'vue-apexcharts';

export default {
  name: 'DealPriceGraph',
  components: {
    apexChart: VueApexCharts,
  },
  data: function () {
    return {
      options: {
        data: [

        ],
        chart: {
          id: 'dealPriceGraph',
          type:
              'area',
          height:
              350,
          zoom:
              {
                autoScaleYaxis: true
              }
        }
        ,
        dataLabels: {
          enabled: false
        }
        ,
        markers: {
          size: 0,
          style:
              'hollow',
        },
        xaxis: {
          type: 'datetime',
        },
        stroke: {
          curve: 'straight',
        },
        tooltip: {
          x: {
            format: 'dd.MM.yyyy HH:mm:ss'
          }
        },
        fill: {
          type: 'gradient',
          gradient:
              {
                shadeIntensity: 1,
                opacityFrom:
                    0.7,
                opacityTo:
                    0.9,
                stops:
                    [0, 100]
              }
        }
      },
      series: [{
        name: 'price',
        data: [
          [1616606000000, 30.95],
          [1616616400000, 31.34],
          [1616646600000, 31.18],
          [1616666800000, 31.05],
          [1616676800000, 31.00],
          [1616778800000, 30.95],
          [1616886800000, 31.24],
          [1616997200000, 31.29],
        ]
      }]
    }
  }
  ,
}
</script>
<style scoped>
.graph {
  margin: auto 1px;
  width: 100px;
  height: auto;
  position: absolute;
  top: 80px;
}
</style>