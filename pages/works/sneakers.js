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
  <Layout title="Shoe Store">
    <Container>
      <Title>
        .SNEAKERS <Badge>2022</Badge>
      </Title>
      <P>
        A sample shoe store where I went back to basic Javascript to implement
        features such as state management and animations, which are made easy by
        front-end frameworks. It helped me re-appreciate what is taken for
        granted with front-end frameworks, but it also helps to go back to the
        basics, commemorate the ancient ways.
      </P>
      <P>
        With this one I learned how to use{' '}
        <Link href="https://sass-lang.com/" isExternal>
          SCSS
          <ExternalLinkIcon mx="2px" />
        </Link>
        , and implement animations with regular CSS and Vanilla Javascript. Got
        the design from{' '}
        <Link href="https://www.youtube.com/watch?v=b3Gqq_k-g24" isExternal>
          LAMA Dev
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
          <span>HTML, CSS, Javascript</span>
        </ListItem>
      </List>
      <Heading as="h4" fontSize={16} my={6}>
        <Center>Links</Center>
      </Heading>
      <UnorderedList my={4}>
        <ListItem>
          <Link href="https://github.com/keremduran/sampleshoestore">
            <Badge mr={2}>Repo</Badge>
            Github
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Link href="https://sampleshoestore.vercel.app/">
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
