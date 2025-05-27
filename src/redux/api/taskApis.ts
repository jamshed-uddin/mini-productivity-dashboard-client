import { baseApi } from "./baseApi";

const taskApis = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getTasks: builder.query({
      query: () => "/tasks",
      providesTags: ["Tasks"],
    }),

    getTaskById: builder.query({
      query: (taskId) => `/tasks/${taskId}`,
    }),

    createTask: builder.mutation({
      query: (taskInfo) => ({
        url: "/tasks",
        method: "POST",
        body: taskInfo,
      }),
    }),

    updateTask: builder.mutation({
      query: (taskUpdates) => ({
        url: `/tasks/${taskUpdates._id}`,
        method: "PUT",
        body: taskUpdates,
      }),
    }),

    deleteTask: builder.mutation({
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
  useUpdateTaskMutation,
  useDeleteTaskMutation,
} = taskApis;
