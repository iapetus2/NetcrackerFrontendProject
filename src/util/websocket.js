import SockJS from 'sockjs-client'
import { Stomp } from '@stomp/stompjs'
import ApexCharts from 'apexcharts'

var stompClient = null

export function connect() {
    const socket = new SockJS('http://localhost:8080/connect')
    stompClient = Stomp.over(socket)
    stompClient.reconnect_delay = 5000;
    stompClient.connect({}, frame => {
        console.log('Connected: ' + frame)
        stompClient.subscribe('/topic/deals',message => {
            const parsed = JSON.parse(message.body)
            const price = parsed.price
            var time = new Date(parsed.time)
            console.log('Price: ' + price + '\n')
            console.log('Date: ' + time)
            updateGraph(time.getTime(), price)
            //updateDealTable
        })
        /*
        //Add an endpoint for orderTable
        stompClient.subscribe('/topic/orders',message => {
            //updateOrderTable
        })
        //Add an endpoint for currentOrders?
        stompClient.subscribe('/topic/current',message => {

        })

         */
    })
}

export function disconnect() {
    if (stompClient !== null) {
        stompClient.disconnect()
    }
    console.log("Disconnected")
}

export function updateGraph(date, price){
    ApexCharts.exec('dealPriceGraph', 'appendData', [{
        data:[[date,price]]
    }])
}