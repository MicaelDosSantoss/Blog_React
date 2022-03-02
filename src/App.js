import React from 'react';
import './App.css';
import Header from './components/Header'
import ListagemPosts from './components/ListagemPosts'
import { Routes,Route} from "react-router-dom"
import ViewPostPage from './pages/post/ViewPostPage'


const App = () => {

  

  // http://localhost:3000
  return(
    <>
    <Header />

    <Routes>
  

{/* O PATH sera o caminho HTTP , é o ELEMENT será oque será renderizado */}

    <Route path="/" element={<ListagemPosts />} />
    <Route path="/posts/:id" element={ <ViewPostPage/>} />

    </Routes>


      
   </>
  )
}

export default App;