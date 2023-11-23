import React from 'react'
import './About.css'
import {module}from'../Models/module';
import QSS from './QSS.json'



export default function About() {
  let moduleList=[];

  castToModule();


 function castToModule(){
    QSS.forEach(
      (obj)=>{
        obj=new module(obj.name,obj.title,obj.questionList);
        moduleList.push(obj)
      }
    )
    console.log(moduleList);
  }




return (

<div className='container'>
{
 moduleList && moduleList.map(qss => {
    return (
  
      <div className="box" key={qss.name}>
       <h2>{qss.name}</h2>
        <h3>{qss.title}</h3>
        <strong>{qss.questionList && qss.questionList.map(quest =>{
          return(
            <div key={qss.name} >
            {quest.principalQuestion}
            {quest.secondaryQuestion}
            </div>
            );
      
        })}
  </strong>
      </div>
    );
  })
}
</div>




    
      
 
  );
}
