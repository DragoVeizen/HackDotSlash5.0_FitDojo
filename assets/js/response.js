
function getbotresponse(input)
{
    
    if(input == "Yes,I'm just a beginner!")
    {
        return "Okay!<br>Now we have 3 levels of exercise in our website for:beginner,intermediate and advanced people.<br>As you told me you are a beginner we would want you to choose beginner level level.";
    }
    else if(input == "Will there be a trainer for guiding me through my fitness journey?")
    {
        return "Yes!<br>There will be a trainer who will help and motivate you throughout your workout.";
    }
    else if(input == "Is the trainer going to teach live?What if I miss the class?")
    {
        return "There will be live as well as recorded classes so that you won't miss a day without workout!";
    }
    else if(input=="Do you recommend any diet plans?")
    {
        return "Yes,we do have dietician for the same who can guide on that you according to your health!<br>But if you don't want a dietcian we also have healthy recipies which you can incorporate in your daily routine!!"  
    }
    else if(input=="Thank you so much")
    {
        return "Welcome!<br>Talk to you later";
    }
    else if(input=="bye")
    {
        return "bye";
    }
    else if(input=="hi")
    {
        return "Hello there,what can we help you with?";
    }
    
    else if(input == "I wanted to start my fitness journey with you guys!")
    {
        return "We are elated that you chose us for your fitness journey!<br>";
    }
    else if(input == "How can you help me with the same?")
    {
        return "To begin with I just wanted to know whether you have any injury aur health issues?";
    }
    else if(input=="No,I don't have any health issues!")
    {
        return "Great!<br>Also do you exercise daily or you are just a beginner? "
    }
    else
    {
        return "Try asking something else!";
    }
}