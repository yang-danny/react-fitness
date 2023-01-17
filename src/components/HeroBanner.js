import React from 'react'
import {Box,Typography,Button} from '@mui/material'
import SimpleImageSlider from "react-simple-image-slider";
function HeroBanner() {
  const images = [
    { url: 'https://www.ezfacility.com/wp-content/uploads/2016/03/field_image_iStock_000065160915_Small_0-1.jpg' },
    { url: 'https://acewebcontent.azureedge.net/blogs/blog-fitlife-030915.jpg' },
    { url: 'https://cairowestmag.com/wp-content/uploads/2018/12/5b43ccf31335b831008b4c1c-750-563.jpg' },
    { url: 'https://www.dir.cat/blog/wp-content/uploads/2019/05/physical-activities-will-get-you-in-shape-for-the-summer.jpg' },
    { url: 'https://www.ahealthiermichigan.org/wp-content/uploads/2018/11/Gym-memberships.jpg' },
  ];
  return (
    <Box sx={{
      mt:{lg:'100px', xs:'70px'},
      ml:{sm:'50px'}
    }} 
    position='relative' p='20px'>
      <Typography color='#FF2625' fontWeight='600' fontSize='26px'>
Fitness GYM
      </Typography>
      <Typography fontWeight={700}
      sx={{fontSize: {lg:'44px', xs:'40px'}}}
      mb='23px' mt='30px' >
        Sweet, Smile<br/> and Repeat 
      </Typography>
      <Typography fontSize='22px' lineHeight='35px' mb={4}>
        Check out the most effective exercises
      </Typography>
      <Button variant='contained' color='error' href='#exercises'
      sx={{backgroundColor:'#ff2625', padding:'10px' }}
      >Explore Exercises</Button>
      <Typography  color='#FF2625' fontWeight={600} 
      sx={{opacity:0.1,
      display:{lg:'block',xs:'none'}}}
      fontSize='200px'>
        Exercises
      </Typography>

     <Box sx={{
          position: 'absolute',
          top:'-150px',
          left:'650px',
          display:{lg:'block',xs:'none'},
          boxShadow: 10,
        }}>
      <SimpleImageSlider 
        width={1000}
        height={600}
        images={images}
        showBullets={true}
        showNavs={true}
        autoPlay={true}
      />
      </Box>
      </Box>
  )
}

export default HeroBanner
