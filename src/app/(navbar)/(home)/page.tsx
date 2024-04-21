import HeroSection from '@/components/HeroSection/HeroSection'
import Course from '@/components/Course/Course'
import NoticePage from '@/components/Notice/Notice'
import Notes from '@/components/Notes/page'
import OurCoordinator from '@/components/OurCoordinator/OurCoordinator'

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <NoticePage />
      <Notes />
      <Course />
      <OurCoordinator />
    </>
  )
}

export default HomePage