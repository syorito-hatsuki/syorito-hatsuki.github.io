import {useEffect, useState} from "react";
import axios from 'axios';
import Grid from "@mui/material/Unstable_Grid2";
import {Card, CardActionArea, CardContent, Stack, Typography} from "@mui/material";
import {textLimit} from "../../css/textStyles";
import {GithubDescription} from "./components/GithubDescription";
import {CounterWithIcon} from "../../components/CounterWithIcon";
import {ErrorOutline, StarOutline} from "@mui/icons-material";
import Fork from "../../components/icons/Fork";

export default function GitHubPage() {
    const [repos, setRepos] = useState([])

    useEffect(() => {
        axios({method: 'get', url: `https://api.github.com/users/syorito-hatsuki/repos`})
            .then(response => setRepos(response.data));
    }, [])

    return (
        <Grid container spacing={2} justifyContent="center">
            {repos.map((data, index) => (
                <Grid xs={8} sm={6} md={4} xl={2} key={index}>
                    <Card>
                        <CardActionArea href={data["html_url"]}>
                            <CardContent>
                                <Typography style={{float: 'right'}} variant={"body2"}>{data["language"]}</Typography>
                                <Typography gutterBottom paddingRight={2} variant="h5"
                                            style={textLimit}>{data["name"]}</Typography>
                                <GithubDescription content={data["description"]}/>
                            </CardContent>
                            <CardContent>
                                <Stack direction="row"
                                       justifyContent="flex-start"
                                       alignItems="center">
                                    <CounterWithIcon count={data['open_issues_count']} icon={<ErrorOutline/>}/>
                                    <CounterWithIcon count={data['stargazers_count']} icon={<StarOutline/>}/>
                                    <CounterWithIcon count={data['forks']} icon={<Fork/>}/>
                                </Stack>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
            ))}
        </Grid>
    )
}