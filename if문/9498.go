package main

import "fmt"

func Main9498() {
	var year int
	fmt.Scanf("%d", &year)

	if year%4 == 0 && year%100 != 0 {
		fmt.Println("1")
	} else if year%400 == 0 {
		fmt.Println("1")
	} else {
		fmt.Println(0)
	}
}
