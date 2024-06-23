import java.util.ArrayList;
import java.util.Scanner;

public class StudentGrades {
    public static void main(String[] args) {
        ArrayList<Integer> grades = new ArrayList<>();
        Scanner scanner = new Scanner(System.in);

        String input;
        while (true) {
            System.out.print("Enter student grade (or type 'done' to finish): ");
            input = scanner.nextLine();
            if (input.equalsIgnoreCase("done")) {
                break;
            }
            try {
                int grade = Integer.parseInt(input);
                grades.add(grade);
            } catch (NumberFormatException e) {
                System.out.println("Invalid input. Please enter a valid integer grade.");
            }
        }

        if (grades.isEmpty()) {
            System.out.println("No grades entered.");
        } else {
            int sum = 0;
            int highest = grades.get(0);
            int lowest = grades.get(0);
            for (int grade : grades) {
                sum += grade;
                if (grade > highest) {
                    highest = grade;
                }
                if (grade < lowest) {
                    lowest = grade;
                }
            }
            double average = sum / (double) grades.size();
            System.out.println("Average grade: " + average);
            System.out.println("Highest grade: " + highest);
            System.out.println("Lowest grade: " + lowest);
        }

        scanner.close();
    }
}
