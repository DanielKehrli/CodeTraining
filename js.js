function startButton (){
    if (document.getElementById("name").value != ""){
        document.getElementById("name").remove();
        document.getElementById("startButton").remove();
        document.getElementById("heading").innerHTML = "Question: "

        const question = document.createElement("h5");
        question.innerText = "Write the Value of vix_in to vqx_out:";
        document.getElementById("question").appendChild(question);

        var answer = document.createElement("input");
        answer.setAttribute("type", "text");
        answer.setAttribute("id", "answer");
        answer.setAttribute("class", "answer form-control");
        answer.setAttribute("placeholder", "Put in Answer........................"); 
        document.getElementById("question").appendChild(answer);

        var answerButton = document.createElement("button");
        answerButton.setAttribute("type", "button");
        answerButton.setAttribute("class", "btn btn-success");
        answerButton.setAttribute("onclick", "answerButton()");
        answerButton.innerHTML = "Send Answer";
        document.getElementById("buttonPlace").appendChild(answerButton);

    }
    else{
        alert("Put in a Username!!");
    }
}
