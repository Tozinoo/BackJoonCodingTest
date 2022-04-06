package main

import "fmt"

func Main1330() {
	var A int
	var B int
	fmt.Scanf("%d %d", &A, &B)
	if A > B {
		fmt.Println(">")
	} else if A < B {
		fmt.Println("<")
	} else {
		fmt.Println("==")
	}
}
