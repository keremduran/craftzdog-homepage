//import { BioItem, BioYear } from '../components/bio'
import React from 'react'
import { Box } from '@chakra-ui/react'
import styled from '@emotion/styled'

export const BioItem = styled(Box)`
  padding-left: 3.4em;
  text-indent: -3.4em;
`

export const BioYear = styled.span`
  font-weight: bold;
  margin-right: 1em;
`

const BioData = {
  bioitems: [
    {
      bioyear: 'Jun, 1994',
      content: 'Born in Istanbul, Turkey.'
    },
    {
      bioyear: 'Sep, 2013',
      content:
        'Started Mathematical Engineering Program in Istanbul Technical University'
    },
    {
      bioyear: 'Jun, 2016',
      content:
        'First Web Developer job, at Doktorsitesi.com in Turkey, Istanbul (Platform for Turkish Doctors)'
    },
    {
      bioyear: 'Aug, 2017',
      content:
        'Arrived at Toronto, and began my work as a layout developer / translator in law industry.'
    },
    {
      bioyear: 'Sep, 2019',
      content:
        'Started Software Engineering Technician Program in Centennial College.'
    },
    {
      bioyear: 'Dec, 2021',
      content: 'Started as a Web Developer at Inspire Digital.'
    }
  ]
}

const BioSection = () => {
  return (
    <div>
      {BioData.bioitems.map((bioitem, index) => {
        return (
          <BioItem key={index + bioitem.bioyear}>
            <BioYear>{bioitem.bioyear}</BioYear>
            {bioitem.content}
          </BioItem>
        )
      })}
    </div>
  )
}
export default BioSection
