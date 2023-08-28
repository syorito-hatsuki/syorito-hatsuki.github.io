import {Repository} from "./types";
import {useQuery} from "@tanstack/react-query";
import {getUserRepositories} from "../githubApi";

export const useRepositories = (username: string) => useQuery<Repository[], Error>({
    queryKey: ['userRepositories'],
    queryFn: () => getUserRepositories(username).then(data => data)
})