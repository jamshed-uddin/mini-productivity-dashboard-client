import { baseApi } from "./baseApi";

const goalApis = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getGoals: builder.query({
      query: () => "/goals",
      providesTags: ["Goals"],
    }),
    getGoalById: builder.query({
      query: (goalId) => `/goals/${goalId}`,
    }),
    createGoal: builder.mutation({
      query: (goalInfo) => ({
        url: "/goals",
        method: "POST",
        body: goalInfo,
      }),
      invalidatesTags: ["Goals"],
    }),

    updateGoal: builder.mutation({
      query: (goalUpdates) => ({
        url: `/goals/${goalUpdates._id}`,
        method: "PUT",
        body: goalUpdates,
      }),
      invalidatesTags: ["Goals"],
    }),

    deleteGoal: builder.mutation({
      query: (goalId) => ({
        url: `/goals/${goalId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Goals"],
    }),
  }),
});

export const {
  useGetGoalsQuery,
  useGetGoalByIdQuery,
  useUpdateGoalMutation,
  useCreateGoalMutation,
  useDeleteGoalMutation,
} = goalApis;
