import { format, isToday, isTomorrow } from "date-fns";

const formatDate = (dateString: string) => {
  const date = new Date(dateString);

  if (isToday(date)) {
    return `${format(date, "d MMMM")} .  Today . ${format(date, "EEEE")}`;
  } else if (isTomorrow(date)) {
    return `${format(date, "d MMMM")} .  Tomorrow . ${format(date, "EEEE")}`;
  } else {
    return format(date, "d MMM yyyy");
  }
};

export default formatDate;
