



"use strict;" //프로토타입 패턴
var ui={
	div : x=>{return $('<div/>').attr(x)},
	anchor : x=>{return $('<a/><br>').attr({href : '#',id : x.id}).html(x.txt);},//ui.anchor([{txt:'',id : ''}]);
	ul :x=>{ 
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
	},
/*	tbl : x=>{
		let t = $('<table/>');
		let thead = $('<thead/>');
		let tr = $('<tr/>');
		$.each(x,(i,j)=>{
			$('<th/>')
			.html(j)
			.appendTo(tr);
		});
		tr.appendTo(thead);
		thead.appendTo(t);
		$('<tbody/>').appendTo(t);
		return t;
	},*/
	tbl : x=>{
		let p = $('<div>').addClass('panel panel-'+x.type);
		let ph = $('<div>').addClass('panel-heading');
		let pd = $('<div class="panel-body">');
		ph.html(x.head).appendTo(p);
		pd.html(x.body).appendTo(p);
		let t = $('<table/>').attr({id : x.id}).addClass(x.clazz);
		t.appendTo(p);
		let thead = $('<thead/>');
		let tr = $('<tr/>');
		$.each(x.list,(i,j)=>{
			$('<th/>').html(j).appendTo(tr);
		});
		tr.appendTo(thead);
		thead.appendTo(t);
		$('<tbody/>').appendTo(t);
		return p;
	},
	page : x=>{
		
		return $('<nav/>')
		.append(
				$('<ul class="pagination"/>')
				.attr('aria-label','...'));
		
/*let nav = $('<nav>');
  <ul class="pagination">
    <li class="page-item disabled">
      <span class="page-link">Previous</span>
    </li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item active">
      <span class="page-link">
        2
        <span class="sr-only">(current)</span>
      </span>
    </li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item">
      <a class="page-link" href="#">Next</a>
    </li>
  </ul>
</nav>	*/
	},

		
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
/*
 * let prev = '',next = '';
					let existPrev = x.existPrev;
					let exisNext = x.exisNext;
					if(!existPrev){
						prev = 'disable';
					}
					if(!exisNext){
						next = 'disable';
					}
					let ul = $('<ul id="ul">').addClass('pagination');
					let preli = $('<li class="prev'+x.prev+'"><span class="page-link" href="#">◀</span>');
					let nextli = $('<li class="next'+x.next+'"><span class="page-link" href="#">▶</span>');
					preli.appendTo(ul);
					for(let i=x.beginPage;i<x.endPage;i++){
						$('<span/>').addClass('page-link').html(i)
						.click(e=>{
							 alert('나는 '+i+'눌렀다');
						 })
						.appendTo($('<li class="page-item"/>'))
						.appendTo(ul)
					};
						$.each(x.list,(i,j)=>{
							$('<th/>').html(j).appendTo(tr)
						});
						nextli.appendTo(ul);
						ul.appendTo(nav);
 */