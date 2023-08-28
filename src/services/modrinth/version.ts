import {useQuery} from "@tanstack/react-query";
import {Version} from "./types";
import {getProjectVersion} from "../modrinthApi";

export const useProjectVersion = (slug: string) => useQuery<Version[], Error>({
    queryKey: [`projectVersion_${slug}`],
    queryFn: () => getProjectVersion(slug).then(data => data),
})