import React from 'react'

class Todos extends React.Component{
    constructor(){
        super();

        this.state={
            todos:[],
            todo:''
        }
    }

    onTodoChange=(e)=>{
        var todo=e.target.value;
        console.log(todo);
        this.setState({
            todo:todo
        })
    }

    addTodo=()=>{
        this.setState({
            todos:[
                ...this.state.todos,
                this.state.todo
            ],
            todo:''
        })
    }

    removeTodo=(todo)=>{
        //Remove todo from state
        this.setState({
            todos:this.state.todos.filter((currentTodo)=>{
                return currentTodo!=todo;
            })
        })
    }

    render(){
        return(
            <div>
                <h1>Todos</h1>
                <input type="text" value={this.state.todo} onChange={this.onTodoChange} name="todo"/>
                <button onClick={this.addTodo}>Add Todo</button>
                <ul>
                    {
                        this.state.todos.map((todo,index)=>{
                            return <li key={index}>{todo} <button onClick={()=>{
                                this.removeTodo(todo)
                            }}>Remove</button></li>
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default Todos;