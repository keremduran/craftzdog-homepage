import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbInkdrop from '../public/images/works/inkdrop_eyecatch.png'
import thumbDoctorDemo from '../public/images/links/doctordemo.png'
import thumbRealEstate from '../public/images/links/realestate.png'
import thumbNextPokedex from '../public/images/links/nextpokedex.png'
import thumbCalculator from '../public/images/links/calculator.png'
import thumbInspireDigital from '../public/images/links/inspiredigital.png'
import thumbOddrush from '../public/images/links/oddrush.png'
import thumbWalknote from '../public/images/works/walknote_eyecatch.png'
import thumbFourPainters from '../public/images/works/the-four-painters_eyecatch.jpg'
import thumbMenkiki from '../public/images/works/menkiki_eyecatch.png'
import thumbModeTokyo from '../public/images/works/modetokyo_eyecatch.png'
import thumbStyly from '../public/images/works/styly_eyecatch.png'
import thumbPichu2 from '../public/images/works/pichu2_eyecatch.png'
import thumbFreeDBTagger from '../public/images/works/freedbtagger_eyecatch.png'
import thumbAmembo from '../public/images/works/amembo_eyecatch.png'

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
        <Section delay={0.2}>
          <WorkGridItem id="oddrush" title="Oddrush" thumbnail={thumbOddrush}>
            A practice game I developed while working as a casino dealer, for
            new hires to practice payouts.
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
        <Section delay={0.3}>
          <WorkGridItem
            id="nextpokedex"
            title="Pokedex"
            thumbnail={thumbNextPokedex}
            externalLink="https://github.com/keremduran/next-pokedex.git"
          >
            A brief application to test the pokemon api with Next.js
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
