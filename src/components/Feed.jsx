import {Box, Card, Chip, Divider, Stack, Typography } from "@mui/material";
import React from "react";

const Feed = () => {
    return(
        <Box flex={4} p={2} >  
        <Typography gutterBottom variant="h4" component="div">
            Projects
          </Typography>
        <Stack direction="row" justifyContent="space-evenly" alignItems="center" spacing={3}> 
        <Card variant="outlined" sx={{ width:"45%" }}>
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

    <Card variant="outlined" sx={{ width:"45%" }}>
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
        </Stack>
        </Box>
    )
}

export default Feed;