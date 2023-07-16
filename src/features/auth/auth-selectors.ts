import { RootState } from "../../store";

export const authUserSelectors = (state: RootState) => state.auth.user;
