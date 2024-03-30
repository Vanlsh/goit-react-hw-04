import { formatDistanceToNow } from "date-fns";

export const formattingData = (date) => {
  return formatDistanceToNow(new Date(date), { addSuffix: true });
};
