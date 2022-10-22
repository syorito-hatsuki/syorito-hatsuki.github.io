import {useEffect, useState} from "react";
import axios from "axios";
import Grid from "@mui/material/Unstable_Grid2";
import {Card, CardActionArea, CardContent, Typography} from "@mui/material";
import {ModVersion} from "./components/ModVersion";
import {textLimit} from "../../css/textStyles";

export default function ModrinthPage() {

    const [projects, setProjects] = useState([])

    useEffect(() => {
        axios({
            method: 'get',
            url: `https://api.modrinth.com/v2/user/syorito-hatsuki/projects`
        }).then(response => setProjects(response.data))
    }, [])

    return (
        <Grid container spacing={2} justifyContent="center" alignItems="end">
            {projects.map((data, index) => (
                <Grid xs={8} sm={6} md={4} xl={2} key={index}>
                    <Card>
                        <CardActionArea href={`https://modrinth.com/mod/${data['slug']}`}>
                            <CardContent>
                                <ModVersion slug={data['slug']}/>
                                <Typography gutterBottom paddingRight={2} variant="h5"
                                            style={textLimit}>{data["title"]}</Typography>
                                <Typography variant="body2" color="text.secondary"
                                            style={textLimit}>{data["description"]}</Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
            ))}
        </Grid>
    )
}