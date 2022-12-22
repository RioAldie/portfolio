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
    marginTop: '310px'
})
const BoxHero = styled('div')({
    display: 'flex',
    zIndex: 100000,
  
})
export default function Hero(){
    return(
        <BoxStyled  flex={1} p={0} justifyContent={'center'} alignItems={'center'} flexDirection={'column'}>
        <Box  width={'70%'} height={'70%'}  >
            <BoxHero>
                <Image src={"/image/rio-fix.png"} width={'450px'} height={600} alt=""></Image>
            </BoxHero>
          
        </Box>
        </BoxStyled>
    )
}