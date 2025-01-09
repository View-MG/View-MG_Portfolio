import Header from "./component/header"
import Main from "./component/main_page"
import ProjectPage from "./component/project_page"
import Contact from "./component/contact"
function App() {
  return (
    <>
      <div className="bg-black text-white">
          <Header/>
          <Main/>
          <ProjectPage/>
          <Contact/>
      </div>
    </>
  )
}

export default App
