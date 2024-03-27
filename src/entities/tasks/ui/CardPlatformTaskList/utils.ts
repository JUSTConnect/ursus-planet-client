import { sortBy } from "lodash";

import { ITasksPlatform } from "@/entities/tasks/model";


export default function sortTasks(objects: ITasksPlatform[])
{
    return sortBy(objects, [(o) => !!o.log?.got, (o) => !o.log])
}