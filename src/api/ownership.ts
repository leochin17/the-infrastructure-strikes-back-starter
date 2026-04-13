import { sessionFromRequest } from "@/src/auth";
import type { ActionObject } from "@/lib/store";

export function isActionOwner(action: ActionObject, req: Request): boolean {
  const session = sessionFromRequest(req);
  if (!session) return false;
  return session.userId === action.ownerId;
}
