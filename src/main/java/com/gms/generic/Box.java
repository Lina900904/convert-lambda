package com.gms.generic;

import java.util.ArrayList;
import java.util.List;

@SuppressWarnings("unchecked")
public class Box<T> {
		ArrayList<T> list = new ArrayList<T>();
		public void add(T item) {list.add(item);}
		public T get(int i ) {return list.get(i);}
		public ArrayList<T> getList() {return list;}
		int size() {return list.size();}
		public String toString() {return list.toString();}
	
	
	
}
