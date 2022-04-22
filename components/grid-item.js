import NextLink from 'next/link'
import Image from 'next/image'
import { Box, Text, LinkBox, LinkOverlay, Flex, Link } from '@chakra-ui/react'
import { Global } from '@emotion/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { IoLogoGithub } from 'react-icons/io5'

export const GridItem = ({ children, href, title, thumbnail }) => (
  <Box w="100%" textAlign="center">
    <LinkBox cursor="pointer">
      <Image
        src={thumbnail}
        alt={title}
        className="grid-item-thumbnail"
        placeholder="blur"
        loading="lazy"
      />
      <LinkOverlay href={href} target="_blank">
        <Text mt={2}>{title}</Text>
      </LinkOverlay>
    </LinkBox>
    <Text fontSize={14}>{children}</Text>
  </Box>
)

export const WorkGridItem = ({
  children,
  id,
  title,
  thumbnail,
  externalLink,
  githubUrl,
  url
}) => (
  <Box
    w="100%"
    h="100%"
    textAlign="center"
    display="flex"
    flexDirection="column"
    justifyContent={'space-between'}
  >
    <NextLink
      href={externalLink || `/works/${id}`}
      scroll={false}
      style={`height: 100%`}
    >
      <LinkBox cursor="pointer">
        <Image
          src={thumbnail}
          alt={title}
          className="grid-item-thumbnail"
          placeholder="blur"
        />
        <LinkOverlay href={externalLink || `/works/${id}`}>
          <Text mt={2} fontSize={22}>
            {title}
          </Text>
        </LinkOverlay>
        <Text fontSize={18}>{children}</Text>
      </LinkBox>
    </NextLink>
    <WorkLinks url={url} githubUrl={githubUrl} />
  </Box>
)

export const GridItemStyle = () => (
  <Global
    styles={`
      .grid-item-thumbnail {
        border-radius: 12px;
      }
    `}
  />
)

const WorkLinks = ({ url, githubUrl }) => (
  <Flex justifyContent={'space-evenly'} alignItems={'center'} my="2">
    <Link
      isExternal
      display="flex"
      justifyContent={'center'}
      alignItems={'center'}
      href={githubUrl}
    >
      <IoLogoGithub />
      &nbsp;Repo&nbsp;
      <ExternalLinkIcon />
    </Link>
    <Link
      isExternal
      display="flex"
      justifyContent={'center'}
      alignItems={'center'}
      href={url}
    >
      App&nbsp;
      <ExternalLinkIcon />
    </Link>
  </Flex>
)
