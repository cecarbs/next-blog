export const formatDate = (date) => {
  const calender = {
    01: "January",
    02: "February",
    03: "March",
    04: "April",
    05: "May",
    06: "June",
    07: "July",
    08: "August",
    09: "September",
    10: "October",
    11: "November",
    12: "December",
  };

  let dateArray = date.slice(0, 10).split("-");

  for (let prop in calender) {
    if (dateArray[1] === prop) {
      dateArray.splice(1, 1, calender[prop]);
    }
  }
  return `${dateArray[1]} ${dateArray[2]}, ${dateArray[0]}`;
};

export const createTitleLink = (title) => {
  let search = title.toLowerCase().split(" ").join("-");
  return search;
};

export function truncate(str, n) {
  return str?.length > n ? str.substr(0, n - 1) + "..." : str;
}
