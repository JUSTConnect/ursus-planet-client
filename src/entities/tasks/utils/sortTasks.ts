import { sortBy } from "lodash";

import { ITasksProject, ITasksPlatform } from "@/entities/tasks/model";

export default function sortTasks<ITask>(objects: ITasksProject[]|ITasksPlatform[]) {
    return sortBy(objects, [(o) => !!o.log?.got, (o) => !o.log]) as ITask[]
}