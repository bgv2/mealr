'use client';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions , Modal, Box} from '@mui/material';
import { useState } from 'react';
export default function Recipe(props) {
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      };
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={props.url || "https://placehold.co/926x618"}
          alt="food"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.food}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Close
        </Button>
        <div>
            <Button onClick={handleOpen}>Info</Button>
            <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >
            <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
                Nutrition Facts
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                {props.nutrition}
            </Typography>
            </Box>
        </Modal>
        </div>
      </CardActions>
    </Card>
  );
}