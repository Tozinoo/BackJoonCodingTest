package main

import "fmt"

func Main10430() {
	var A, B, C int
	fmt.Scanf("%d %d %d", &A, &B, &C)

	fmt.Printf("%d\n", first(A, B, C))
	fmt.Printf("%d\n", second(A, B, C))
	fmt.Printf("%d\n", third(A, B, C))
	fmt.Printf("%d", last(A, B, C))

}

func first(A, B, C int) int {
	return (A + B) % C
}
func second(A, B, C int) int {
	return ((A % C) + (B % C)) % C
}
func third(A, B, C int) int {
	return (A * B) % C
}
func last(A, B, C int) int {
	return ((A % C) * (B % C)) % C
}
