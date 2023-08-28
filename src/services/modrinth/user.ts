import {useQuery} from "@tanstack/react-query";
import {Project} from "./types";
import {getUserProjects} from "../modrinthApi";

export const useUserProjects = (username: string) => useQuery<Project[], Error>({
    queryKey: ['userProjects'],
    queryFn: () => getUserProjects(username).then(data => data)
})