import { RootState } from "../../store";

export const authUserSelectors = (state: RootState) => state.user.user;
