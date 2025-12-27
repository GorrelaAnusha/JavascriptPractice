const company = {
  name: "TechCorp",
  address: {
    city: "Bangalore",
    pin: 560001
  },
  employees: [
    { name: "Anusha", role: "Developer" },
    { name: "Raj", role: "Designer" }
  ]
};

console.log(company.address.city);
console.log(company.employees[0].name);
console.log(company.employees[1].role);