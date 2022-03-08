export interface AppUser {
  permissions: string[];
}
export interface AppUserWithId extends AppUser {
  id: string;
}

export const APP_USERS_COLLECTION = "appUsers";