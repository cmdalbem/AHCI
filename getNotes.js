function getNotes(fileName)
{
	var arr_f = [];

	/* Loading XML file  */

	var xmlDoc=document.implementation.createDocument("","",null);
	xmlDoc.async = false;
	xmlDoc.load(fileName);
	xmlDoc.onload=MusicParse();

	/* Function to parse the document  */

	function MusicParse()
	{
	 
		var i = 0;
		var j = 0;
		var f = [];

		/* Obtaining which instrument of song user wants to display */

		var part_list = xmlDoc.getElementsByTagName("part-list");
		var score_part = xmlDoc.getElementsByTagName("score-part");

		var str_display = "Enter the instrument number to map it on Fret Board : ";
		
		for(i=0; i<score_part.length; i++)
		{   
			  var part_id = score_part[i].getAttribute('id');
			  var part_name = score_part[i].getElementsByTagName('part-name')[0].textContent;

			  var str1 = "   "+i+"."+part_name ;
			  str_display = str_display + str1 ;
		}

		var person = prompt(str_display, "0");

		/* If invalid instrument number is entered then error msg */

		if(person >= score_part.length)
		{
			document.write("Enter valid instrument number. Refresh again. ");
			return ;
		}


		var arr_part = xmlDoc.getElementsByTagName("part");
		
		/* Obtatining the notes  */


		var arr_step = arr_part[person].getElementsByTagName('step');
		var iMax = arr_step.length;
		var jMax = 3;

		for(i=0;i<iMax;i++) 
		{
		 f.push([]) ;
		 for (j=0;j<jMax;j++) {
		  f[i][j]=0;
		 }
		}


		/* Travesing the tree  */

		for (var i = 0; i < iMax; i++)
		{

			var pitch = arr_step[i].parentNode ;
			var note = pitch.parentNode ;

			 var step = arr_step[i].textContent;
			 var fret = note.getElementsByTagName('fret')[0].textContent;
			 var string = note.getElementsByTagName('string')[0].textContent;
			  
			 f[i][0]=step;
			 f[i][1]=fret;
			 f[i][2]=string;

		}

			/* Storing the values in a Global variale */

			arr_f = f ;

		}


	 	return arr_f ;

}

