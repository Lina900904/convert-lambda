package com.gms.generic;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class GenericIntro {
	@SuppressWarnings("static-access")
	public static void main(String[]args) {
		System.out.println("======[1]=======");
		Item<String> itName = new Item<>();
		itName.getOne("갤노트");
		Item<Integer> itVers = new Item<>();
		itVers.getOne(9);
		System.out.println("삼성 신상폰 이름은 : \n"+itName.getOne()+itVers.getOne());
		System.out.println("======[2]=======");
		Item<List<String>> it = new Item<>();
		it.setSome(Arrays.asList(new String[] {"Hello","World","Generic"}));
		System.out.println(it.getSome());
		
		System.out.println("======[3]=======");
	
		FruitBox<Fruit> fbox = new FruitBox<>();			
		FruitBox<Fruit> abox = new FruitBox<>();	
		fbox.add(new Apple());
		fbox.add(new Grape());
		abox.add(new Apple());
		abox.add(new Apple());
		
		System.out.println(new Mixer().makeJuice(fbox));
		System.out.println(new Mixer().makeJuice(abox));
	}

}
