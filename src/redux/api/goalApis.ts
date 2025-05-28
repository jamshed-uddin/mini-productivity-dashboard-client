import { Goal } from "@/lib/types";
import { baseApi } from "./baseApi";

const goalApis = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getGoals: builder.query<{ message: string; data: Goal[] }, undefined>({
      query: () => "/goals",
      providesTags: ["Goals"],
    }),
    getGoalById: builder.query<{ message: string; data: Goal }, string>({
      query: (goalId) => `/goals/${goalId}`,
    }),
    createGoal: builder.mutation<
      { message: string; data: Goal },
      Partial<Goal>
    >({
      query: (goalInfo) => ({
        url: "/goals",
        method: "POST",
        body: goalInfo,
      }),
      invalidatesTags: ["Goals"],
    }),

    updateGoal: builder.mutation<
      { message: string; data: Goal },
      Partial<Goal>
    >({
      query: (goalUpdates) => ({
        url: `/goals/${goalUpdates._id}`,
        method: "PUT",
        body: goalUpdates,
      }),
      invalidatesTags: ["Goals"],
    }),

    deleteGoal: builder.mutation<{ message: string }, string>({
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
