import NavBar from './components/Sidebar.jsx'
import Hero from './components/Hero.jsx'
import Home from './Home.jsx'
import About from './components/About.jsx'
import Projects from './components/Projects.jsx'
import Socials from './components/Socials.jsx'
import Skills from './components/Skills.jsx'
import AppLayout from './components/AppLayout.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import BlogList from './components/BlogList.jsx'
import Experience from './components/Experience.jsx'
import BlogPost from './components/BlogPost.jsx'
import { blogs } from './Blogs.js'


function App() {

  return (
    <>
      <AppLayout>
      <Routes>
        <Route path='/' element={ <Home/>}/>
        <Route path='/home' element={ <Hero/>}/>
        <Route path='/skills' element={ <Skills/>}/>
        <Route path='/works' element={<Experience/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/socials' element={ <Socials/>}/>
        <Route path='/blogs' element={ <BlogList/>}/>
        <Route path='/blog/:id' element={ <BlogPost blogs={blogs}/>}/>
      </Routes>
      </AppLayout>
   </>
 
  )
}

export default App
