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
import { Title, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="walknote">
    <Container>
      <Title>
        Oddrush <Badge>2018 - 2019</Badge>
      </Title>
      <P>
        Between December 2018 and June 2019 I worked as a casino dealer. There,
        I thought it would be a good idea to make a tool for myself and other
        dealers to practice unfamiliar payouts before we actually start dealing,
        because minor mistakes can lead to hundreds of dollars of loss, it could
        raise some questions about our credibility as a dealer. This tool has
        been used by new hires, trainers, and my dealer co-workers who were
        required to deal new games.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Vue/Nuxt.js and Bootstrap</span>
        </ListItem>
      </List>
      <Heading as="h4" fontSize={16} my={6}>
        <Center>Links</Center>
      </Heading>
      <UnorderedList my={4}>
        <ListItem>
          <Link href="https://github.com/keremduran/oddrush">
            <Badge mr={2}>Repo</Badge>
            Github
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Link href="https://oddrush.vercel.app/">
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
