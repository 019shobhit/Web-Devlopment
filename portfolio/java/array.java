import java.util.Scanner;

public class array{
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter the size of array.");
        int len = sc.nextInt();
        int[] arr = new int[len];
        for(int i = 0; i < len; i++) {
            System.out.print("Enter the element no. " + (i+1));
            arr[i] = sc.nextInt();
        }
        System.out.println("Your array is below : ");
        for(int j = 0; j < len; j++) {
            System.out.println(arr[j]);
        }
        int temp = 0;
        for(int i = 0; i < len; i++) {
            for(int j =i; j < len; j++) {
                if(arr[j] < arr[j+1]) {
                    temp = arr[j];
                    arr[j+1] = arr[j];
                    arr[j] = temp;
                }
            }
        }
        System.out.println("Sorted array is following : ");
        for(int i = 0; i < len; i++) {
            System.out.println(arr[i]);
        }
        sc.close();
    }
}