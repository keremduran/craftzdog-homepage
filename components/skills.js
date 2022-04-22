import { LazyMotion, domAnimation, m } from 'framer-motion'
import {
  chakra,
  shouldForwardProp,
  Wrap,
  useColorModeValue
} from '@chakra-ui/react'

const SkillsList = [
  { title: 'HTML/CSS', url: '' },
  { title: 'Javascript', url: '' },
  { title: 'React', url: '' },
  { title: 'Shopify', url: '' },
  { title: 'and more!', url: '' }
]

const StyledList = chakra(m.li, {
  shouldForwardProp: prop => {
    return shouldForwardProp(prop) || prop === 'transition'
  }
})

const Skills = () => {
  const textColor = useColorModeValue('teal.500', 'teal.200')
  return (
    <Wrap
      my={3}
      h={10}
      fontWeight={600}
      fontSize={['0.9rem', '1rem', '1.2rem']}
      textColor={textColor}
      spacingx={['0.9rem', '1.2rem', '1.5rem']}
    >
      <LazyMotion features={domAnimation}>
        {SkillsList.map((skill, index) => (
          <StyledList
            initial={{ y: 10, opacity: 1 }}
            animate={{
              y: [0, 10, 0],
              opacity: [1, 0, 1]
            }}
            transition={{
              repeat: Infinity,
              repeatDelay: 12,
              duration: 1.2,
              delay: index * 0.2
            }}
            my={3}
            key={`skill-${index}`}
          >
            {skill.title}
          </StyledList>
        ))}
      </LazyMotion>
    </Wrap>
  )
}

export default Skills
