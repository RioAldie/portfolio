import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardActionArea, styled } from '@mui/material';
import BookIcon from '@mui/icons-material/Book';
import LinkIcon from '@mui/icons-material/Link';

const MyButton = styled(Button)({
    textTransform: 'none',
    color: 'white'
})
interface ProjectItemProps{
    image: string
}
export default function ProjectItem(props:ProjectItemProps) {

    const {image} = props;
  return (
    <Card sx={{ maxWidth: '100%', marginTop: 10,border: 'none' }}>
      <CardActionArea sx={{border:'none'}}>
        <CardMedia
          component="img"
          height="500"
          image={`/image/${image}`}
          sx={{display: 'flex', alignItems:'center',border:'none'}}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            GetMovie
          </Typography>
          <Typography variant="body2" color="text.secondary">
           This web was built by using React, Typescript, CSS 3, NodeJs and MongoDB
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <MyButton size="small">
            <BookIcon/>
            <Typography variant='body1' fontSize={14}>View Study Case</Typography>
        </MyButton>
        <MyButton size="small">
            <LinkIcon/>
            <Typography variant='body1' fontSize={14}>Visit Website</Typography>
        </MyButton>
      </CardActions>
    </Card>
  );
}
