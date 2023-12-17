import Image from 'next/image'
import styles from './page.module.css'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import Sectiontwo from './components/sectiontwo'
import Sectionthree from './components/sectionthree'
import Sectiontfor from './components/sectionfor'
import Sectiontfive from './components/sectionfive'
import Sectiontsix from './components/sectionsix'
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <HeroSection />
       <Sectiontwo/>
       <Sectionthree></Sectionthree>
       <Sectiontfor/>
       <Sectiontfive></Sectiontfive>
       <Sectiontsix></Sectiontsix>
      {/* /*<div className="container mt-24 mx-auto px-12 py-4">
        
        <AchievementsSection />
        <AboutSection />
        <ProjectsSection />
        <EmailSection />
      </div> */}
      {/* <Footer /> */}
    </main>
  )
}
