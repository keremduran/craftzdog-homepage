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

const WORKS_LIST = [
  {
    id: 'realestate',
    title: 'Real Estate',
    thumbnail: thumbRealEstate,
    description: 'Full stack real-estate application, based in UAE.',
    url: 'https://doktorwebsite-demo-next.vercel.app/',
    githubUrl: 'https://github.com/keremduran/doktorwebsite-demo-next'
  },
  {
    id: 'inspiredigital',
    title: 'InspireDigital',
    thumbnail: thumbInspireDigital,
    description: 'A simple landing site for our digital products company.',
    url: 'https://inspiredigital.vercel.app/',
    githubUrl: 'https://github.com/keremduran/inspiredigital/'
  },
  {
    id: 'doctordemo',
    title: 'Demo Doctor Site',
    thumbnail: thumbDoctorDemo,
    description:
      'A sample landing page for doctors; presented to our potential clients.',
    url: 'https://keremduran.github.io/ToyShopResponsive/index.html',
    githubUrl:
      'https://github.com/keremduran/keremduran.github.io/tree/master/ToyShopResponsive'
  },
  {
    id: 'toyshopredesign',
    title: 'Toyshop Redesign',
    thumbnail: thumbToyshopRedesign,
    description: 'Based on design docs and wireframes.',
    url: '',
    githubUrl: ''
  },
  {
    id: 'oddrush',
    title: 'Oddrush',
    thumbnail: thumbOddrush,
    description: 'A training game for casino dealers.',
    url: 'https://oddrush.vercel.app/',
    githubUrl: 'https://github.com/keremduran/oddrush'
  },
  {
    id: 'sneakers',
    title: '.SNEAKERS',
    thumbnail: thumbSneakers,
    description: 'Nikes shoe store, made with VanillaJS, SCSS.',
    url: 'https://sampleshoestore.vercel.app/',
    githubUrl: 'https://github.com/keremduran/sampleshoestore'
  }
]

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>
      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        {WORKS_LIST.map(
          ({ id, title, thumbnail, description, url, githubUrl }, index) => {
            return (
              <Section key={id + index} delay={0.2 * index}>
                <WorkGridItem
                  id={id}
                  title={title}
                  thumbnail={thumbnail}
                  url={url}
                  githubUrl={githubUrl}
                >
                  {description}
                </WorkGridItem>
              </Section>
            )
          }
        )}
      </SimpleGrid>
    </Container>
  </Layout>
)
export default Works
export { getServerSideProps } from '../components/chakra'
