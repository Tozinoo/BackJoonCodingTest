package main

import "fmt"

func Main10869() {
	var A int
	var B int

	fmt.Scanf("%d %d", &A, &B)

	if A < 1 || A > 10000 {
		fmt.Println("a:", A)
		return
	}
	if B < 1 || B > 10000 {
		fmt.Println("a:", B)
		return
	}

	fmt.Printf("%d\n", add(A, B))
	fmt.Printf("%d\n", sub(A, B))
	fmt.Printf("%d\n", mul(A, B))
	fmt.Printf("%d\n", div(A, B))
	fmt.Printf("%d\n", remain(A, B))

}

func add(A, B int) int {
	return A + B
}
func sub(A, B int) int {
	return A - B
}
func mul(A, B int) int {
	return A * B
}
func div(A, B int) int {
	return A / B
}
func remain(A, B int) int {
	return A % B
}
