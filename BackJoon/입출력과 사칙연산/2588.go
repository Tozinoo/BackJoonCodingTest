package main

import (
	"fmt"
)

func Main2588() {
	var A, B int
	fmt.Scanf("%d %c", &A)
	fmt.Scanf("%d", &B)

	F := splitFirstNumber(B)
	G := splitSecondNumber(B)
	H := splitLastNumber(B)

	first := H * A
	second := G * A
	third := F * A
	last := A * B
	fmt.Println(first)
	fmt.Println(second)
	fmt.Println(third)
	fmt.Println(last)
}
func splitLastNumber(num int) int {
	return num % 10
}
func splitSecondNumber(num int) int {
	return (num / 10) % 10
}
func splitFirstNumber(num int) int {
	return (num / 100) % 10
}
