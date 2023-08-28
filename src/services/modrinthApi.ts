import {Project, Version} from "./modrinth/types";

const hostUrl: string = "https://api.modrinth.com/v2"

export const getUserProjects = async (username: string): Promise<Project[]> => {
    const response = await fetch(`${hostUrl}/user/${username}/projects`)

    if (response.status !== 200) throw new Error((await response.json() as Error).message)

    return await response.json() as Project[]
}

export const getProjectVersion = async (slug: string): Promise<Version[]> => {
    const response = await fetch(`${hostUrl}/project/${slug}/version`)

    if (response.status !== 200) throw new Error((await response.json() as Error).message)

    return await response.json() as Version[]
}