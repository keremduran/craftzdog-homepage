import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbDoctorDemo from '../public/images/links/doctordemo.png'
import thumbRealEstate from '../public/images/links/realestate.png'
import thumbToyshopRedesign from '../public/images/links/toyshopredesign.png'
import thumbSneakers from '../public/images/links/sneakers.png'
import thumbInspireDigital from '../public/images/links/inspiredigital.png'
import thumbOddrush from '../public/images/links/oddrush.png'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.2}>
          <WorkGridItem
            id="realestate"
            title="Real Estate"
            thumbnail={thumbRealEstate}
          >
            Full stack real-estate application, based in UAE.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="inspiredigital"
            title="InspireDigital"
            thumbnail={thumbInspireDigital}
          >
            A simple landing site for our digital products company.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="doctordemo"
            title="Demo Doctor Site"
            thumbnail={thumbDoctorDemo}
          >
            A sample landing page for doctors; presented to our potential
            clients.
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
            A training game for casino dealers.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="sneakers"
            title=".SNEAKERS"
            thumbnail={thumbSneakers}
          >
            Nikes shoe store, made with VanillaJS, SCSS.
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
