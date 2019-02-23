$(document).ready(function() {
    
    
        $("#countdown").hide();
        $(".trivia-questions").hide();
        $(".results").hide();
    
        
        var number = 120; 
        var intervalId;
        var correctCount = 0;
        var wrongCount = 0;
        var unanswered = 0;
    
    
        function showQuestions(){
            $("#countdown").show();
            $(".trivia-questions").show();
            $("#game-done").show();
        }
    
        
        function countdownTimer(){
                intervalId = setInterval(decrement, 1000);
        }
       
            
        function decrement(){
            number--;
            $("#timer").html(" " + number + " " + "seconds");
            if (number === 1){
                $("#timer").html(" " + number + " " + "seconds");
            }
            else if(number === 0) {
                stop();
                hide();
                displaySummary();
            }
        }
    
            
        function stop() {
            clearInterval(intervalId);
        }
    
            
        function hide(){
            $("#countdown").hide();
            $(".trivia-questions").hide();
            $("#game-done").hide();
        }
    
        
        function displaySummary(){
            $(".results").show();
            unanswered = (12 - (correctCount + wrongCount));
            $("#correctScore").text("Correct Answers:" + " " + correctCount); 
            $("#wrongScore").text("Wrong Answers:" + " " + wrongCount); 
            $("#unanswered").text("Unanswered:" + " " + unanswered); 
        }
    
    
        $("#game-start").on("click", function(){
            $("#game-start").hide();
            showQuestions();
            countdownTimer();
        }); 
    
        
        $("#game-done").on("click", function(){
            $("#game-start").hide(); 
            hide();
            displaySummary();
        });
    
        
        $("input[type=radio]").on ("change", function(){
        correctCount = $("input[value=correct]:checked").length;
        wrongCount = $("input[value=wrong]:checked").length;
        unanswered = (12 - (correctCount + wrongCount));
        });
    
    
    });