import { Container } from '@chakra-ui/react'
import { Header } from './components/header'
import { HomeSection } from './components/sections/home'
import { AboutSection } from './components/sections/about'
import { ServicesSection } from './components/sections/services'
import { TestimonialsSection } from './components/sections/testimonials'
import { Footer } from './components/footer'

import './styles/app.scss'

function App() {
  return (
    <Container
			width="100vw"
			minH="100vh"
			bg="brand.green.light1"
		>
      <Header />
			<HomeSection />
			<ServicesSection />
			<AboutSection />
			<TestimonialsSection />
			<Footer />
    </Container>
  )
}

export default App