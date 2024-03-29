$(document).ready(function () {
    // 問題と解説の初期表示
    displayQuestion(0); // 最初の問題を表示

    // Qlistのクリックイベントの設定
    $(".Qlist").on("click", "li", function () {
        var index = $(this).index(); // クリックされたリストのインデックスを取得
        displayQuestion(index); // クリックされた問題を表示
    });

    // 「次の問題へ」ボタンのクリックイベントの設定
    $(".command button").click(function () {
        // ここに次の問題への処理を記述
        // 例えば、現在の問題番号を取得して、次の問題の番号を計算し、それを引数としてdisplayQuestion関数を呼び出す
    });
});

function displayQuestion(index) {
    let questionData = questions[index];
    $(".question").html(questionData.question); // 問題の表示
    $(".selection").empty(); // 選択肢をクリア
    // 選択肢を表示
    for (var i = 0; i < questionData.choices.length; i++) {
        $(".selection").append("<p><button class=\"choice\">" + questionData.choices[i] + "</button></p>");
    }
    // 選択肢のボタンがクリックされた時の処理
    $(".choice").click(function () {
        let selectedAnswer = $(".choice").index(this); // 選択された選択肢のインデックス
        if (selectedAnswer === questionData.correctAnswer) {
            $(".answer").html("正解(OK)<br>" + questionData.explanation); // 正解の場合の表示
        } else {
            $(".answer").html("不正解(NG)<br>" + questionData.explanation); // 不正解の場合の表示
        }
    });
}
