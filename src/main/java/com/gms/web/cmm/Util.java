package com.gms.web.cmm;

import java.util.function.Consumer;
import java.util.function.Function;
import java.util.function.Predicate;

import javax.servlet.http.HttpServletRequest;


public class Util {
	public static Consumer<Integer>logi = System.out::println;
	public static Consumer<String>log = System.out::println;
	public static Function <String, Integer> ConvInt = Integer::parseInt;
	public static Predicate<String> p = s->s.equals("");
	public static Predicate<String> notNull = p.negate();
	public static Function <HttpServletRequest, String> ctx = HttpServletRequest::getContextPath;

	}


