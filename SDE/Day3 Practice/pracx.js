const user1 = {
    name: "Satyam",

    greet() {
        console.log(this.name);
    }
};

const user2 = {
    name: "Rahul"
};

user1.greet.call(user2);