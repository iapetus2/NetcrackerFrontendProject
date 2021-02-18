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
      <button v-on:click="deleteOrder">CANCEL ORDER</button>
      <div class="btn">
      <button v-on:click="showModal">Open Modal!</button>
      <modal
          v-show="isModalVisible"
          @close="closeModal"
      />
        </div>
    </div>
  </div>
</template>

<script>


import axios from "axios";

import modal from "./components/Modal.vue"


let currentId = 0;

export default {
  name: 'app',
  components: {
    modal,

  },

  data() {
    return {
      isModalVisible: false,
    };
  },

  methods: {

    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },

   async orderBUY() {
     //alert("created!")
     await axios.post('http://localhost:8080/api/orders',
         {
           orderId: currentId,
           tradingItemId: 6,
           orderType: "BUY",
           orderPrice: 1000,
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
            headers:{
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*'
            }
          })
      currentId++;
   }
  }

};
</script>

