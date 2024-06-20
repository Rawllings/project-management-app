import NewProject from "./components/NewProject";
import ProjectsSidebar from "./components/ProjectsSidebar";

function App() {
  return (
    <main className="h-screen my-2 flex gap-8">
      <ProjectsSidebar />
      <NewProject />
    </main>
  );
}

export default App;
