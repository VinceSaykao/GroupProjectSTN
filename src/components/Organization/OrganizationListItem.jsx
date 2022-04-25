import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import * as React from 'react';

// Material UI Imports
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

function OrganizationListItem({ org }) {
  const history = useHistory();

  const handleSelectedOrganization = (org) => {
    history.push(`/organization-view/${org.id}`);
  };

  const name = org.name;
  const image = org.image;

  return (
    <Card
      className="org-card"
      style={{ backgroundColor: 'white' }}
      sx={{ width: 300 }}
    >
      <CardMedia
      sx={{                
        maxHeight: { xs: 111, md: 167 },
        minHeight: { xs: 111, md: 167 },
        maxWidth: { xs: 300, md: 200 },
        maxWidth: { xs: 300, md: 200 },
        }}
        component="img"
        image={image}
        alt={(name, 'img')}
      ></CardMedia>
      <CardContent sx={{ maxHeight: 60, borderTop: 1,  borderColor: "black" }}>
        <Typography
          sx={{textAlign: "center"}}
          gutterBottom
          variant="h6"
          component="div"
          onClick={() => handleSelectedOrganization(org)}
        >
          {name}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default OrganizationListItem;