function onStart (){

var name = document.getElementById("name");
var classInfo = document.getElementById("classInfo");

name.innerHTML ="Cierra C. Roper";
name.style.color ="red";
name.style.textAlign ="center";
name.style.fontFamily ="Tahoma";

classInfo.innerHTML = "WEB115- SECTION 0002";
classInfo.style.color ="red";
classInfo.style.textAlign ="center";
classInfo.style.fontFamily ="Garamond";
classInfo.style.fontStyle ="italic";
}

function createResume(){


var name = document.getElementById("fullName").value;

var address = document.getElementById("fullAddress").value;

var number = document.getElementById("phoneNum").value;

var email = document.getElementById("email").value;

var personalData = document.getElementById("personalData").value;

var careerObje = document.getElementById("careerObjective").value;

var educationalBackgrd = document.getElementById("educationalBackgr").value;

var startDate1 = document.getElementById("startDate1").value;
var endDate1 = document.getElementById("endDate1").value;
var job1= document.getElementById("job1").value;

var startDate2 = document.getElementById("startDate2").value;
var endDate2 = document.getElementById("endDate2").value;
var job2= document.getElementById("job2").value;


var startDate3 = document.getElementById("startDate3").value;
var endDate3 = document.getElementById("endDate3").value;
var job3= document.getElementById("job3").value;

var startDate4 = document.getElementById("startDate4").value;
var endDate4 = document.getElementById("endDate4").value;
var job4= document.getElementById("job4").value;

var busRef = document.getElementById("busRef").value;



var reg =/\S+@\S+\.\S+/;


if (!reg.test(email)){
	alert("INCORRECT EMAIL");

}


else{
    var head = ("<html>\n<head>\n<title>" + name + "'s Resume</title>\n");
	head +=("<style>\n" + "body{font-size:25px;}\n");
	head +=("#head{font-size:45px;} \n");
	head +=("#leftSide{ clear:both;padding-right:30px;width:15%;float:left;} \n");
        head +=("#rightSide{width:83%;float:right;padding-right:30px;padding-bottom:20px;}"+"\n</style>");
	head+= ("\n</head>");
        var body =("\n<body>\n");
        body += ("<div id='head'>"+name + "</br>" + address + "</br>" + number + "</div></br><hr>");
	body += ("<div id='leftSide'>Career Objectives</div><div id='rightSide'>" + careerObje +"</div>");
	body += ("<div id='leftSide'>Personal Data</div><div id='rightSide'>" + personalData +"</div>");
	body += ("<div id='leftSide'>Education</div><div id='rightSide'>" + educationalBackgrd +"</div>");
	body += ("<div id='leftSide'>Employment Experience</br></div><div id='rightSide'></div>");
	body += ("<div id='leftSide'>" + startDate1+ " - "+ endDate1 + "</div>" +"<div id='rightSide'>" + job1+"</div>");
	body += ("<div id='leftSide'>" + startDate2+ " - "+ endDate2 + "</div>" +"<div id='rightSide'>" + job2+"</div>");
	body += ("<div id='leftSide'>" + startDate3+ " - "+ endDate3 + "</div>" +"<div id='rightSide'>" + job3+"</div>");
	body += ("<div id='leftSide'>" + startDate4+ " - "+ endDate4 + "</div>" +"<div id='rightSide'>" + job4+"</div>");
	body += ("<div id='leftSide'>Character References</div><div id='rightSide'>Upon Request</div>");
	body += ("<div id='leftSide'>Business References</div><div id='rightSide'>" + busRef  +"</div>");
	body +=("\n</body></html>");

	
    var wholePage = head + body;


    resumeWindow = window.open('about:blank','myPop','width=400,height=200,left=200,top=200');
    resumeWindow.document.write(wholePage);
	
	
}

}