import { Box, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, ListSubheader, styled, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";


function generate(element: React.ReactElement) {
    return [0, 1, 2].map((value) =>
      React.cloneElement(element, {
        key: value,
      }),
    );
  }
const BoxStyled = styled(Box)({
    minHeight: 700,
    display: 'flex',
    flexDirection: 'column'
});
const Demo = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
  }));
const MainSkill = styled('div')(({ theme}) =>({
    minWidth: 150,
    display: 'flex',
    flexDirection: 'row',
    height: 40
}))
const Skill = () =>{
    const [dense, setDense] = React.useState(false);
    const [secondary, setSecondary] = React.useState(false);
    return(
        <>
        <BoxStyled flex={0.8} p={1} width={'80%'}>
                <Box  bgcolor={'background.default'}>
                    <Image src={"/icon/kuda.svg"} width={24} height={26}></Image>
                    <Typography variant="h4" fontFamily={'Roboto'} color={'#F2F609'}>My Skills</Typography>
                </Box>
                <Box display ='flex' flex={0.6} sx={{marginTop: 10, flexDirection: {xs: 'column', md:'row'}, justifyContent: {xs: 'center', md: 'center'}}}>

               
                <Grid container spacing={2} sx={{display: 'flex', justifyContent: {xs: "center", md: "center"}}}>
                    <Grid item xs={12} md={6}>
                    <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                    <Image src={"/image/js-logo.png"} height={40} width={40}></Image>
                       <Typography  variant="h6" sx={{marginLeft: 2}}>
                        Javascript
                       </Typography> 
                    </Box>
                    
                    <Demo>
                        <List dense={dense}>
                        
                            <ListItem>
                                <ListItemText
                                    primary="Javascript ES6"
                                    secondary={secondary ? 'Secondary text' : null}
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemText
                                    primary="DOM Javascript"
                                    secondary={secondary ? 'Secondary text' : null}
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemText
                                    primary="Async Function"
                                    secondary={secondary ? 'Secondary text' : null}
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemText
                                    primary="Fetch API"
                                    secondary={secondary ? 'Secondary text' : null}
                                />
                            </ListItem>
                       
                        </List>
                    </Demo>
                    </Grid>
              
                    <Grid item xs={12} md={6}>
                    <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                    <Image src={"/icon/reactjs.svg"} height={40} width={40}></Image>
                       <Typography  variant="h6" sx={{marginLeft: 2}}>
                        ReactJS
                       </Typography> 
                    </Box>
                    
                    <Demo>
                        <List dense={dense}>
                        
                            <ListItem>
                                <ListItemText
                                    primary="Styled Component"
                                    secondary={secondary ? 'Secondary text' : null}
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemText
                                    primary="React Routing"
                                    secondary={secondary ? 'Secondary text' : null}
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemText
                                    primary="Context API"
                                    secondary={secondary ? 'Secondary text' : null}
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemText
                                    primary="Consume API"
                                    secondary={secondary ? 'Secondary text' : null}
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemText
                                    primary="Redux"
                                    secondary={secondary ? 'Secondary text' : null}
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemText
                                    primary="Material UI"
                                    secondary={secondary ? 'Secondary text' : null}
                                />
                            </ListItem>
                       
                        </List>
                    </Demo>
                    </Grid>
                
                    <Grid item xs={12} md={6}>
                    <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                    <Image src={"/icon/next.svg"} height={40} width={40}></Image>
                       <Typography  variant="h6" sx={{marginLeft: 2}}>
                        NextJS
                       </Typography> 
                    </Box>
                    
                    <Demo>
                        <List dense={dense}>
                        
                            <ListItem>
                                <ListItemText
                                    primary="Client Side"
                                    secondary={secondary ? 'Secondary text' : null}
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemText
                                    primary="Consume API"
                                    secondary={secondary ? 'Secondary text' : null}
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemText
                                    primary="React Ecosystem"
                                    secondary={secondary ? 'Secondary text' : null}
                                />
                            </ListItem>
                       
                        </List>
                    </Demo>
                    </Grid>
                
                    <Grid item xs={12} md={6}>
                    <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                    <Image src={"/image/node.png"} height={40} width={40}></Image>
                       <Typography  variant="h6" sx={{marginLeft: 2}}>
                        NodeJs
                       </Typography> 
                    </Box>
                    
                    <Demo>
                        <List dense={dense}>
                        
                            <ListItem>
                                <ListItemText
                                    primary="CRUD with Mysql"
                                    secondary={secondary ? 'Secondary text' : null}
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemText
                                    primary="CRUD with MonggoDB"
                                    secondary={secondary ? 'Secondary text' : null}
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemText
                                    primary="Making API"
                                    secondary={secondary ? 'Secondary text' : null}
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemText
                                    primary="MVC Concept"
                                    secondary={secondary ? 'Secondary text' : null}
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemText
                                    primary="Framework ExpressJS"
                                    secondary={secondary ? 'Secondary text' : null}
                                />
                            </ListItem>
                       
                        </List>
                    </Demo>
                    </Grid>
                </Grid>
                </Box>
        </BoxStyled>
        </>
    )
}

export default Skill;