/* global $ */
$(document).ready(function () {

  // let orderID = 0;

  const urlParams = new URLSearchParams(window.location.search);
  let orderID = urlParams.get('orderId') || 0;

  loadOrderHistory();

  if (orderID !== 0) {
    loadOrder();
  }

  async function loadOrderHistory() {

    let id = $('#userid').val();
    console.log('userid: ' + id);
    //let id = 44;
    let url = `/api/history?id=${id}`;
    let response = await fetch(url);
    let data = await response.json();

    data.forEach(function (i) {
      console.log(i);
      console.log(`<option value="${i.orderID}"> ${i.orderID} </option>`);
      $('#history').append(`<option value="${i.orderID}"> ${i.orderID} </option>`);
    });
  }

  $('#history').on('change', async function () {
    orderID = $('#history').val();
    console.log('History Button: ' + orderID);


  });

  async function loadOrder() {
    console.log('Order Button');
    let url = `/api/order?id=${orderID}`;
    let response = await fetch(url);
    let data = await response.json();

    $('#orders').empty();
    $('#orders').append('<tr><th>Order Number: ' + orderID + '</tr></th>');
    $('#orders').append('<tr><th>Item</th></tr>');

    data.forEach(function (i) {
      $('#orders').append(`<tr><td>${i.itemDescription}</td></tr>`);
    });
  }

  $('#order').on('click', loadOrder);

}); //document
