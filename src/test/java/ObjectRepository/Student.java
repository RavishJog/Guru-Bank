package ObjectRepository;


import org.testng.Assert;

import java.util.ArrayList;
        import java.util.List;

public class Student {

    private String Name;
    private String Surname;
    private int Age;
    private String Course;

    public static void main(String args[]){

        //Creating Students
        Student s1 = new Student("Tanita", "Rughoobur", 28, "Maths");
        Student s2 = new Student("Sandeep", "Joggessur", 30, "History");
        Student s3 = new Student("Melvin", "Hunstman", 27, "Maths");
        Student s4 = new Student("Tom", "Cruise", 14, "Computer");

        //Creating a list of Student
        List<Student> list = new ArrayList<Student>();

        //Adding Students to the list
        list.add(s1);
        list.add(s2);
        list.add(s3);
        list.add(s4);

        System.out.println("################################  Solution 1 #######################################");

        //Solution 1:
        for (int i=0; i<list.size(); i++) {
            Student s = list.get(i);
            if (list.get(i).Age > 14) {
                System.out.println("List of Students over age 14: " + "Name: " + s.Name + " Surname: " + s.Surname + " Age: " + s.Age + " Course: " + s.Course);
            }
        }
        for (int i=0; i<list.size(); i++) {
            Student s = list.get(i);
            if (list.get(i).Course.equals("Maths")){
                System.out.println("List of Students enrolled in Maths: " + "Name: " + s.Name + " Surname: " + s.Surname + " Age: " + s.Age + " Course: " + s.Course);
            }
        }
        for (int i=0; i<list.size(); i++) {
            Student s = list.get(i);
            if (list.get(i).Age > 18 && list.get(i).Course.equals("History")){
                System.out.println("List of Students who are 18 years and enrolled in History: " + "Name: " + s.Name);
            }
        }
        System.out.println("################################ End of Solution 1 #######################################");

        System.out.println("################################ Solution 2 #######################################");

        //Solution 2:
        for(Student s:list){
            if (s.Age > 14) {
                System.out.println("List of Students over age 14: " + "Name: " + s.Name + " Surname: " + s.Surname + " Age: " + s.Age + " Course: " + s.Course);
            }
        }
        for(Student s:list){
            if (s.Course.equals("Maths")){
                System.out.println("List of Students enrolled in Maths: " + "Name: " + s.Name + " Surname: " + s.Surname + " Age: " + s.Age + " Course: " + s.Course);
            }
        }
        for(Student s:list){
            if (s.Age > 18 && s.Course.equals("History")){
                System.out.println("List of Students who are 18 years and enrolled in History: " + "Name: " + s.Name);
            }
        }
        System.out.println("################################  End of Solution 2 #######################################");

    }

    public Student(String Name, String Surname, int Age, String Course){
        this.Name = Name;
        this.Surname = Surname;
        this.Age = Age;
        this.Course = Course;
    }


}

