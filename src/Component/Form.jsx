import React , {useState} from 'react'
import './Form.css'
import {module}from'../Models/module';
import QSS from './QSS.json'


export default function Form() { 
castToModule();


 function castToModule(){
  let moduleListLocal=[]
    QSS.forEach(
      (obj)=>{
        obj=new module(obj.name,obj.title,obj.questionList);
        moduleListLocal.push(obj)
      }
    )
      return moduleListLocal
  }
const [selectOption , setSelectOption]=useState('')
const [moduleList, setmoduleList]=useState(castToModule())
const handleSelection = (questionName , option)=>{
  setSelectOption((prevOption)=>({
    ...prevOption,
    [questionName]:option,
    
  }))
}
return (

<div className='container'>
{
 moduleList && moduleList.map((qss,indice) => {
    return (
  
      <div className="box" key={qss.name}>
       <h2>{qss.name}</h2>
        <h3>{qss.title}</h3>
        <strong>{qss.questionList && qss.questionList.map((quest,index) =>{
          const questionName = quest.principalQuestion;
          return(
            <div key={questionName}>
            {quest.principalQuestion}<br/>
            <button className={`yes ${selectOption[questionName] === 'yes' ? ' selected' : ''}`}
            onClick={() => {
              quest.response=true;
              handleSelection(questionName, 'yes');
              console.log(moduleList);
              }}>yes</button> 
            <button  className={`no ${selectOption[questionName] === 'no' ? 'selected' : ''}`}
             onClick={() =>{quest.response=false;
               handleSelection(questionName, 'no')
               console.log(moduleList);
             }}>no</button>
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
