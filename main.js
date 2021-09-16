function changeBG(){

    let arr = [
        './images/bg-image11.jpg',
        './images/bg-image10.jpg',
        './images/bg-image9.jpg',
        './images/bg-image8.jpg',
        './images/bg-image7.jpg',
        './images/bg-image6.jpg',
        './images/bg-image5.jpg',
        './images/bg-image4.jpg',
        './images/bg-image3.jpg',
        './images/bg-image2.jpg',
        './images/bg-image1.jpg'
    ]
    // 지정해도됨 랜덤값 생성
    var r = Math.floor(Math.random() * 11);
    //아이디
    document.getElementById("back").style.backgroundImage = "url(" + arr[r] +")";   
}
//일정시간마다 자동으로 배경 바꾸기
setInterval(changeBG,4000);
