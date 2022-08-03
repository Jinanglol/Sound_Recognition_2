function start_sound(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/F5hJOvpfr/model.json", modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}