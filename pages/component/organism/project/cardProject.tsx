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
export default function CardProject() {
  return (
    <Card sx={{ maxWidth: 405, marginTop: 10, }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="240"
          image="/image/project-1.png"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Sneaker Ecommerce
          </Typography>
          <Typography variant="body2" color="text.secondary">
           This web was built by using React, Typescript, CSS 3, NodeJs and MongoDB
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <MyButton size="small">
            <BookIcon/>
            <Typography variant='body1'>View Study Case</Typography>
        </MyButton>
        <MyButton size="small">
            <LinkIcon/>
            <Typography variant='body1'>Visit Website</Typography>
        </MyButton>
      </CardActions>
    </Card>
  );
}
