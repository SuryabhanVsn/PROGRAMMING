class Rectangle {
    private int length;
    private int breadth;

    // Default constructor
    public Rectangle() {
        length = 0;
        breadth = 0;
        System.out.println("Default Constructor called.");
    }

    // Constructor with one parameter
    public Rectangle(int side) {
        length = side;
        breadth = side;
        System.out.println("Constructor with one parameter called.");
    }

    // Constructor with two parameters
    public Rectangle(int length, int breadth) {
        this.length = length;
        this.breadth = breadth;
        System.out.println("Constructor with two parameters called.");
    }

    // Method to display the area of the rectangle
    public void displayArea() {
        int area = length * breadth;
        System.out.println("Area of Rectangle: " + area);
    }

    public static void main(String[] args) {
        // Creating objects using different constructors
        Rectangle rect1 = new Rectangle();        // Calls default constructor
        Rectangle rect2 = new Rectangle(5);       // Calls constructor with one parameter
        Rectangle rect3 = new Rectangle(4, 6);    // Calls constructor with two parameters

        // Display the area of each rectangle
        rect1.displayArea();
        rect2.displayArea();
        rect3.displayArea();
    }
}
