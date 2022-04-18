import Head from 'next/head'
import dynamic from 'next/dynamic'
import NavBar from '../navbar'
import { Box, Container, useColorModeValue } from '@chakra-ui/react'
import Footer from '../footer'
import VoxelBeeLoader from '../voxel-bee-loader'
import Section from '../../components/section'

const LazyVoxelBee = dynamic(() => import('../voxel-bee'), {
  ssr: false,
  loading: () => <VoxelBeeLoader />
})

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Kerem's homepage" />
        <meta name="author" content="Kerem Duran" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link
          rel="shortcut icon"
          href="/static/favicon.ico"
          type="image/x-icon"
        />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@craftzdog" />
        <meta name="twitter:creator" content="@craftzdog" />
        <meta name="twitter:image" content="/card.png" />
        <meta property="og:site_name" content="Kerem Duran's Homepage" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/card.png" />
        <title>Kerem Duran - Homepage</title>
      </Head>

      <NavBar path={router.asPath} />

      <Container
        maxW="container.lg"
        pt={14}
        bgPosition="center"
        bgImage={`/images/hive${useColorModeValue('', '-dark')}.svg`}
      >
        <Section delay={1}>
          <LazyVoxelBee />
        </Section>
        {children}

        <Footer />
      </Container>
    </Box>
  )
}

export default Main
