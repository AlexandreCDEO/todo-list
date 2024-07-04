import { Header } from './components/Header'

import './global.css'

import styles from './App.module.css'

import { Form } from './components/Form'
import { Info } from './components/Info'
import { Task } from './components/Task'

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.container}>
        <Form />

        <main className={styles.main}>
          <Info />

          <div className={styles.taskList}>
            <Task />
            <Task />
            <Task />
            <Task />
            <Task />
          </div>
        </main>
      </div>
        
    </div>
  )
}

