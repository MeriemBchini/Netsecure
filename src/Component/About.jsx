import React from 'react'
import './About.css'
import {module}from'../Models/module';
import QSS from './QSS.json'
const jsonFile = require('./QSS.json');



export default function About() {
  let moduleList=[];

castToModule();
 function castToModule(){
    jsonFile.forEach(
      (obj)=>{
        obj=new module(obj.module.name,obj.module.title,obj.module.questionList);
        moduleList.push(obj)
      }
    )
  }




return (

<div className='container'>
{
 QSS && QSS.map(qss => {
    return (
      <>
      <div className="box" key={qss.module.name}>
       <h2>{qss.module.name}</h2>
        <h3>{qss.module.title}</h3>
        <strong>{qss.module.questionList && qss.module.questionList.map(quest =>{
          return(
            <div key={qss.module.name} >
            {quest.principalQuestion}
            {quest.secondaryQuestion}
            </div>
            );
      
        }
  )}</strong>
      </div>
      <div className="box1" key={qss.module1.name}>
       <h2>{qss.module1.name}</h2> 
      <h3> {qss.module1.title}</h3> 
       <strong> {qss.module1.questionList && qss.module1.questionList.map(quest=>{
          return(
            <div key={qss.module1.name}>
              {quest.principalQuestion}
              </div>
          )
        })}</strong>

      </div>
      <div className='box2' key={qss.module2.name}>
        <h2>{qss.module2.name}</h2>
        <h3>{qss.module2.title}</h3>
       <strong>{qss.module2.questionList && qss.module2.questionList.map(quest=>{
          return(
          <div key={qss.module2.name}>
          {quest.principalQuestion}</div>
           )
        })}</strong> 
      </div>
      <div className='box3' key={qss.module3}> 
     <h2>{qss.module3.name}</h2> 
      <h3>{qss.module3.title}</h3>
      <strong>{qss.module3.questionList && qss.module3.questionList.map(quest =>{
        return(
          <div key={qss.module3.name}>
          {quest.principalQuestion}
          </div>
        )
      } )}</strong>
      
      
      </div>
      <div className='box4' key={qss.module4}> 
      <h2>{qss.module4.name}</h2>
     <h3>{qss.module4.title}</h3> 
      <strong>{qss.module4.questionList && qss.module4.questionList.map(quest =>{
        return(
          <div key={qss.module4.name}>
          {quest.principalQuestion}
          </div>
        )
      } )}</strong>
      </div>
      <div className='box5' key={qss.module5}> 
      <h2>{qss.module5.name}</h2>
      <h3>{qss.module5.title}</h3>
      <strong>{qss.module5.questionList && qss.module5.questionList.map(quest =>{
        return(
          <div key={qss.module5.name}>
          {quest.principalQuestion}
          </div>
        )
      } )}</strong>
      
      
      </div>
      <div className='box6' key={qss.module6}> 
      <h2>{qss.module6.name}</h2>
      <h3>{qss.module6.title}</h3>
    <strong> {qss.module6.questionList && qss.module6.questionList.map(quest =>{
        return(
          <div key={qss.module6.name}>
          {quest.principalQuestion}
          </div>
        )
      } )}</strong> 
      
      
      </div>
      <div className='box7' key={qss.module7}> 
      <h2>{qss.module7.name}</h2>
      <h3>{qss.module7.title}</h3>
      <strong>{qss.module7.questionList && qss.module7.questionList.map(quest =>{
        return(
          <div key={qss.module7.name}>
          {quest.principalQuestion}
          </div>
        )
      } )}</strong>
      
      
      </div>
      <div className='box8' key={qss.module8}> 
      <h2>{qss.module8.name}</h2>
      <h3>{qss.module8.title}</h3>
      <strong>{qss.module8.questionList && qss.module8.questionList.map(quest =>{
        return(
          <div key={qss.module8.name}>
          {quest.principalQuestion}
          </div>
        )
      } )}</strong>
      
      
      </div>
      <div className='box9' key={qss.module9}> 
     <h2> {qss.module9.name}</h2>
     <h3> {qss.module9.title}</h3>
     <strong> {qss.module9.questionList && qss.module9.questionList.map(quest =>{
        return(
          <div key={qss.module9.name}>
          {quest.principalQuestion}
          </div>
        )
      } )}</strong>
      
      
      </div>
      <div className='box10' key={qss.module10}> 
      <h2>{qss.module10.name}</h2>
     <h3>{qss.module10.title}</h3> 
      <strong>{qss.module10.questionList && qss.module10.questionList.map(quest =>{
        return(
          <div key={qss.module10.name}>
          {quest.principalQuestion}
          </div>
        )
      } )}</strong>
      
      
      </div>
      <div className='box11' key={qss.module11}> 

     <h2>{qss.module11.name}</h2> 
     <h3> {qss.module11.title}</h3>
     <strong> {qss.module11.questionList && qss.module11.questionList.map(quest =>{
        return(
          <div key={qss.module11.name}>
          {quest.principalQuestion}
          </div>
        )
      } )}</strong>
      
      
      </div>
      </>
    );
  })
}
</div>




    
      
 
  );
}
