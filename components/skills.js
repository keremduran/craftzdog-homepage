import { motion } from 'framer-motion'
import {
  chakra,
  shouldForwardProp,
  Flex,
  Heading,
  useColorModeValue
} from '@chakra-ui/react'

const SkillsList = [
  { title: 'HTML5/CSS3', url: '' },
  { title: 'Javascript', url: '' },
  { title: 'React', url: '' },
  { title: 'Shopify', url: '' },
  { title: 'and more!', url: '' }
]

const StyledDiv = chakra(motion.div, {
  shouldForwardProp: prop => {
    return shouldForwardProp(prop) || prop === 'transition'
  }
})

const Skills = () => {
  const textColor = useColorModeValue('teal.500', 'teal.200')
  return (
    <Flex
      fontWeight={700}
      my={6}
      h={10}
      fontSize={'1.2rem'}
      textColor={textColor}
    >
      {SkillsList.map((skill, index) => (
        <StyledDiv
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: [0, 10, 0], opacity: [1, 0, 1], scale: [1.1, 1, 1.1] }}
          transition={{
            repeat: Infinity,
            repeatDelay: 12,
            duration: 1.2,
            delay: index
          }}
          key={`skill-${index}`}
          mr={4}
        >
          <Heading as="h3" fontWeight={800} fontSize={'1rem'}>
            {skill.title}
          </Heading>
        </StyledDiv>
      ))}
    </Flex>
  )
}

export default Skills
