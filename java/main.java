public // Define the first interface
interface main {
    void sound(); // abstract method
}

// Define the second interface
interface Bird {
    void fly(); // abstract method
}

// Class implementing multiple interfaces
class Bat implements Animal, Bird {
    // Provide implementation for the sound() method of the Animal interface
    public void sound() {
        System.out.println("Bat makes a screeching sound.");
    }

    // Provide implementation for the fly() method of the Bird interface
    public void fly() {
        System.out.println("Bat can fly.");
    }
}

public class main {
    public static void main(String[] args) {
        // Create an object of the Bat class
        Bat bat = new Bat();
        
        // Call methods from both interfaces
        bat.sound(); // Calls the sound() method from Animal interface
        bat.fly();   // Calls the fly() method from Bird interface
    }
} 
    

