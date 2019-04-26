function div_show() {
document.getElementById('abc').style.display = "block";
}
//Function to Hide Popup
function div_hide(){
document.getElementById('abc').style.display = "none";
}
// function to text checkbox
function check_text(){
var str = document.getElementById('name').value
if (str == "")
{
alert('please enter the store number')
}
else
{
	alert('This functionality is still under development')
	
}
}
function ShowHideDiv() {
		var checksdt = document.getElementById("checksdt")
		var checknonsdt = document.getElementById("checknonsdt")
		dvtextbox.style.display = checksdt.checked ? "block" : "none"
    }
function checkallstores()
{
	    var checksdt = document.getElementById("checksdt") 
		var checknonsdt = document.getElementById("checknonsdt") 
		if (checksdt.checked)
		{
			if (dvtextbox.style.display == "block" && document.getElementById('name').value != "" )
			{
				alert('This functionality is still under development')
			}
			else
			{
				alert('please fill the store number properly')
			}
		}
		else if(checknonsdt.checked)
		{
			alert('This functionality is still under development')
		}
		else
		{
			alert('please fill the values properly')
		}
				
}
function checkdevstores()
{
	    var checksdt = document.getElementById("checksdt") //live store
		var checknonsdt = document.getElementById("checknonsdt") // dev store
		if(checksdt.checked)
			{
				alert('This functionality is yet to be developed')
			}
		else if(checknonsdt.checked)
			{
				alert('This functionality is yet to be developed')
			}
		else
			{
				alert('please select an option')
			}
			
}
function show_releasefourone()
{

		var check = confirm('Do you want to check D2.4.41 SDT stores')
		{
			if(check == true)
			{
				var storenumber = prompt('enter the D2.4.41 SDT store number to check')
				if(storenumber == null || storenumber == '')
				{
					alert('invalid input')
				}
				else
				{
					alert('we are still working on it')
				}

			}
			else
			{
				window.open('dfouronenonsdtanalytics.jsp')
			}
		}			
}
function show_releasefourtwo()
{
	var check = confirm('Do you want to check D2.4.42 SDT stores')
	if (check == true)
	{
		var storenumber = prompt('Please enter the D2.4.42 SDT store number to check')
		if (storenumber == null || storenumber == '')
		{
			alert('invalid input')
		}	
		else
		{
			alert('we are still working on it')
			

		}
	}
	else
	{
		window.open('dfourtwononsdtanalytics.jsp')
	}
}
function show_releasefourthree()
{
	var check = confirm('Do you want to check D2.4.43 SDT stores')
	if(check == true)
	{
		var storenumber = prompt('Please enter the D2.4.43 SDT store number to check')
		if (storenumber == null || storenumber == '')
		{
			alert('invalid input')
		}	
		else
		{
			alert('we are still working on it')
			
		}
	}
	else
	{
		window.open('dfourthreenonsdtanalytics.jsp')
	}			
}
function show_releasefourfour()
{
	var check = confirm('Please enter the D2.4.44 SDT store number to check')
	{
		if(check == true)
		{
			var storenumber = prompt('Please enter the D2.4.44 SDT store number to check')
			if (storenumber == null || storenumber == '')
			{
				alert('invalid input')
			}	
			else
			{
				alert('we are still working on it')
				

			}
		}
		else
		{
			window.open('dfourfournonsdtanalytics.jsp')
		}
	}
			
}
function show_releasefourfive()
{
	var check = confirm('Do you want to check D2.4.45 SDT stores')
	if(check == true)
	{
		var storenumber = prompt('Please enter the D2.4.45 SDT store number to check')
		if (storenumber == null || storenumber == '')
		{
			alert('invalid input')
		}	
		else
		{
			alert('we are still working on it')
			

		}
	}
	else
	{
		window.open('dfourfivenonsdtanalytics.jsp')
	}			
}
function show_releasefoursix()
{
	var check = confirm('Do you want to check D2.4.46 SDT Stores')
	if(check == true)
	{
		var storenumber = prompt('Please enter the D2.4.46 SDT store number to check')
		if (storenumber == null || storenumber == '')
		{
			alert('invalid input')
		}	
		else
		{
			alert('we are still working on it')

		}
	}
	else
	{
		window.open('dfoursixnonsdtanalytics.jsp')
	}

}
function show_releasefourseven()
{
	var check = confirm('Do you want to check D2.4.47 SDT stores')
	if(check == true)
	{
		var storenumber = prompt('Please enter the D2.4.47 SDT store number to check')
		if (storenumber == null || storenumber == '')
		{
			alert('invalid input')
		}	
		else
		{
			alert('we are still working on it')	

		}
	}
	else
	{
		window.open('dfoursevennonsdtanalytics.jsp')
	}			
}
function show_releasefoureight()
{
	var check = confirm('Do you want to check D2.4.48 SDT stores')
	if(check == true)
	{
		var storenumber = prompt('Please enter the D2.4.48 SDT store number to check')
		if (storenumber == null || storenumber == '')
		{
			alert('invalid input')
		}	
		else
		{
			alert('we are still working on it')
			

		}
	}
	else
	{
		window.open('dfoureightnonsdtanalytics.jsp')
	}


			
}

