import {question} from './question'
export class module{
    
    constructor(name,title,questionList){
        this.name=name;
        this.title=title;
        this.questionList=[];
        questionList.forEach(
            (questionElement) => {
                const quest = new question(questionElement.principalQuestion,questionElement.secondaryQuestion,questionElement.response) 
                this.questionList.push(quest);
            }
        )
    }
}