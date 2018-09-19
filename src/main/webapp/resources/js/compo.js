


"use strict;" //프로토타입 패턴
var ui={
	div : x=>{return $('<div/>').attr(x)},
	anchor : x=>{return $('<a/><br>').attr({href : '#'}).html(x.txt);},
	ul :x=>{ //ui.ul([{txt:'TEST'}]);
		let ul = $('<ul>');
		for(var i=0;i<x.len;i++){
				$('<li/>').attr({id :x.id+'-'+i}).appendTo(ul);
		}
		return ul;
	},
	label : x=>{
		return $('<label/>')
			.attr('for',x.id).appendTo(ul);			
	},
	btn :x=>{

		return $('<button/>').attr('type','button')
		.addClass('btn btn-'+x.clazz)
		.html(x.txt);
		
/*		Primary(blue)
		Secondary(gray)
		Secondary(green)
		Danger(red)
		Warning(yellow)
		Info(dark green)
		Light(black)
		Dark(white)
		Link(trans)*/
		
		/*let y = $('<button/>');
		//<button type="button" class="btn btn-primary">Primary</button>
		y.addClass('type','button')
		.addClass('btn btn-'+x.clazz)
		.thml(x.txt);*/
		
	},
	input : x=>{
		let p = ui.div({}).addClass("input-group mb-3");
        (ui.div({id:'input-group-prepend'})
                .addClass("input-group-prepend"))
                .html('<span class="input-group-text" id="basic-addon1">'
                        + x.txt
                        +'</span>').appendTo(p);
		$("<input/>").attr({
			id : x.id,
			type: 'text',
			placeholder:"입금액" ,
			"aria-label":"Username", 
			"aria-describedby":"basic-addon1"
		}).addClass("form-control").appendTo(p);
		return  p
	},
	
	inputGroundPrepend :x=>{
		return '<div class="input-group mb-3">'
		 +'<div class="input-group-prepend">'
		 +'<span class="input-group-text" id="basic-addon1">@</span>'
		 +'</div>'
		 +'<input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1">'
		 +'</div>'
	}

	
}
