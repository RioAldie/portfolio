import { Box, styled } from "@mui/material";
import Image from "next/image";

const BoxStyled = styled(Box)({
    minHeight: 500,
    display: 'flex'
});
const BoxBg = styled(Box)({
    position: 'absolute',
    display: 'flex',
    zIndex: 1000,
    marginLeft: '30px',
    marginTop: '280px'
})
const BoxHero = styled('div')({
    display: 'flex',
    zIndex: 100000,
  
})
export default function Hero(){
    return(
        <BoxStyled  flex={1} p={0} justifyContent={'center'} alignItems={'center'} flexDirection={'column'}>
        <Box  width={'70%'} height={'70%'} bgcolor={'#202021'} >
            <BoxHero>
                <Image src={"/image/rio-color2.png"} width={'400px'} height={500}  ></Image>
                <BoxBg sx={{display:{ xs: 'none', md: 'block'}}}>
                    <Image src={"/icon/front-hero.svg"} width={'300'} height={150} ></Image>
                </BoxBg>
            </BoxHero>
          
        </Box>
        </BoxStyled>
    )
}