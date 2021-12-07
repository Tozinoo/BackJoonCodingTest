package main

import "fmt"

func Main2739() {
	var A int
	fmt.Scanf("%d", &A)
	for i := 1; i < 10; i++ {
		fmt.Printf("%d * %d = %d\n", A, i, A*i)
	}
}
