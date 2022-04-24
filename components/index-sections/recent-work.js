import React from 'react'
import { SimpleGrid } from '@chakra-ui/react'
import { GridItem } from '../../components/grid-item'
import thumbInspireDigital from '../../public/images/links/inspiredigital.png'
import thumbDoctorDemo from '../../public/images/links/doctordemo.png'

function RecentWorkSection() {
  return (
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
  )
}

export default RecentWorkSection
