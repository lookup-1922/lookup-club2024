$(document).ready(function () {
    let currentQuestionIndex = 0; // 現在の問題番号を保持する変数

    // 問題と解説の初期表示
    displayQuestion(0); // 最初の問題を表示
    displayQlist();

    // Qlistのクリックイベントの設定
    $(".Qlist").on("click", "li", function () {
        var index = $(this).index(); // クリックされたリストのインデックスを取得
        displayQuestion(index); // クリックされた問題を表示
        currentQuestionIndex = index; // 現在の問題番号を更新
    });

    // 「次の問題へ」ボタンのクリックイベントの設定
    $("#next").click(function () {
        currentQuestionIndex++; // 現在の問題番号をインクリメント
        if (currentQuestionIndex < questions.length) { // 次の問題があるかチェック
            displayQuestion(currentQuestionIndex); // 次の問題を表示
        } else {
            alert("これが最後の問題です。"); // 最後の問題の場合はアラートを表示
            currentQuestionIndex = questions.length - 1; // 現在の問題番号を最後の問題の番号に設定
        }
    });
});

function displayQuestion(index) {
    let questionData = questions[index];
    $(".question").html(questionData.question); // 問題の表示
    $(".answer").html("回答の待機中です。");
    $(".selection").empty(); // 選択肢をクリア
    // 選択肢を表示
    for (let i = 0; i < questionData.choices.length; i++) {
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

// Qlistの表示処理
function displayQlist() {
    $(".Qlist").empty(); // Qlistをクリア
    // 各問題のタイトルをQlistに追加
    for (let i = 0; i < questions.length; i++) {
        $(".Qlist").append("<li>" + "問題" + (i + 1) + "</li>"); // 問題の番号を表示
    }
}