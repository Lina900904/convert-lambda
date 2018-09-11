package com.gms.generic;

import java.util.Comparator;

public class Car<T,U,V,W> {
	String name;
	int price;
	Car(String name, int price){
		this.name = name;
		this.price = price;
			
	}
}
class BMW extends Car{
	BMW(String name, int price){
		super(name, price);
	}
}
class Avante extends Car{
	Avante(String name, int price){
		super(name, price);
	}
}
class Sonata extends Car{
	Sonata(String name, int price){
		super(name, price);
	}
}
class Genesis extends Car{
	Genesis(String name, int price){
		super(name, price);
	}
}
class BMWOrer implements Comparator<BMW>{
	public int compare(BMW b1, BMW b2) {
		return b2.price-b1.price;
	}
}
class AvanteOrer implements Comparator<Avante>{
	public int compare(Avante b1, Avante b2) {
		return b2.price-b1.price;
	}
}
class SonataOrer implements Comparator<Sonata>{
	public int compare(Sonata b1, Sonata b2) {
		return b2.price-b1.price;
	}
}
class GenesisOrer implements Comparator<Genesis>{
	public int compare(Genesis b1, Genesis b2) {
		return b2.price-b1.price;
	}
}
class CarOrder implements Comparator<Car>{
	public int compare(Car b1, Car b2) {
		return b2.price-b1.price;
}
}
class CarBox<T extends Car> extends Box<T>{
	}


