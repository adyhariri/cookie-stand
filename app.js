'use strict';
let seatle = {
    min : 23 ,
    max : 65 ,
    random : 0 ,
    hours:['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
    amount:[],
    totalAvg:0,
    avgCockiesPerSale : 6.3 ,
    //to calculate the amount of every cockies per hour and saving it on amount array
    amountCockiesPerHour:function(average,random){
        average=this.avgCockiesPerSale;
        for(let i=0;i<this.hours.length;i++){
            this.getRandom(this.min,this.max);
            random=this.random;
            this.amount[i]= Math.ceil(average*random); 
            this.totalAvg=this.totalAvg+this.amount[i];
        }

    },
    //to give the random value calculate by the function randomCustomPerHour
    getRandom : function(min,max)
    {
     this.random=randomCustomPerHour(min,max);
    },
    
    //to render hours and amount from js to unorderd list on html
    render:function(){
        const parentElement = document.getElementById('mainContent');
        let pElement=document.createElement('p');
        pElement.textContent='seatle';
        parentElement.appendChild(pElement);
        let ulElement=document.createElement('ul');
        parentElement.appendChild(ulElement);
        for(let i=0;i<this.hours.length;i++){
            let liElement=document.createElement('li');
            liElement.textContent=`${this.hours[i]} : ${this.amount[i]} cockies`;
            ulElement.appendChild(liElement);

        }
        let liElement=document.createElement('li');
            liElement.textContent=`Total :  ${this.totalAvg} coockies`;
            ulElement.appendChild(liElement);


    },
    

    


};
let Tokyo = {
    min : 3 ,
    max : 24 ,
    random : 0 ,
    totalAvg:0,
    hours:['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
    amount:[],
    
    avgCockiesPerSale : 1.2 ,
    //to calculate the amount of every cockies per hour and saving iton amount array
    amountCockiesPerHour:function(average,random){
        average=this.avgCockiesPerSale;
        for(let i=0;i<this.hours.length;i++){
            this.getRandom(this.min,this.max);
            random=this.random;
            this.amount[i]= Math.ceil(average*random); 
            this.totalAvg=this.totalAvg+this.amount[i];
        }

    },
    //to give the random value calculate by the function randomCustomPerHour
    getRandom : function(min,max)
    {
     this.random=randomCustomPerHour(min,max);
    },
    //to render hours and amount from js to unorderd list on html
    render:function(){
        const parentElement = document.getElementById('mainContent');
        let pElement=document.createElement('p');
        pElement.textContent='Tokyo';
        parentElement.appendChild(pElement);
        let ulElement=document.createElement('ul');
        parentElement.appendChild(ulElement);
        for(let i=0;i<this.hours.length;i++){
            let liElement=document.createElement('li');
            liElement.textContent=`${this.hours[i]} : ${this.amount[i]} cockies`;
            ulElement.appendChild(liElement);

        }
        let liElement=document.createElement('li');
            liElement.textContent=`Total :  ${this.totalAvg} coockies`;
            ulElement.appendChild(liElement);
        
    },


};
let Dubai = {
    min : 11 ,
    max : 38 ,
    random : 0 ,
    totalAvg:0,
    hours:['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
    amount:[],
    
    avgCockiesPerSale : 3.7 ,
    //to calculate the amount of every cockies per hour and saving it on amount array
    amountCockiesPerHour:function(average,random){
        average=this.avgCockiesPerSale;
        for(let i=0;i<this.hours.length;i++){
            this.getRandom(this.min,this.max);
            random=this.random;
            this.amount[i]= Math.ceil(average*random); 
            this.totalAvg=this.totalAvg+this.amount[i];
        }

    },
    //to give the random value calculate by the function randomCustomPerHour
    getRandom : function(min,max)
    {
     this.random=randomCustomPerHour(min,max);
    },
    //to render hours and amount from js to unorderd list on html
    render:function(){
        const parentElement = document.getElementById('mainContent');
        let pElement=document.createElement('p');
        pElement.textContent='Dubai';
        parentElement.appendChild(pElement);
        let ulElement=document.createElement('ul');
        parentElement.appendChild(ulElement);
        for(let i=0;i<this.hours.length;i++){
            let liElement=document.createElement('li');
            liElement.textContent=`${this.hours[i]} : ${this.amount[i]} cockies`;
            ulElement.appendChild(liElement);

        }
        let liElement=document.createElement('li');
            liElement.textContent=`Total :  ${this.totalAvg} coockies`;
            ulElement.appendChild(liElement);

    },


};
let Paris = {
    min : 20 ,
    max : 38 ,
    random : 0 ,
    totalAvg:0,
    hours:['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
    amount:[],
    
    avgCockiesPerSale : 2.3 ,
    //to calculate the amount of every cockies per hour and saving iton amount array
    amountCockiesPerHour:function(average,random){
        average=this.avgCockiesPerSale;
        for(let i=0;i<this.hours.length;i++){
            this.getRandom(this.min,this.max);
            random=this.random;
            this.amount[i]= Math.ceil(average*random); 
            this.totalAvg=this.totalAvg+this.amount[i];
        }

    },
    //to give the random value calculate by the function randomCustomPerHour
    getRandom : function(min,max)
    {
     this.random=randomCustomPerHour(min,max);
    },
    //to render hours and amount from js to unorderd list on html
    render:function(){
        const parentElement = document.getElementById('mainContent');
        let pElement=document.createElement('p');
        pElement.textContent='Paris';
        parentElement.appendChild(pElement);
        let ulElement=document.createElement('ul');
        parentElement.appendChild(ulElement);
        for(let i=0;i<this.hours.length;i++){
            let liElement=document.createElement('li');
            liElement.textContent=`${this.hours[i]} : ${this.amount[i]} cockies`;
            ulElement.appendChild(liElement);

        }
        let liElement=document.createElement('li');
            liElement.textContent=`Total :  ${this.totalAvg} coockies`;
            ulElement.appendChild(liElement);

    },


};let Lima = {
    min : 2 ,
    max : 16 ,
    random : 0 ,
    totalAvg:0,
    hours:['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
    amount:[],
    
    avgCockiesPerSale : 4.6 ,
    //to calculate the amount of every cockies per hour and saving iton amount array
    amountCockiesPerHour:function(average,random){
        average=this.avgCockiesPerSale;
        for(let i=0;i<this.hours.length;i++){
            this.getRandom(this.min,this.max);
            random=this.random;
            this.amount[i]= Math.ceil(average*random); 
            this.totalAvg=this.totalAvg+this.amount[i];
        }

    },
    //to give the random value calculate by the function randomCustomPerHour
    getRandom : function(min,max)
    {
     this.random=randomCustomPerHour(min,max);
    },
    //to render hours and amount from js to unorderd list on html
    render:function(){
        const parentElement = document.getElementById('mainContent');
        let pElement=document.createElement('p');
        pElement.textContent='Lima';
        parentElement.appendChild(pElement);
        let ulElement=document.createElement('ul');
        parentElement.appendChild(ulElement);
        for(let i=0;i<this.hours.length;i++){
            let liElement=document.createElement('li');
            liElement.textContent=`${this.hours[i]} : ${this.amount[i]} cockies`;
            ulElement.appendChild(liElement);

        }
        let liElement=document.createElement('li');
            liElement.textContent=`Total :  ${this.totalAvg} coockies`;
            ulElement.appendChild(liElement);

    },


};


  seatle.amountCockiesPerHour(seatle.avgCockiesPerSale,seatle.getRandom(23,65));
  console.log(seatle.random);
  seatle.render();

  Tokyo.amountCockiesPerHour(Tokyo.avgCockiesPerSale,Tokyo.getRandom(3,24));
  console.log(Tokyo.random);
  Tokyo.render();

  Dubai.amountCockiesPerHour(Dubai.avgCockiesPerSale,Dubai.getRandom(11,38));
  console.log(Dubai.random);
  Dubai.render();

  Paris.amountCockiesPerHour(Paris.avgCockiesPerSale,Paris.getRandom(20,38));
  console.log(Paris.random);
  Paris.render();

  Lima.amountCockiesPerHour(Lima.avgCockiesPerSale,Lima.getRandom(3,24));
  console.log(Lima.random);
  Lima.render();




  //to calculate the random of minimum and maximum
function randomCustomPerHour(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); 
  }
