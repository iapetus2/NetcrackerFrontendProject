<template>
  <div>
  <div id="room">
    <router-view />
    <div class="container">
      <div class="row mt-5">
        <div class="col">
          <h1 class="text-left">Item name room</h1>
        </div>
      </div>

      <div>Price</div>
      <div>
        <label>
          <input type="number" name="Price" id="price" value="">
        </label>
      </div>

      <div>Amount</div>
      <div>
        <label>
          <input type="number" name="Amount" id="amount" value="">
        </label>
      </div>

      <div>
        <button v-on:click="orderBUY">BUY</button>
        <button v-on:click="orderSELL">SELL</button>
      </div>

      <div>Id</div>
      <div>
        <label>
          <input type="number" name="Id" id="id" value="">
        </label>
      </div>

      <div>
        <button v-on:click="deleteOrder">CANCEL ORDER</button>
      </div>
    </div>
  </div>
  </div>
</template>

<script>

import axios from "axios";

let currentId = 0;
export default {
  name: 'room',
  components: {},

  data() {
    return {};
  },

  methods: {

    async orderBUY() {
      await axios.post('http://localhost:8080/api/orders',
          {
            orderId: currentId,
            tradingItemId: this.getItemId(),
            orderType: "BUY",
            orderPrice: this.getPrice(),
            orderDate: new Date(),
            orderAmount: this.getAmount(),
            userId: this.getUserId()
          })
      currentId++;
    },

    async orderSELL() {
      await axios.post('http://localhost:8080/api/orders',
          {
            orderId: currentId,
            tradingItemId: this.getItemId(),
            orderType: "SELL",
            orderPrice: this.getPrice(),
            orderDate: new Date(),
            orderAmount: this.getAmount(),
            userId: this.getUserId()
          })
      currentId++;

    },
    async deleteOrder() {
      let id = this.getId();
      await axios.delete(`http://localhost:8080/api/orders/${id}`,
          {
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*'
            }
          })
      currentId++;
    },

    getPrice() {
      return document.getElementById('price').value;
    },

    getAmount() {
      return document.getElementById('amount').value;
    },

    getId() {
      return document.getElementById('id').value;
    },

    getItemId() {
      return 6;
    },

    getUserId() {
      return 1;
    },

  }
};
</script>

