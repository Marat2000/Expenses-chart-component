var chart=document.getElementsByClassName('chart');
var point=document.getElementsByClassName('point');
var value=[];

value.length=chart.length;

for (var i=0;i<chart.length;i++)
{	
	
	value[i]=point[i].textContent;
	point[i].innerHTML="$"+point[i].textContent;
}

for (var i=0;i<chart.length;i++){
if(Math.max(...value)==value[i])
	break;
}

for (var j=0;j<chart.length;j++){
chart[j].style.height=12/value[i]*value[j]+"rem";
}

chart[i].style.backgroundColor="hsl(186, 34%, 60%)";
