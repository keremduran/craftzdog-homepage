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
  <Layout title="walknote">
    <Container>
      <Title>
        Sample Real Estate Website <Badge>2021 - 2022</Badge>
      </Title>
      <P>
        My first full stack Next.js application, following the{' '}
        <Link href="https://www.youtube.com/watch?v=y47gYvXchXM&t=3300s">
          Youtube tutorial of JavascriptMastery.
          <ExternalLinkIcon mx="2px" />
        </Link>
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Next.js, ChakraUI, RapidAPI</span>
        </ListItem>
      </List>
      <Heading as="h4" fontSize={16} my={6}>
        <Center>Links</Center>
      </Heading>
      <UnorderedList my={4}>
        <ListItem>
          <Link href="https://github.com/keremduran/real-estate">
            <Badge mr={2}>Repo</Badge>
            Github
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Link href="https://real-estate-roan-nine.vercel.app/">
            <Badge mr={2}>App</Badge>
            Vercel
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Link href="https://www.youtube.com/channel/UCmXmlB4-HJytD7wek0Uo97A">
            <Badge mr={2}>Credits</Badge>
            JavaScript Mastery
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </UnorderedList>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
