import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  UnorderedList,
  Heading,
  Center
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="Toyshop Redesign">
    <Container>
      <Title>
        Toyshop Redesign <Badge>2018</Badge>
      </Title>
      <P>
        One of my first full projects, a redesign for Treasure Island Toys
        website we made in collaboration with my good friend, Senior UX
        Designer, Yayi Liu, who provided me with the wonderful wireframe designs
        for me to develop this fully responsive website from scratch with pure
        HTML, CSS and JS. You can view the breakdown of the extensive project
        design in her{' '}
        <Link
          isExternal
          href="http://www.yayiliu.com/portfolio/toyshop-web-redesign/"
        >
          portfolio entry.
          <ExternalLinkIcon mx="2px" />
        </Link>
        .
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>HTML, CSS, CSS Grid, Flexbox, Vue.js</span>
        </ListItem>
      </List>
      <Heading as="h4" fontSize={16} my={6}>
        <Center>Links</Center>
      </Heading>
      <UnorderedList my={4}>
        <ListItem>
          <Link
            isExternal
            href="https://github.com/keremduran/keremduran.github.io/tree/master/ToyShopResponsive"
          >
            <Badge mr={2}>Repo</Badge>
            Github <i>(I was just figuring out Github :) )</i>
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Link
            isExternal
            href="https://keremduran.github.io/ToyShopResponsive/index.html"
          >
            <Badge mr={2}>App</Badge>
            Github Pages
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <Heading as="h5" fontSize={14} mt={6} mb={2}>
          More from Yayi!
        </Heading>
        <ListItem>
          <Link isExternal href="http://www.yayiliu.com/">
            <Badge mr={2}>Personal Website</Badge>
            yayiliu.com
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Link isExternal href="https://www.linkedin.com/in/yayi-liu/">
            <Badge mr={2}>Linkedin</Badge>
            /in/yayi-liu/
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </UnorderedList>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
