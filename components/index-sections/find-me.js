import React from 'react'
import { List, ListItem, Button, Link } from '@chakra-ui/react'
import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5'
import { EmailIcon } from '@chakra-ui/icons'
function FindMeSection() {
  return (
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
        <Link href="https://www.linkedin.com/in/kerem-duran/" target="_blank">
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
        <Link href="https://www.linkedin.com/in/kerem-duran/" target="_blank">
          <Button variant="ghost" colorScheme="teal" leftIcon={<EmailIcon />}>
            @keremduran@live.com
          </Button>
        </Link>
      </ListItem>
    </List>
  )
}

export default FindMeSection
