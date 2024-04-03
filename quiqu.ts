type Person = {
  // Unique identifier for the person
  id: string;

  // Full name of the person
  fullName: string;

  // Age of the person in years
  age: number;

  // Email address of the person
  email: string;

  // Optional property for the person's phone number
  phoneNumber?: string;

  // Method to return a greeting string
  greet(): string;
};

// Example implementation of the Person type
const personExample: Person = {
  id: '12345',
  fullName: 'John Doe',
  age: 30,
  email: 'john.doe@example.com',
  greet: function() {
    return `Hello, my name is ${this.fullName} and I am ${this.age} years old.`;
  }
};
