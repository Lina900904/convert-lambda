package com.gms.web.lambda;

import java.util.Arrays;


public class lambdaIntro {
	/*
	 * 람다식(함수)은 식: expression El ${tot - page} 함수: function aa(p){2+p; return x;}
	 * 연산식이 하나이면{} 이 생략가능함
	 * 
	 **/
public static void main(String[] args) {
	System.out.println(Num.execute((t1, t2) -> t1>t2?t1:t2, 5, 3));

}
@FunctionalInterface
interface Calc<T>{T execute(T t1, T t2);}
static class Num{
	public static <T> T execute(Calc<T> c, T t1, T t2) {
		return c.execute(t1, t2);
	}
}

}