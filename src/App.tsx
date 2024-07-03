import { Header } from './components/Header'

import './global.css'

import styles from './App.module.css'

import { Form } from './components/Form'

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.container}>
        <Form />

        <main className={styles.main}>

        </main>
      </div>
        
    </div>
  )
}

