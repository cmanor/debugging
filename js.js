const storeOwners = [
    { charles: 1 },
   { sally: 1 },
  { cassandra: 1 },
    { "Danny Shavez": 1},
        {location: "in NM"}
];

function tellMeMyStores() {
console.log("Hey, can you tell me who owns stores?");
}

function hasStore() {
for (let i = 0; i < storeOwners.length -2; i++) {
          let people = Object.keys(storeOwners[i]);
        let person = people.toString();
           console.log("Yes, " + person + " has one");
}
}

tellMeMyStores();
hasStore();

let man = Object.keys(storeOwners[3]);
let mister = man;

let whereHeLives = storeOwners[4].location;
console.log("Yes, " + mister + " that lives " + whereHeLives + " owns one too.");