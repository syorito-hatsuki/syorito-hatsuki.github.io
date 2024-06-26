import Grid from "@mui/material/Unstable_Grid2";
import {Card, CardActionArea, CardContent, CircularProgress, Stack, Typography} from "@mui/material";
import {GithubDescription} from "./components/GithubDescription";
import {CounterWithIcon} from "../../components/CounterWithIcon";
import {ErrorOutline, StarOutline} from "@mui/icons-material";
import Fork from "../../components/icons/Fork";
import {useRepositories} from "../../services/github/repository";
import {CenteredContainer} from "../../components/CenteredContainer";

export default function GitHubPage() {

    const {data, status, error} = useRepositories("syorito-hatsuki")

    if (status === "error") return (
        <CenteredContainer>
            <Typography>{error?.message}</Typography>
        </CenteredContainer>
    )

    if (status === "pending") return (
        <CenteredContainer>
            <CircularProgress/>
        </CenteredContainer>
    )

    return (
        <Grid container spacing={2} justifyContent="center">
            {data.map((data, index) => (
                <Grid xs={8} sm={6} md={4} xl={2} key={index}>
                    <Card>
                        <CardActionArea href={data.html_url}>
                            <CardContent>
                                <Typography style={{float: 'right'}} variant={"body2"}>{data.language}</Typography>
                                <Typography gutterBottom paddingRight={2} variant="h5" textOverflow='ellipsis'
                                            overflow='hidden' whiteSpace='nowrap'>{data.name}</Typography>
                                <GithubDescription content={data.description}/>
                            </CardContent>
                            <CardContent>
                                <Stack direction="row"
                                       justifyContent="flex-start"
                                       alignItems="center">
                                    <CounterWithIcon count={data.open_issues_count} icon={<ErrorOutline/>}/>
                                    <CounterWithIcon count={data.stargazers_count} icon={<StarOutline/>}/>
                                    <CounterWithIcon count={data.forks} icon={<Fork/>}/>
                                </Stack>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
            ))}
        </Grid>
    )
}