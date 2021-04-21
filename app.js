'use strict';
let totalPerDayForAll=[0,0,0,0,0,0,0,0,0,0,0,0,0,0];
let hours=['','6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','Daily Location Total'];
const parentElement = document.getElementById('mainContent');
const addCity = document.getElementById('locationForm');
let table =document.createElement('table');
  parentElement.appendChild(table);
  
  let tBody=document.createElement('tbody');
    table.appendChild(tBody);
function Locations(name,min,max,avgCockiesPerSale) {
    this.name=name;
    this.min=min;
    this.max=max;
    this.random=0;
    this.amount=[];
    this.totalAvg=0;
    this.avgCockiesPerSale=avgCockiesPerSale;
    
}
Locations.prototype.getRandom=function(){
    this.random=randomCustomPerHour(this.min,this.max);
    console.log(this.random);

};
Locations.prototype.amountCockiesPerHour=function(average,random){
    average=this.avgCockiesPerSale;
   
        
        for(let i=0;i<hours.length-2;i++){
            this.getRandom(this.min,this.max);
            random=this.random;
            this.amount[i]= Math.ceil(average*random); 
            
            this.totalAvg=this.totalAvg+this.amount[i];
            console.log(this.amount);
            
           }
           for(let j=0;j<this.amount.length;j++){
               totalPerDayForAll[j]+=this.amount[j];
               console.log(totalPerDayForAll);
           }

    
};
Locations.prototype.renderTableContent=function () {
    
    let trContent=document.createElement('tr');
    tBody.appendChild(trContent);
    let tdContent=document.createElement('td');
        trContent.appendChild(tdContent);
        tdContent.textContent=this.name;
    for(let i=0;i<=this.amount.length;i++){
        let tdContent=document.createElement('td');
        trContent.appendChild(tdContent);
        tdContent.textContent=this.amount[i];
        if(i==this.amount.length){
        tdContent.textContent=this.totalAvg;
            break;
        }
    }
    
};

function randomCustomPerHour(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); 
  }

  let seatelConst=new Locations('seatle',23,65,6.3);
  seatelConst.getRandom();
  seatelConst.amountCockiesPerHour(this.avgCockiesPerSale,this.random);
  seatelConst.renderTableContent();
  let tokyoConst=new Locations('Tokyo',3,24,1.2);
  tokyoConst.getRandom();
  tokyoConst.amountCockiesPerHour(this.avgCockiesPerSale,this.random);
  tokyoConst.renderTableContent();
  let dubaiConst=new Locations('Dubai',11,38,3.7);
  dubaiConst.getRandom();
  dubaiConst.amountCockiesPerHour(this.avgCockiesPerSale,this.random);
  dubaiConst.renderTableContent();
  let parisConst=new Locations('Paris',20,38,2.3);
  parisConst.getRandom();
  parisConst.amountCockiesPerHour(this.avgCockiesPerSale,this.random);
  parisConst.renderTableContent();
  let limaConst=new Locations('Lima',2,16,4.6);
  limaConst.getRandom();
  limaConst.amountCockiesPerHour(this.avgCockiesPerSale,this.random);
  limaConst.renderTableContent();
  function tableHeaderAndFooter() {
    let header=document.createElement('thead');
    table.appendChild(header);
    let trHeader=document.createElement('tr');
    header.appendChild(trHeader);
    for(let i=0;i<hours.length;i++){
        let tHeader=document.createElement('th');
        trHeader.appendChild(tHeader);
        tHeader.textContent=hours[i];
    }
    let tFooter=document.createElement('tfoot');
    table.appendChild(tFooter);
    let trFooter=document.createElement('tr');
    tFooter.appendChild(trFooter);
    let tdFooter=document.createElement('td');
    trFooter.appendChild(tdFooter);
    tdFooter.textContent='totals';
    for(let i=0;i<totalPerDayForAll.length;i++){
      let tdFooter=document.createElement('td');
      trFooter.appendChild(tdFooter);
      tdFooter.textContent=totalPerDayForAll[i];
    }
    let totalOfTotals=0;
  for (let i=0;i<totalPerDayForAll.length;i++){
      totalOfTotals+=totalPerDayForAll[i];
  }
  console.log(totalOfTotals);
  totalPerDayForAll[totalPerDayForAll.length-1]=totalOfTotals;
  let tdTotalOfTotals=document.createElement('td');
  trFooter.appendChild(tdTotalOfTotals);
  tdTotalOfTotals.textContent=totalOfTotals;
  }
  tableHeaderAndFooter();
  
  addCity.addEventListener('submit',clickAdd)
  function clickAdd(event) {
      
    event.preventDefault();
    const cName=event.target.cityName.value;
    const minNum=event.target.minimum.value;
    const maxNum=event.target.maximum.value;
    const avg=event.target.avgCocPerSale.value;
    let addingCity =new Locations(cName,minNum,maxNum,avg);
    addingCity.getRandom();
    addingCity.amountCockiesPerHour(this.avgCockiesPerSale,this.random);
    addingCity.renderTableContent();
  }