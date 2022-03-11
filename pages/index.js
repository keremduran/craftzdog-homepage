import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  SimpleGrid,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra
} from '@chakra-ui/react'
import { ChevronRightIcon, EmailIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5'
import thumbYouTube from '../public/images/links/youtube.png'
import thumbInspireDigital from '../public/images/links/inspiredigital.png'
import thumbDoctorDemo from '../public/images/links/doctordemo.png'
import thumbInkdrop from '../public/images/works/inkdrop_eyecatch.png'
import Image from 'next/image'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
      >
        Hello👋, I&apos;m a full-stack developer based in Toronto!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Kerem Duran
          </Heading>
          <p>Software Developer ( Engineer / Developer / Translator)</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/kerem1.jpg"
              alt="Profile image"
              borderRadius="full"
              width="100%"
              height="100%"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          About Me
        </Heading>
        <Paragraph>
          Welcome to my castle! Thank you for your time and interest in getting
          to know me. Born into a family of humanitarian activists who were the
          founding members establishing Lambda Istanbul (former official LGBT
          Community of Turkey), I&apos;ve naturally gravitated towards similar
          sentiments, and helped Refugees and Immigrants to settle in Toronto
          since 2017. Recently, I made the decision to fully transition to
          Software Engineering, since my heart is in Mathematics and an
          Engineering. I chose to start with web technologies, because I know
          that it could be a reliable voice for people who have a passion.
          Currently, I&apos;m working to establish our family business,{' '}
          <Link href="https://inspiredigital.vercel.app/" isExternal>
            InspireDigital
          </Link>
          , providing primarily Turkish doctors with Full-Stack websites and
          also content!
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/works" scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="purple">
              My portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>Jun, 1994</BioYear>
          Born in Istanbul, Turkey.
        </BioSection>
        <BioSection>
          <BioYear>Sep, 2013</BioYear>
          Started Mathematical Engineering Program in Istanbul Technical
          University
        </BioSection>
        <BioSection>
          <BioYear>Jun, 2016</BioYear>
          Worked as a Web Developer Intern at Doktorsitesi.com in Turkey,
          Istanbul (Platform for Turkish Doctors)
        </BioSection>
        <BioSection>
          <BioYear>Aug, 2017</BioYear>
          Moved to Toronto, and began my work with Refugees and Immigrants right
          away.
        </BioSection>
        <BioSection>
          <BioYear>Sep, 2019</BioYear>
          Started Software Engineering Technician Program in Centennial College.
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          In my free time
        </Heading>
        <Paragraph>Traveller, Music Maker, Zen Buddhist</Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          You can find me at
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/keremduran" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                @keremduran
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link
              href="https://www.linkedin.com/in/kerem-duran/"
              target="_blank"
            >
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoLinkedin />}
              >
                @kerem-duran
              </Button>
            </Link>
            <ListItem>
              <Link
                href="https://www.linkedin.com/in/kerem-duran/"
                target="_blank"
              >
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<EmailIcon />}
                >
                  @keremduran@live.com
                </Button>
              </Link>
            </ListItem>
          </ListItem>
        </List>

        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            href="https://inspiredigital.vercel.app/"
            title="Inspire Digital"
            thumbnail={thumbInspireDigital}
          >
            A simple landing site for our family business.
          </GridItem>
          <GridItem
            href="https://doktorwebsite-demo-next.vercel.app/"
            title="Doctor Landing & Blog"
            height={20}
            thumbnail={thumbDoctorDemo}
          >
            A demo website for doctors, comes with dato CMS.
          </GridItem>
        </SimpleGrid>

        <Box align="center" my={4}>
          <NextLink href="/posts" scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="pink">
              Popular posts
            </Button>
          </NextLink>
        </Box>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
