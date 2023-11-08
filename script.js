const speak=document.getElementById("speak");
        speak.addEventListener('click', function(){
            var text=document.getElementById("text").value;
            //to stop speaking process
            window.speechSynthesis.cancel;
            const result=new SpeechSynthesisUtterance(text);
            window.speechSynthesis.speak(result);
        });