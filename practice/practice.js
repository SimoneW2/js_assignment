

/* This changes the picture and the text when you click on the list on the right*/
review=["The book 'Even Dogs in the Wild' is a good read. It is a reviting novel full of twists and turns there is a reason why it is the nations favourite. You will not be disappointed. It is an easy page turner. Go on treat yourself to a good book. The paperback version is reasonably priced.","Prison Break dvd is a good thiller. There are plot twists. The character come to life and the storyline will have you sitting on the edge of your seat. This dvd will have you hooked and you will be eagerly anticipating the next episodes that are due out in the winter. The sense of humour is dark there is more than enough action.","The Four Tops music cd is amazing. These golden oldies will have tapping your feet and humming along. Almost all songs were hits and very upbeat. This cd would be a good gift. It can be played at parties or you could just listen for your own pleasure."];
pict=["img/book.jpg", "img/dvd.jpg","img/cd.jpg"];

function myproducts(prod)
{
	document.getElementById("reviewbox").innerHTML=review[prod];
	document.getElementById("pictbox").src=pict[prod];
}



/*change text color for content in the body of the website using radio form in row-2 col1*/
function txtcol(tcol)
{
	document.body.style.color=tcol.value;
}

/*change background color of the body of the website using radio form in row-2 col2*/
function backcol(bcol)
{
	document.body.style.backgroundColor=bcol.value;
	
}