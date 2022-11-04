import Head from 'next/head'
import Navbar from '../components/Navbar'
import TodoList from '../components/TodoList'
import TopBar from '../components/TopBar'

export default function Home () {
  return (
    <div>
      <Head>
        <title>Todo app</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='grid place-items-center bg-blue-100 h-screen px-6 font-sans'>
        <Navbar />
        <div className='w-full max-w-3xl shadow-lg rounded-lg p-6 bg-white'>
          <TopBar />

          <hr className='mt-4' />

          <TodoList />

          <hr className='mt-4' />
        </div>
      </main>
    </div>
  )
}
