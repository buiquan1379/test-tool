import {Box, Card, CardActionArea, Chip, Divider, Stack, Typography} from "@mui/material";
import React from "react";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Grid from "@mui/material/Unstable_Grid2";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import {useNavigate} from "react-router-dom";
const Feed = () => {
    const navigate = useNavigate();

    const handleProjectClick = () => {
        navigate("/tests");
    }

    return (
        <Container sx={{}}>
            <Stack>
                <Box sx={{display: "flex"}} py={3}>
                    <Typography variant="h4" flexGrow={1} sx={{fontWeight: "bold"}}>
                        Projects
                    </Typography>
                    <Button variant="contained" startIcon={<AddCircleIcon/>} sx={{textTransform: "none"}}>
                        Add new project
                    </Button>
                </Box>
                <Grid container rowSpacing={2} columnSpacing={2} sx={{}}>
                    <Grid xs={3}>
                        <Card variant="outlined" sx={{}} onClick={handleProjectClick}>
                            <CardActionArea>
                                <Box sx={{p: 2}}>
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
                                <Divider light/>
                                <Box sx={{p: 2}}>
                                    <Typography gutterBottom variant="body2">
                                        Type
                                    </Typography>
                                    <Stack direction="row" spacing={1}>
                                        <Chip color="primary" label="BDD" size="small"/>
                                        <Chip label="Cucumber" size="small"/>
                                        <Chip label="Mixed" size="small"/>
                                    </Stack>
                                </Box>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid xs={3}>
                        <Card variant="outlined" sx={{}} onClick={handleProjectClick}>
                            <CardActionArea>
                                <Box sx={{p: 2}}>
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
                                <Divider light/>
                                <Box sx={{p: 2}}>
                                    <Typography gutterBottom variant="body2">
                                        Type
                                    </Typography>
                                    <Stack direction="row" spacing={1}>
                                        <Chip color="primary" label="Classical" size="small"/>
                                        <Chip label="Manual" size="small"/>
                                        <Chip label="Mixed" size="small"/>
                                    </Stack>
                                </Box>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid xs={3}>
                        <Card variant="outlined" sx={{}} onClick={handleProjectClick}>
                            <CardActionArea>
                                <Box sx={{p: 2}}>
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
                                <Divider light/>
                                <Box sx={{p: 2}}>
                                    <Typography gutterBottom variant="body2">
                                        Type
                                    </Typography>
                                    <Stack direction="row" spacing={1}>
                                        <Chip color="primary" label="Classical" size="small"/>
                                        <Chip label="Manual" size="small"/>
                                        <Chip label="Mixed" size="small"/>
                                    </Stack>
                                </Box>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid xs={3}>
                        <Card variant="outlined" sx={{}} onClick={handleProjectClick}>
                            <CardActionArea>
                                <Box sx={{p: 2}}>
                                    <Stack direction="row" justifyContent="space-between" alignItems="center">
                                        <Typography gutterBottom variant="h5" component="div">
                                            Project 4
                                        </Typography>
                                        <Typography gutterBottom variant="h6" component="div">
                                            22 Tests
                                        </Typography>
                                    </Stack>
                                    <Typography color="text.secondary" variant="body2">
                                        Detailed Description
                                    </Typography>
                                </Box>
                                <Divider light/>
                                <Box sx={{p: 2}}>
                                    <Typography gutterBottom variant="body2">
                                        Type
                                    </Typography>
                                    <Stack direction="row" spacing={1}>
                                        <Chip color="primary" label="Classical" size="small"/>
                                        <Chip label="Manual" size="small"/>
                                        <Chip label="Mixed" size="small"/>
                                    </Stack>
                                </Box>
                            </CardActionArea>
                        </Card>
                    </Grid>

                </Grid>
                
            </Stack>
        </Container>
    )
};

export default Feed;
