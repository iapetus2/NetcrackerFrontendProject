<template>
  <div class="col-md-12">
    <div class="row mt-5">
      <div class="col">
        <h1 class="text-left">Oil room</h1>
      </div>
    </div>
    <div id="room">

      <div class="card card-container">
        <router-view/>
        <div class="container">
          <div class="form-group">

            <label>Price
              <input type="number" id="price" value="1000" class="form-control"
                     name="Price"
              />
            </label>
            <label>Amount
              <input type="number" id="amount" value="1" class="form-control"
                     name="Amount"
              />
            </label>

            <div>
              <button class="button button-green" v-on:click="orderBUY">BUY</button>

              <button class="button button-red" v-on:click="orderSELL">SELL</button>
            </div>

            <label>Id
              <input type="number" id="id" value="1" class="form-control"
                     name="Id"
              />
            </label>

            <div>
              <button class="button button-cancel" v-on:click="deleteOrder">CANCEL ORDER</button>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import axios from "axios";

export default {
  name: 'room',

  data() {
    return {};
  },

  methods: {

    async orderBUY() {
      await axios.post('http://localhost:8080/api/orders',
          {
            tradingItemId: this.getItemId(),
            orderType: "BUY",
            orderPrice: this.getPrice(),
            orderDate: new Date(),
            orderAmount: this.getAmount(),
            userId: this.getUserId()
          })
    },

    async orderSELL() {
      await axios.post('http://localhost:8080/api/orders',
          {
            tradingItemId: this.getItemId(),
            orderType: "SELL",
            orderPrice: this.getPrice(),
            orderDate: new Date(),
            orderAmount: this.getAmount(),
            userId: this.getUserId()
          })
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

<style>
label {
  display: block;
  margin-top: 10px;
}

.card-container.card {
  max-width: 350px !important;
  padding: 40px 40px;
}

.button {
  background-color: #4CAF50;
  border: none;
  color: white;
  padding: 8px 44px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius: 5px;
}

.button-red {
  background-color: #f44336;
}

.button-green {
  background-color: #4CAF50;
}

.button-cancel {
  background-color: #f44336;
  white-space: normal;
  padding: 8px 90px;
}

.card {
  background-color: #f7f7f7;
  padding: 20px 25px 30px;
  margin: 50px auto 25px;
  -moz-border-radius: 2px;
  -webkit-border-radius: 2px;
  border-radius: 2px;
  -moz-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
  -webkit-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
}
</style>

