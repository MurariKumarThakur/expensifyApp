import moment from "moment";

export default [
  {
    id: "1",
    description: "Guma",

    amount: 195,
    createdAT: moment(0),
    note: ""
  },
  {
    id: "2",
    description: "Renta",

    amount: 109500,
    createdAT: moment(0)
      .subtract(4, "days")
      .valueOf(),
    note: ""
  },
  {
    id: "3",
    description: "CreditCarda",

    amount: 4500,
    createdAT: moment(0)
      .add(4, "days")
      .valueOf(),
    note: ""
  }
];
