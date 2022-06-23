const baseURL='http://emgdveocweb01.dmz.maricopa.gov/eoc7/api/rest.svc';

const jurisdiction="/board/jurisdictions/display/display_jurisdiction_list";


const agencyData=requestData({
    url: baseURL+jurisdiction
}).then (function(data){
    let allData=JSON.parse(data);
    let allJuris=document.getElementById("agency_jurisdiction");
    allData.forEach(function(key){
        allJuris.innerHTML+='<option values="'+key.agency_name+'"name="'+key.agency_name+'">'+key.agency_name+'</option>';
    });
});