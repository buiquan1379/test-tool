import {Box, Card, Chip, Divider, Stack, Typography } from "@mui/material";
import React from "react";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

const Feed = () => {
    return(
        <Box flex={4} p={4} spacing={3} >  

        <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={3} width="75%">
        <Typography gutterBottom variant="h4" component="div">
            Projects
        </Typography>

        <Chip icon={<AddCircleIcon />} label="Add New Projects" size="large" color="primary" component="a" clickable/>

        </Stack>
        
         <Grid2 container rowSpacing={1} columnSpacing={3} p={3}>

         <Grid2>
         <Card variant="outlined" sx={{ width: "50%", maxWidth:"400px" }}>
      <Box sx={{ p: 2 }}>
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Typography gutterBottom variant="h5" component="div">
            Project 1
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            15 Tests
          </Typography>
        </Stack>
        <Typography color="text.secondary" variant="body2">
          Detailed Description
        </Typography>
      </Box>
      <Divider light />
      <Box sx={{ p: 2 }}>
        <Typography gutterBottom variant="body2">
          Type
        </Typography>
        <Stack direction="row" spacing={1}>
          <Chip color="primary" label="BDD" size="small" />
          <Chip label="Cucumber" size="small" />
          <Chip label="Mixed" size="small" />
        </Stack>
      </Box>
    </Card>
    </Grid2>

         <Grid2>
         <Card variant="outlined" sx={{ width: "50%", maxWidth:"400px" }}>
      <Box sx={{ p: 2 }}>
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Typography gutterBottom variant="h5" component="div">
            Project 2
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            25 Tests
          </Typography>
        </Stack>
        <Typography color="text.secondary" variant="body2">
          Detailed Description
        </Typography>
      </Box>
      <Divider light />
      <Box sx={{ p: 2 }}>
        <Typography gutterBottom variant="body2">
          Type
        </Typography>
        <Stack direction="row" spacing={1}>
          <Chip color="primary" label="Classical" size="small" />
          <Chip label="Manual" size="small" />
          <Chip label="Mixed" size="small" />
        </Stack>
      </Box>
    </Card>
    </Grid2>

         <Grid2>
         <Card variant="outlined" sx={{ width: "50%", maxWidth:"400px" }}>
      <Box sx={{ p: 2 }}>
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Typography gutterBottom variant="h5" component="div">
            Project 3
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            20 Tests
          </Typography>
        </Stack>
        <Typography color="text.secondary" variant="body2">
          Detailed Description
        </Typography>
      </Box>
      <Divider light />
      <Box sx={{ p: 2 }}>
        <Typography gutterBottom variant="body2">
          Type
        </Typography>
        <Stack direction="row" spacing={1}>
          <Chip color="primary" label="Classical" size="small" />
          <Chip label="Manual" size="small" />
          <Chip label="Mixed" size="small" />
        </Stack>
      </Box>
    </Card>
         </Grid2>
         
         </Grid2>

        </Box>
    )
}

export default Feed;