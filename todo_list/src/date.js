import { format } from "date-fns";


export function getCurrentDate() {
return format(new Date(), "MM-dd-yyyy");
};
