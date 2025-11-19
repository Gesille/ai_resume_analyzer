import type { Route } from "./+types/home";
import Navbar from "~/components/Navbar";
import {resumes} from "~/constants";
import ResumeCard from "~/components/ResumeCard";


export function meta({}: Route.MetaArgs) {
  return [
    { title: "Resuming" },
    { name: "description", content: "Smart feedback for your dream" },
  ];
}

export default function Home() {
  return <main className="background-gradient bg-cover" >
      <Navbar />
      <section className="main-section">
          <div className="page-heading py-16">
              <h1>Track Your Application & Resume Rating</h1>
              <h2 className="m-[-20px]">Review Your submissions and check AI-powered feedback.</h2>

          </div>


      {resumes.length > 0 && (
          <div className="resumes-section ">
              {resumes.map((resume)=> (
                  <ResumeCard key={resume.id} resume={resume}/>
              ))}
          </div>
      )}
      </section>
  </main>
}
