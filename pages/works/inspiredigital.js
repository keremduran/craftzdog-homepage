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
  <Layout title="InspireDigital">
    <Container>
      <Title>
        InspireDigital <Badge>2022 - ongoing</Badge>
      </Title>
      <P>
        This is a simple initial landing site for our family startup. We aim to
        combine content, design, and product development at one source. This
        project is still in development, it will be an addition to my
        family&apos;s ongoing business providing newspaper and social media
        content to Turkish doctors for more than a decade.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Typescript, Next.js, ChakraUI, FramerMotion.</span>
        </ListItem>
      </List>
      <Heading as="h4" fontSize={16} my={6}>
        <Center>Links</Center>
      </Heading>
      <UnorderedList my={4}>
        <ListItem>
          <Link href="https://github.com/keremduran/inspiredigital/">
            <Badge mr={2}>Repo</Badge>
            Github
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Link href="https://inspiredigital.vercel.app/">
            <Badge mr={2}>App</Badge>
            Vercel
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </UnorderedList>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
