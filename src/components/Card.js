import * as React from 'react'
import { cardContainer } from './card.module.css'
import { Link } from 'gatsby'
// import { StaticImage, getImage } from 'gatsby-plugin-image'
import { Box, Heading, Text, Button } from '@chakra-ui/react'

export const Card = ({title, date}) => {
     // const staticImage = getImage(image);
   return (
       <Box className={cardContainer}>
           <Text>
                {date}
           </Text>
           <Heading>
                {title}
           </Heading>
           {/* <StaticImage src={image} alt="product image" /> */}
            <Button>
                 <Link >Learn More...</Link>
            </Button>
       </Box>
   ) 
}


export default Card