import { Header } from './components/Header'

import './global.css'

import styles from './App.module.css'

import { Form } from './components/Form'
import { Info } from './components/Info'
import { Task } from './components/Task'

import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react'

interface Todo {
  id: string;
  content: string;
  isCompleted: boolean
}

export function App() {
  const [todos, setTodos] = useState<Todo[]>([])
  const onAddTodo = (content: string) => {
    const newTodo: Todo = {
      id: uuidv4().toString(),
      content,
      isCompleted: false,
    }

    setTodos([...todos, newTodo])
  }

  const onUpdateStatus = (id: string, isCompleted: boolean) => {
    setTodos(prevTodos =>
      prevTodos.map(todo =>
        todo.id === id ? { ...todo, isCompleted } : todo
      )
    );
  }

  const removeTodo = (id: string) => {
    setTodos(prevTodos =>
        prevTodos.filter(todo => todo.id !== id)
    );
  };

  const total = todos.length;
  const todosCompletedQuantity = todos.filter((todo) => todo.isCompleted).length;

  return (
    <div>
      <Header />
      <div className={styles.container}>
        <Form onAddTodo={onAddTodo}/>

        <main className={styles.main}>
          <Info total={total} completedQuantity={todosCompletedQuantity}/>

          <div className={styles.taskList}>
          {todos.map(todo => (
              <Task
                key={todo.id.toString()}
                id={todo.id.toString()}
                content={todo.content}
                isCompleted={todo.isCompleted}
                onUpdateStatus = {onUpdateStatus}
                removeTodo = {removeTodo}
              />
            ))}
          </div>
        </main>
      </div>
        
    </div>
  )
}

