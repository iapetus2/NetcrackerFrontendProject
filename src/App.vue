<template>
  <div class="container">
    <div class="row mt-5">
      <div class="col">
        <h1 class="text-left">Item name room</h1>
      </div>
    </div>


    <div>
      <button v-on:click="orderBUY">BUY</button>
      <button v-on:click="orderSELL">SELL</button>
      <button v-on:click="deleteOrder">deleteOrder</button>
    </div>

    <div class="row mt-5" v-if="arrPositive.length > 0">
      <div class="col">
        <h2 class="text-center">Price</h2>
        <line-chart
          :chartData="arrPositive"
          :options="chartOptions"
          :chartColors="positiveChartColors"
          label="Price"
        />
      </div>
    </div>

    <div class="row mt-5" v-if="arrHospitalized.length > 0">
      <div class="col">
        <h2 class="text-center">Number of sold items</h2>
        <line-chart
          :chartData="arrHospitalized"
          :options="chartOptions"
          :chartColors="hospitalizedChartColors"
          label="Number of sold items"
        />
      </div>
    </div>

    <div class="row mt-5" v-if="arrInIcu.length > 0">
      <div class="col">
        <h2 class="text-center">market offers</h2>
        <line-chart
          :chartData="arrInIcu"
          :options="chartOptions"
          :chartColors="inIcuColors"
          label="market offers"
        />
      </div>
    </div>
  </div>
</template>

<script>


import axios from "axios";
import moment from "moment";


import LineChart from "./components/LineChart";


let currentId = 0;
export default {
  components: {
    LineChart,
  },
  data() {
    return {


      arrPositive: [],
      positiveChartColors: {
        borderColor: "#077187",
        pointBorderColor: "#0E1428",
        pointBackgroundColor: "#AFD6AC",
        backgroundColor: "#74A57F"
      },
      arrHospitalized: [],
      hospitalizedChartColors: {
        borderColor: "#251F47",
        pointBorderColor: "#260F26",
        pointBackgroundColor: "#858EAB",
        backgroundColor: "#858EAB"
      },
      arrInIcu: [],
      inIcuColors: {
        borderColor: "#190B28",
        pointBorderColor: "#190B28",
        pointBackgroundColor: "#E55381",
        backgroundColor: "#E55381"
      },
      arrOnVentilators: [],
      onVentilatorsColors: {
        borderColor: "#784F41",
        pointBorderColor: "#784F41",
        pointBackgroundColor: "#BBE5ED",
        backgroundColor: "#BBE5ED"
      },
      arrRecovered: [],
      recoveredColors: {
        borderColor: "#4E5E66",
        pointBorderColor: "#4E5E66",
        pointBackgroundColor: "#31E981",
        backgroundColor: "#31E981"
      },
      arrDeaths: [],
      deathColors: {
        borderColor: "#E06D06",
        pointBorderColor: "#E06D06",
        pointBackgroundColor: "#402A2C",
        backgroundColor: "#402A2C"
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false
      }
    };
  },

  methods: {

   async orderBUY() {
     //alert("created!")
     await axios.post('http://localhost:8080/api/orders',
         {
           orderId: currentId,
           tradingItemId: 6,
           orderType: "BUY",
           orderPrice: 1000,
           //orderDate: "2021-02-16T10:15:20.443+00:00",
           orderDate: new Date(),
           userId: 1
         })
     currentId++;
   },

    async orderSELL() {
      await axios.post('http://localhost:8080/api/orders',
          {
            orderId: currentId,
            tradingItemId: 6,
            orderType: "SELL",
            orderPrice: 1000,
            orderDate: new Date(),
            userId: 1
          })
      currentId++;

    },
    async deleteOrder() {
      currentId--;
      await axios.delete(`http://localhost:8080/api/orders/${currentId}`,
          {
          //   data:{
          //     orderId: currentId
          //   },
            headers:{
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*'
            }
          })
      currentId++;
   }
  },

  async created() {
    const { data } = await axios.get("https://covidtracking.com/api/us/daily",
        {
          headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
          }
        });

    data.forEach(d => {
      const date = moment(d.date, "YYYYMMDD").format("MM/DD");
      const {
        positive,
        hospitalizedCurrently,
        inIcuCurrently,
        onVentilatorCurrently,
        recovered,
        death
      } = d;

      this.arrPositive.push({ date, total: positive });
      this.arrHospitalized.push({ date, total: hospitalizedCurrently });
      this.arrInIcu.push({ date, total: inIcuCurrently });
      this.arrOnVentilators.push({ date, total: onVentilatorCurrently });
      this.arrRecovered.push({ date, total: recovered });
      this.arrDeaths.push({ date, total: death });
    });
  }
};
</script>

<style>
</style>
