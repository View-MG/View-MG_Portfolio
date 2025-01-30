import PortfolioItem from "./portfolioItem"
import projects from "./project"
import { useRef } from "react"

function ProjectPage() {
  const scrollRef = useRef(null)

  const handleScroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -300 : 300
      scrollRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      })
    }
  }

  const projectElement = projects.map((project, index) => {
    return <PortfolioItem key={index} project={project} />
  })

  return (
    <>
      <div className="bg-slate-900 py-16">
        <div className="font-bold text-6xl py-8 mb-8 text-center">
          My Projects
        </div>
        <div className="relative">
          <button className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white px-4 py-2 rounded" onClick={() => handleScroll("left")}>&lt;</button>
          <div ref={scrollRef} className="scrollbar-custom w-full flex flex-row overflow-x-auto gap-4 px-4 py-2 scroll-smooth">
            {projectElement}
          </div>
          <button className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white px-4 py-2 rounded" onClick={() => handleScroll("right")}>&gt;</button>
        </div>
      </div>
    </>
  )
}

export default ProjectPage
