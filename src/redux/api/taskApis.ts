import { Task } from "@/lib/types";
import { baseApi } from "./baseApi";

const taskApis = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getTasks: builder.query<{ message: string; data: Task[] }, undefined>({
      query: () => "/tasks",
      providesTags: (result) =>
        result
          ? [
              ...result.data.map(({ _id }) => ({
                type: "Tasks" as const,
                id: _id,
              })),
              { type: "Tasks", id: "LIST" },
            ]
          : [{ type: "Tasks", id: "LIST" }],
    }),

    getTaskById: builder.query<{ message: string; data: Task }, string>({
      query: (taskId) => `/tasks/${taskId}`,
    }),

    createTask: builder.mutation<Task, Partial<Task>>({
      query: (taskInfo) => ({
        url: "/tasks",
        method: "POST",
        body: taskInfo,
      }),
      invalidatesTags: [{ type: "Tasks", id: "LIST" }],
    }),

    updateTask: builder.mutation<
      { message: string; data: Task },
      Partial<Task>
    >({
      query: (taskUpdates) => ({
        url: `/tasks/${taskUpdates._id}`,
        method: "PUT",
        body: taskUpdates,
      }),
    }),

    deleteTask: builder.mutation<{ message: string }, string>({
      query: (taskId) => ({
        url: `/tasks/${taskId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Tasks"],
    }),
  }),
});

export const {
  useGetTasksQuery,
  useGetTaskByIdQuery,
  useCreateTaskMutation,
  useUpdateTaskMutation,
  useDeleteTaskMutation,
} = taskApis;
