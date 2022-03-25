import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbDoctorDemo from '../public/images/links/doctordemo.png'
import thumbRealEstate from '../public/images/links/realestate.png'
import thumbToyshopRedesign from '../public/images/links/toyshopredesign.png'
import thumbShoeStore from '../public/images/links/shoestore.png'
import thumbCalculator from '../public/images/links/calculator.png'
import thumbInspireDigital from '../public/images/links/inspiredigital.png'
import thumbOddrush from '../public/images/links/oddrush.png'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem
            id="inspiredigital"
            title="InspireDigital"
            thumbnail={thumbInspireDigital}
          >
            A simple landing site for our family business.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="doctordemo"
            title="Demo Doctor Site"
            thumbnail={thumbDoctorDemo}
          >
            Demo website we presented to our potential clients.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="toyshopredesign"
            title="Toyshop Redesign"
            thumbnail={thumbToyshopRedesign}
          >
            Based on design docs and wireframes.
          </WorkGridItem>
        </Section>
        <Section delay={0.2}>
          <WorkGridItem id="oddrush" title="Oddrush" thumbnail={thumbOddrush}>
            A game I developed during my journey as a casino dealer, for casino
            dealers.
          </WorkGridItem>
        </Section>
        <Section delay={0.2}>
          <WorkGridItem
            id="realestate"
            title="Real Estate"
            thumbnail={thumbRealEstate}
          >
            Full stack application made via a Next.js tutorial
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="shoestore"
            title=".SNEAKERS"
            thumbnail={thumbShoeStore}
          >
            Nikes shoe store, made with VanillaJS, SCSS.
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem
            id="reactcalculator"
            title="Calculator"
            thumbnail={thumbCalculator}
            externalLink="https://github.com/keremduran/calculator.git"
          >
            A calculator application to practice React Basics
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
