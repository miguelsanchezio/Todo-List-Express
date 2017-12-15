import React, { Component } from 'react'
import TodoForm from './TodoForm';
import TodoItem from './TodoItem';
import * as apiCalls from './api';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: []
        }
        this.addTodo = this.addTodo.bind(this);
        this.deleteTodo = this.deleteTodo.bind(this);
        this.toggleTodo = this.toggleTodo.bind(this);
    }
    
    componentWillMount() {
        this.loadTodos();
    }

    async loadTodos() {
        let todos = await apiCalls.getTodos();
        this.setState({ todos });
    }

    async addTodo(val) {
        let newTodo = await apiCalls.createTodo(val);
        this.setState({ todos: [...this.state.todos, newTodo]} )
    }

    async deleteTodo(id) {
        await apiCalls.removeTodo(id);
        const todos = this.state.todos.filter(todo => todo._id !== id);
        this.setState({ todos })
    }

    async toggleTodo(id, completed) {
        let updatedTodo = await apiCalls.updateTodo(id, completed);
        const todos = this.state.todos.map(todo =>
            (todo._id === updatedTodo._id)
            ? {...todo, completed: !todo.completed}
            : todo
            );
        this.setState({ todos });
    }

    render() {
        const todos = this.state.todos.map(t => (
            <TodoItem
                key={t._id}
                {...t}
                onDelete={this.deleteTodo}
                onToggle={this.toggleTodo}
            />
        ));

        return (
            <div>
                <h1>Todo List App</h1>
                <TodoForm addTodo={this.addTodo}/>
                <ul>{todos}</ul>
            </div>
        )
    }
}

export default TodoList;