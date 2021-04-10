<template>
  <div class="graph">
    <apexChart ref="dealchart"
               width="600" height="300"
               type="area"
               :options="options"
               :series="series">
    </apexChart>
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
          [Date.now() - 5000, 33.95],
          [Date.now() - 4000, 35.34],
          [Date.now() - 3000, 32.18],
          [Date.now() - 2500, 37.05],
          [Date.now() - 2000, 31.00],
          [Date.now() - 1000, 35.95],
          [Date.now() - 500, 34.24],
          [Date.now() - 200, 35.29],
          [Date.now(), 33]
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