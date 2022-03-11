const express = require("express");
const app = express();
const cors = require("cors");
const port = 3000;

app.use(cors());

const users = {
  users: [
    {
      userId: 1,
      firstName: "Krish",
      lastName: "Lee",
      phoneNumber: "123456",
      emailAddress: "krish.lee@learningcontainer.com",
    },
    {
      userId: 2,
      firstName: "racks",
      lastName: "jacson",
      phoneNumber: "123456",
      emailAddress: "racks.jacson@learningcontainer.com",
    },
    {
      userId: 3,
      firstName: "denial",
      lastName: "roast",
      phoneNumber: "33333333",
      emailAddress: "denial.roast@learningcontainer.com",
    },
    {
      userId: 4,
      firstName: "devid",
      lastName: "neo",
      phoneNumber: "222222222",
      emailAddress: "devid.neo@learningcontainer.com",
    },
    {
      userId: 5,
      firstName: "jone",
      lastName: "mac",
      phoneNumber: "111111111",
      emailAddress: "jone.mac@learningcontainer.com",
    },
  ],
};

app.get("/", async (req, res) => {
  await res.json(users);
});

app.listen(port, function () {
  console.log(" server listening on port 3000");
});
