import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Button } from 'antd';
import Typography from '@mui/material/Typography';
import { CardHeader, IconButton } from '@mui/material';
import {useNavigate}  from "react-router-dom"

export default function MediaCard({image, title,details,actionName,actionLink}) {
    const navigate = useNavigate();
    const handleButtonClick = () => {
        navigate(actionLink);
    };
  return (
      <Card sx={{ maxWidth: 350 }}>
          <CardHeader sx={{ color: "#000" }} title={title} />
          <CardMedia sx={{ height: 140 }} image={image} title="green iguana" />
          <CardContent>
              <Typography variant="body2" color="#333">
                  {details}
              </Typography>
          </CardContent>
              <IconButton>
                  <Button size ={"large"}  style={{backgroundColor:"#006635" ,color:"#fff"}} onClick={handleButtonClick}>
                      {actionName}
                  </Button>
              </IconButton>
      </Card>
  );
}