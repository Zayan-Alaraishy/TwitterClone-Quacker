let input = document.querySelector(".input");
let submit = document.querySelector(".btnTweet");
let tweetsdiv = document.querySelector(".all-tweets");
arrayofTweets = []; 
//Add Tweet
submit.onclick = function () {
  if (input.value !== "") {
    createTween(input.value);
    const tweet = {
      author: "Zayan Alaraihsy", 
      TextContent: input.value,
    };
    // Push Task To Array Of tweets
    arrayofTweets.push(tweet);
    // Add Tasks To Page
    console.log(arrayofTweets);
    input.value = ""; // Empty Input Field

  }else{
    alert('please add your quack');
  }
  return false;
};

function createTween(tweenText){
  var newTween =`<div class="tweets">
  <div class="user-pics"><img src="./img/user6.jpg" alt="user3"></div>
  <div class="user-content-box">
    <div class="user-names">
      <hi class="full-name">~Zayan Alaraihsy</hi>
      <p class="user-name">@zayanalaraishy</p>
      <p class="time"> . 58mins</p>
    </div>

    <div class="user-content">
      <p>`+tweenText+`</p>
    </div>

    <div class="content-icons">
      <i class="fas fa-retweet green"> 865</i>
      <i class="like fas fa-star orange">1.6k</i>
    </div>
  </div>
</div>`;

tweetsdiv.innerHTML = newTween +  tweetsdiv.innerHTML;

AddListeners();

}

function AddListeners(){
var btnlike = document.querySelectorAll('.like');

btnlike.forEach(x =>{
  x.addEventListener("click",function(){
    if(!this.classList.contains('liked')){
      this.classList.add('liked');
    }else{
      this.classList.remove('liked');
    }
  });
});

  var btnReTweet= document.querySelectorAll('.fa-retweet');
  btnReTweet.forEach(x =>{
    x.addEventListener("click",function(){
      var tweet = this.closest('.tweets');
        this.classList.add('retweeted');
              createTween(tweet.outerHTML);
      
    });
  });
  }
AddListeners();