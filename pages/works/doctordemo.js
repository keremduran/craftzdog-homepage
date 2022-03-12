import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  SimpleGrid,
  UnorderedList,
  Heading,
  Center
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="walknote">
    <Container>
      <Title>
        Demo Doctor Site <Badge>2022 - Ongoing</Badge>
      </Title>
      <P>
        This is the example website we included at our first offer as a
        business, which provides a fully loaded landing page with blogging
        capabilities through DatoCMS. I have designed and developed this website
        from without a template, using bootstrap and Next.js components. GraphQL
        was used to connect with the headless cms on page and component level to
        make the content completely customizable.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Next.js, DatoCMS, Bootstrap5 and GraphQL</span>
        </ListItem>
      </List>
      <Heading as="h4" fontSize={16} my={6}>
        <Center>Links</Center>
      </Heading>
      <UnorderedList my={4}>
        <ListItem>
          <Link href="https://github.com/keremduran/doktorwebsite-demo-next">
            <Badge mr={2}>Repo</Badge>
            Github
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Link href="https://doktorwebsite-demo-next.vercel.app/">
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
