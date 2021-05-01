var nav = document.body.querySelector(".nav")
var begin = document.body.querySelector(".begin")
var display = document.body.querySelector(".display")
var sub = document.body.querySelector(".sub")
var pages =[
  {
    name:"Grade View",
    content:""
  },
  {
    name:"Add Grade",
    content:""
  }
]
var grades=[]
function navPg(pg){
  var login = document.body.querySelector(".login");
  var user = document.body.querySelector(".username").value
  var pass = document.body.querySelector(".password").value
  if(user==="cool"&&pass==="password"){
    begin.innerHTML=""
    for(var i=0; i<pages.length; i++){
      createPage(pages[i]);
    }
    contentWrite(pages[1].content, "Add Grade")
  }else{
    login.innerHTML="Invalid Username or Password"
  }
}

document.body.querySelector(".submit").addEventListener("click", function(){
  navPg(pages)
})

function createPage(pg){
  var button = document.createElement("button")
  button.addEventListener("click", function(){
    contentWrite(pg.content,pg.name)
  })
  button.innerHTML=pg.name;
  nav.appendChild(button)
}
function contentWrite(wd,pg){
  display.innerHTML=""
  if(pg=="Grade View"){
    var header = document.createElement("h1");
    header.innerHTML="Grades"
    display.appendChild(header);
    displayGrades();
  }else{
    var box = document.createElement("input");
    box.id="text";
    display.appendChild(box);
    document.getElementById("text").setAttribute("placeholder", "Student Name")
    document.getElementById("text").setAttribute("class", "box")
    var box2 = document.createElement("input");
    box2.id="text2";
    display.appendChild(box2);
    document.getElementById("text2").setAttribute("placeholder", "Grade 0-100");
    document.getElementById("text2").setAttribute("class", "box2")
    var button = document.createElement("button");
    button.innerHTML="Submit Grade";
    display.appendChild(button);
    button.addEventListener("click", function(){
      submit();
    })
  }
}

function submit(){
  var get = document.getElementById("text");
  var get2 = document.getElementById("text2")
  var text = document.body.querySelector(".box").value;
  var text2 = document.body.querySelector(".box2").value;
  if(text!=0 && text2>=0 && text2<=100){
     var upd = text+" | "+text2
     grades.push(upd);
     sub.innerHTML="";
     display.appendChild(sub)
     contentWrite(pages[0].content, "Grade View")
  }else{
    sub.innerHTML="Please enter in a valid student name and grade!";
    display.appendChild(sub)
  }
}

function displayGrades(){
  var count = 0
  for(i=0; i<grades.length; i++){
    var ele = document.createElement("div")
    var eleGrade = document.createElement("h3");
    eleGrade.innerHTML = grades[count];
    ele.appendChild(eleGrade)
    display.appendChild(ele)
    count++;
  }
}