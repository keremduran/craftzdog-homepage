import { Box } from '@chakra-ui/react'
import { Link } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box align="center" opacity={0.4} fontSize="sm">
      &copy; {new Date().getFullYear()} Kerem Duran - . All Rights Reserved.
      Credits to Takuya Matsuyama for the amazing{' '}
      <Link href="https://github.com/craftzdog/craftzdog-homepage" isExternal>
        template
      </Link>{' '}
      and{' '}
      <Link href="https://www.youtube.com/watch?v=bSMZgXzC9AA" isExternal>
        tutorial.
      </Link>
    </Box>
  )
}

export default Footer
