import {Repository} from "./github/types";

const hostUrl: string = "https://api.github.com"

export const getUserRepositories = async (username: string): Promise<Repository[]> => {
    const response = await fetch(`${hostUrl}/users/${username}/repos`)

    if (response.status !== 200) throw new Error((await response.json() as Error).message)

    return await response.json() as Repository[]
}