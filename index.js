import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import Toggle from './handling-events/Toggle'

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };

    let arr1 = ["Durrab", "Khan"];
    let arr2 = ["Varun", "Sharma"];
    let arr3 = ["Emad", "Hashmi"];
    let concat = arr1.concat(arr2,arr3,arr3);
    console.log(`concated ${concat}`)

    let fruites = ["Apple", "Banana", "Orange", "Mango"];
    //fruites.copyWithin(3,1);

    
    //fruites.shift()
   // fruites.unshift("Durrab");

    fruites.splice(2,0,"Lemon")
    console.log(`checking fruites ${fruites.join(" * ")}`)

    let result = this.twoSum([1,2,3,4,5],8);
    console.log(`result ${result}`);

    result = this.twoSumWithMap([1,2,3,4,5],6);
    console.log(`result to map ${result}`)


  }

  twoSum(arr, target){

    const map = {};

    for(let item in arr){
      let compliment = target - arr[item];
      if(compliment in map){
        return `${compliment} + ${arr[item]} = ${target}`;
      }
      map[arr[item]] = item;
    }

    return 'result not found'
  }

  twoSumWithMap(arr, target){
    const map = new Map();
    
    for(let i=0; i < arr.length; i++){
      const item = arr[i];
      const compliment = target - arr[i];
      if(map.has(compliment)){
        return `${compliment} + ${item} = ${target}`;
      }
      map.set(item, i);
    }
    return `no result found!`
  }

  callMe = (name) => {
    let myFirstPromise = new Promise((resolve, reject) => {
    if(name === undefined){
      
      setTimeout( () => {
        reject({message:"Error occured"});
      },2000);

    }else{

      setTimeout( function() {
      resolve("Success!");
    }, 250) 
    }
    

})

  return myFirstPromise;
  
  }

  callAll = () => {
    const promise1 = Promise.resolve(2);
    const promise2 = 42;
    const promise3 = new Promise((res,rej) => {
      setTimeout(rej,100,'foo');
    })

    Promise.allSettled([promise1,promise2,promise3])
    .then((vals) => {
      console.log(vals);
    })
    .catch(err => {
      console.log(`Error ${err}`);
    })
  }


  render() {
    this.callMe("Durrab").then(res => {
      console.log(`response => ${res}`)

    }).catch(err => { console.log(`rejected ${err.message}`)});

    this.callAll();

    return (
      <div>
        <Hello name={this.state.name} />
        <p>
          Start editing to see some magic happen :)
        </p>
        <Toggle/>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
