var random_number;
var win = 0;
var lost = 0;
var totalScore = 0;


var resetAndStart = function () {

    $(".crystals").empty();

    var images = [
        'http://chittagongit.com/images/crystal-icon/crystal-icon-28.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN0ocN556eTfOn86pqfCdtCLLT_RlYg8WB4iTpMtKWz7DmWw1H',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNsWExt33z3i3qac56YZoEDO3_oWe0XulQ15YG6lA_3_NbXAF_NQ',
        'http://chittagongit.com/images/crystal-icon/crystal-icon-28.jpg'
    ]

    


    random_number = Math.floor(Math.random() * 80) + 40;


    $("#randomNumber").html('Secret Number:' + random_number);

    for (var i = 0; i < 4; i++) {

        var random = Math.floor(Math.random() * 11) + 1;

        var crystal = $("<div>");
        crystal.attr({
            "class": 'crystal',
            "data-random": random
        });

        crystal.css({
            "background-image": "url('" + images[i] + "')",
            "baqckground-size": "cover",

        });

        $(".crystals").append(crystal);
    }

    $("#totalScore").html("Total Score:" + totalScore);
}

resetAndStart();

$(document).on('click', ".crystal", function () {

    var num = parseInt($(this).attr('data-random'));

    totalScore += num;

    $("#totalScore").html("Total score: " + totalScore);

    console.log(totalScore);

    if (totalScore > random_number) {

        lost++;

        $("#lost").html("You lost: " + lost);

        totalScore = 0;
        resetAndStart();

    } else if (totalScore === random_number) {

        win++;

        $("#win").html("You win: " + win);
        totalScore = 0;
        resetAndStart();

    }
});


function starMaker(n) {
    var star = document.createElement("div");
    star.className = "star";
    star.textContent = "★";
    for (var i = 0; i < n; i++) {
        starSet(star);
    }
}

//星のセッティングをする関数。
function starSet(clone) {
    var starClone = clone.cloneNode(true);
    var starStyle = starClone.style;

    //星の位置（left）、アニメーションの遅延時間（animation-delay）、サイズ（font-size）をランダムで指定
    starStyle.left = 100 * Math.random() + "%";
    starStyle.animationDelay = 8 * Math.random() + "s";
    starStyle.fontSize = ~~(20 * Math.random() + 20) + "px";
    document.body.appendChild(starClone);

    //星一つのアニメーションが終わったら新しい星を生成
    starClone.addEventListener("animationend", function () {
        this.parentNode.removeChild(this);
        var star = document.createElement("div");
        star.className = "star";
        star.textContent = "⋆";
        starSet(star);
    }, false)
}

// //使用例。星を50個ふらせます。
starMaker(30)

