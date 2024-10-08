let btn = document.querySelector('#btn')
let content = document.querySelector('#content')
let voice = document.querySelector('#voice')

function speak(text) {
    let text_speak = new SpeechSynthesisUtterance(text)
    text_speak.rate = 1
    text_speak.pitch = 1
    text_speak.volume = 1
    text_speak.lang = "en-GB"
    window.speechSynthesis.speak(text_speak)
}
//intro 
/*function wishme() {
    let day = new Date()
    let hours = day.getHours(); let minutes = day.getMinutes(); let seconds = day.getSeconds(); let ampm = (hours >= 12 ? 'PM' : 'AM')
    if(hours >= 0 && hours<12){
        speak("good morning sir ji")
    }
else if(hours >= 12 && hours <= 16 ){
    speak('good afternoon sir ji')
}
else{
   // speak('good evening sir ji')
}
}*///speechrecognition
 window.addEventListener('load', ()=> { wishme() })
 let speechrec = window.SpeechRecognition || window.webkitSpeechRecognition
 let recon = new speechrec()
 recon.onresult=(event) =>{
    let currentindex = event.resultIndex
   let transcript= event.results[currentindex][0].transcript
   content.innerText = transcript
    takeCommand(transcript)
 }
 btn.addEventListener("click",()=>{
    recon.start()
    btn.style.display = "none"
    voice.style.display = "block"

 })
 //take message from user
function takeCommand(message){
    btn.style.display = "flex"
    voice.style.display = "none"
    if (message.includes("hello" )|| message.includes("hey" )) {
        speak(" Hello sir,kya kr sakti hu apke liyea")
    }
    else if(message.includes("who are you")){
        speak("i'm your assistant, created mishra ji")
    }
    else if(message.includes("what is your name")){
        speak(" mera nam t-99u hai")
    }
    else if(message.includes("how are you")){
        speak("i'm fine. what about you")
    }
    else if(message.includes("i'm also fine")){
        speak("that's nyc have a good day ")
    }
    else if(message.includes("who are things you do")){
        speak("i'm your virtual assistance i can search anything for you")
    }
    else if(message.includes("what you eat")){
        speak("i ate data and your head also")
    }
    
   
    else if(message.includes("open youtube")){
        speak("opening youtube")
        window.open("https://www.youtube.com/")
    }
    else if(message.includes("open google")){
        speak("opening google")
        window.open("https://www.google.com/")
    }
    else if(message.includes("open instagram")){
        speak("opening instagram")
        window.open("https://www.instagram.com/")
    }
    else if(message.includes("open facebook")){
        speak("opening facebook")
        window.open("https://www.facebook.com/")
    }
    else if(message.includes("open calculator")){
        speak("opening calculator")
        window.open("calculator://")
    }
    else if(message.includes("open WhatsApp")){
        speak("opening whatsapp")
        window.open("whatsapp://")
    }
    else if(message.includes("open Camera ")){
        speak("opening camera")
        window.open("Camera://")
    }
    
    else if(message.includes(" time ")){
       let time = new Date().toLocaleString(undefined,{hour:"numeric",minute:"numeric"})
       speak(time)
    }
    else if(message.includes("  date ")){
        let date = new Date().toLocaleString(undefined,{day:"numeric",month:"short"})
        speak(date)
     }
 

    else{
        speak(`this is what i fond ${message}`)
        window.open(`https://www.google.com/search?q= ${message}`)
    }

}