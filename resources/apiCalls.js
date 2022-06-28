const baseURL='http://emgdveocweb01.dmz.maricopa.gov/eoc7/api/rest.svc';

const jurisdiction="/board/agencies/display/agency_list_display";
const femaCode="/board/resource-inventory-working/display/fema_cost_codes_display";


const agencyData=requestData({
    url: baseURL+jurisdiction
}).then (function(data){
    let allData=JSON.parse(data);
    let allJuris=document.getElementById("agency_jurisdiction");
    allData.forEach(function(key){
        allJuris.innerHTML+='<option value = "' + key.agency_name + '" name="'+ key.agency_name + '">' + key.agency_name + '</option> ';
    });
});


const femaCostCodes=requestData({
    url:baseURL+femaCode}).then
  (function(data){
    var allData=JSON.parse(data);
    var allCodes=document.getElementById("fema_cost_code");
    allData.forEach(function(key){
      allCodes.innerHTML+= '<option value = "' + key.fema_cost_code + '" name="'+ key.fema_cost_code + '">' + key.fema_cost_code + '</option> ';
    });
})