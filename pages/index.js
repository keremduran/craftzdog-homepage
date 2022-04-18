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
import thumbInspireDigital from '../public/images/links/inspiredigital.png'
import thumbDoctorDemo from '../public/images/links/doctordemo.png'
import Image from 'next/image'
import Skills from '../components/skills'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <Layout>
    <Container overflowX="hidden">
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        letterSpacing={1.06}
        fontWeight={800}
        textColor={useColorModeValue('purple.700', 'purple.300')}
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
      >
        Hello👋, I&apos;m a software engineer based in Toronto!
      </Box>
      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h1" fontSize={'3rem'} variant="page-title">
            Kerem Duran
          </Heading>
          <Heading as="h2" fontSize={'2rem'}>
            Web Developer
            <br />
            Software Engineer
          </Heading>
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
      <Section delay={0.3} my="3">
        <Skills />
        <Heading as="h3" variant="section-title">
          My Skills
        </Heading>
        <Paragraph>
          I specialize in developing responsive, performant, mobile friendly
          websites from scratch with latest available technology, as well as
          creating custom themes for Shopify, modifying existing themes, and
          writing custom code needed to achieve the goals of my clients.{' '}
        </Paragraph>
      </Section>

      <Box align="center" my={4}>
        <NextLink href="/works" scroll={false}>
          <Button rightIcon={<ChevronRightIcon />} colorScheme="purple">
            My portfolio
          </Button>
        </NextLink>
      </Box>
      <Section delay={0.7}>
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
          Arrived at Toronto, and began my work with Refugees and Immigrants the
          same day.
        </BioSection>
        <BioSection>
          <BioYear>Sep, 2019</BioYear>
          Started Software Engineering Technician Program in Centennial College.
        </BioSection>
      </Section>
      <Section delay={1}>
        <Heading as="h3" variant="section-title">
          My story
        </Heading>
        <Paragraph>
          Welcome to my hive! Thank you for your time and interest in getting to
          know me. Born into a family of humanitarian activists who were the
          founding members establishing Lambda Istanbul (former official LGBT
          Community of Turkey), I&apos;ve naturally gravitated towards similar
          sentiments, and helped Refugees and Immigrants to settle in Toronto
          since 2017. Recently, I made the decision to fully transition to
          Software Engineering, since my heart is in Mathematics and
          Engineering. I chose to start with web technologies, because I know
          that it could be a reliable voice for people who have a passion.
          Currently, I&apos;m working at a startup,{' '}
          <Link href="https://inspiredigital.vercel.app/" isExternal>
            InspireDigital
          </Link>
          , working primarly with Turkish clients providing Full-Stack websites
          and content!
        </Paragraph>
      </Section>
      <Section delay={1.3}>
        <Heading as="h3" variant="section-title">
          In my free time
        </Heading>
        <Paragraph>
          Traveller, Kickboxer, Music Maker, Zen Practitioner
        </Paragraph>
      </Section>
      <Section delay={1.6}>
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
          </ListItem>
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
        </List>
        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            Some recent work
          </Heading>
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
        </Section>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
