function generateNotes(){

let topic=document.getElementById("topic").value;

if(topic==""){
alert("Please enter a topic");
return;
}

document.getElementById("def").innerText=
topic+" is an important concept that helps understand the fundamentals of the subject.";

document.getElementById("points").innerText=
"• Basic concept of "+topic+
"\n• Used in many real-world applications"+
"\n• Important for exams and understanding core ideas";

document.getElementById("apps").innerText=
"• Used in modern technology"+
"\n• Applied in research and development"+
"\n• Useful in solving practical problems";

document.getElementById("adv").innerText=
"• Improves efficiency"+
"\n• Enhances understanding"+
"\n• Supports innovation";

document.getElementById("sum").innerText=
"In summary, "+topic+" plays a significant role in the subject and helps build strong conceptual knowledge.";

}

function copyNotes(){

let text=
document.getElementById("def").innerText+"\n"+
document.getElementById("points").innerText+"\n"+
document.getElementById("apps").innerText+"\n"+
document.getElementById("adv").innerText+"\n"+
document.getElementById("sum").innerText;

navigator.clipboard.writeText(text);

alert("Notes copied!");
}
