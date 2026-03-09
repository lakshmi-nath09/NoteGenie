function generateNotes(){

let topic=document.getElementById("topic").value.toLowerCase();

let notes = {

"machine learning":{
definition:"Machine Learning is a branch of Artificial Intelligence that allows computers to learn from data and improve their performance without being explicitly programmed.",
points:"• Uses algorithms to analyze data\n• Learns patterns automatically\n• Improves performance with experience",
apps:"• Recommendation systems (Netflix, Amazon)\n• Image recognition\n• Spam email detection",
adv:"• Automates decision making\n• Handles large datasets efficiently\n• Improves prediction accuracy",
sum:"Machine Learning enables systems to learn from data and make intelligent decisions without direct human programming."
},

"artificial intelligence":{
definition:"Artificial Intelligence is the simulation of human intelligence in machines that are programmed to think, learn and solve problems.",
points:"• Enables machines to mimic human thinking\n• Includes machine learning and deep learning\n• Uses algorithms and data",
apps:"• Chatbots\n• Self-driving cars\n• Virtual assistants",
adv:"• Reduces human effort\n• Improves automation\n• Helps in complex problem solving",
sum:"Artificial Intelligence allows machines to perform tasks that normally require human intelligence."
},

"dbms":{
definition:"Database Management System (DBMS) is software that allows users to create, store, manage and retrieve data efficiently.",
points:"• Organizes data in structured format\n• Supports data security\n• Provides data integrity",
apps:"• Banking systems\n• Library management systems\n• Online reservation systems",
adv:"• Reduces data redundancy\n• Improves data security\n• Easy data management",
sum:"DBMS helps manage large amounts of data efficiently and securely."
}

};

if(!notes[topic]){
alert("Notes not available for this topic yet. Try topics like Machine Learning, Artificial Intelligence, DBMS.");
return;
}

document.getElementById("def").innerText=notes[topic].definition;
document.getElementById("points").innerText=notes[topic].points;
document.getElementById("apps").innerText=notes[topic].apps;
document.getElementById("adv").innerText=notes[topic].adv;
document.getElementById("sum").innerText=notes[topic].sum;

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
