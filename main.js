var chart=document.getElementsByClassName('chart');
var point=document.getElementsByClassName('point');
var value=[];

value.length=chart.length;

for (var i=0;i<chart.length;i++)
{	
	chart[i].style.height=point[i].textContent/5+"rem";
	value[i]=point[i].textContent;
	point[i].innerHTML="$"+point[i].textContent;
}

for (var i=0;i<chart.length;i++){
if(Math.max(...value)==value[i])
	break;
}

chart[i].style.backgroundColor="hsl(186, 34%, 60%)";
