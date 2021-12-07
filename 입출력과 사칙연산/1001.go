package main

import "fmt"

func Main1001() {
	var A int
	var B int
	fmt.Scanf("%d %d", &A, &B)
	if A <= 0 || B > 10 || A < B {
		return
	}
	fmt.Printf("%d", A-B)
}
