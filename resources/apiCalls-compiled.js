"use strict";

var baseURL = 'http://emgdveocweb01.dmz.maricopa.gov/eoc7/api/rest.svc';
var jurisdiction = "/board/agencies/display/agency_list_display";
var femaCode = "/board/resource-inventory-working/display/fema_cost_codes_display";
var agencyData = requestData({
  url: baseURL + jurisdiction
}).then(function (data) {
  var allData = JSON.parse(data);
  var allJuris = document.getElementById("agency_jurisdiction");
  allData.forEach(function (key) {
    allJuris.innerHTML += '<option value = "' + key.agency_name + '" name="' + key.agency_name + '">' + key.agency_name + '</option> ';
  });
});
var femaCostCodes = requestData({
  url: baseURL + femaCode
}).then(function (data) {
  var allData = JSON.parse(data);
  var allCodes = document.getElementById("fema_cost_code");
  allData.forEach(function (key) {
    allCodes.innerHTML += '<option value = "' + key.fema_cost_code + '" name="' + key.fema_cost_code + '">' + key.fema_cost_code + '</option> ';
  });
});
