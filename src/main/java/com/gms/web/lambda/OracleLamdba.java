package com.gms.web.lambda;

import java.util.function.Predicate;

public class OracleLamdba {
/*
 * Consumer<T> void accept(T t) -> CUD
 * Function<T,R> R apply(T t) ->R
 * Predicate<T> boolean test(T t) -> Login
 * Supplier<T> T get() -> count
 * UnaryOperator<T> static <T> UnaryOperator<T> identity()
 * 이미 만들어져있음
 * 
 */
	public static void main(String[] args) {
		Predicate<String> p = s->s.length()==0;
		String x = "";
		String y = "Hellow";
		String r=(p.test(y)) ?"NULL":"NOT NULL";
		System.out.println(r);

	}

}
