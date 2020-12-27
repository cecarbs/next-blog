export const formatDate = (date) => {
  const calender = {
    1: "January",
    2: "February",
    3: "March",
    4: "April",
    5: "May",
    6: "June",
    7: "July",
    8: "August",
    9: "September",
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
