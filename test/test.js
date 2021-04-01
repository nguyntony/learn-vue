console.log = function () {};
const { assert } = require("chai");
const fs = require("fs");
const Structured = require("structured");

const code = fs.readFileSync("js/app.js", "utf8");

describe("", function () {
  it("Did you add a `fullName` property on `computed` with a value of the provided function?", function () {
    let structure = function () {
      const app = new Vue({
        computed: {
          fullName: function () {
            if (this.firstName && this.lastName) {
              return this.firstName + " " + this.lastName;
            } else {
              return this.firstName || this.lastName;
            }
          },
        },
      });
    };

    let isMatch = Structured.match(code, structure);
    assert.isOk(isMatch);
  });

  it("Did you add a `ticketDescription` property on `computed` with a value of the provided function?", function () {
    let structure = function () {
      const app = new Vue({
        computed: {
          ticketDescription: function () {
            let readableTicketType = "General Admission";
            if (this.ticketType === "vip") {
              readableTicketType = "VIP";
            }

            let ticketPluralization = "tickets";
            if (this.ticketQuantity === 1) {
              ticketPluralization = "ticket";
            }

            return (
              this.ticketQuantity +
              " " +
              readableTicketType +
              " " +
              ticketPluralization
            );
          },
        },
      });
    };

    let isMatch = Structured.match(code, structure);
    assert.isOk(isMatch);
  });
});
