function OnButtonClick() {

  //入力テキストの反映処理を追加
  getInputBox();
  //プリントしたいエリアの取得
  //  var printArea = document.getElementsByClassName("print-area");
  var printArea = document.getElementsByClassName("print-area");
  //プリント用の要素「#print」を作成し、上で取得したprintAreaをその子要素に入れる。
  $('body').append('<div id="print" class="printBc"></div>');
  $(printArea).clone().appendTo('#print');
  //プリントしたいエリア意外に、非表示のcssが付与されたclassを追加
  $('body > :not(#print)').addClass('print-off');
  window.print();
  //window.print()を実行した後、作成した「#print」と、非表示用のclass「print-off」を削除
  $('#print').remove();
  $('.print-off').removeClass('print-off');
}

function OnButtonClick2() {

  //入力テキストの反映処理を追加
  getInputBox2();
  //プリントしたいエリアの取得
  //  var printArea = document.getElementsByClassName("print-area");
  var printArea = document.getElementsByClassName("print-area");
  //プリント用の要素「#print」を作成し、上で取得したprintAreaをその子要素に入れる。
  $('body').append('<div id="print" class="printBc"></div>');
  $(printArea).clone().appendTo('#print');
  //プリントしたいエリア意外に、非表示のcssが付与されたclassを追加
  $('body > :not(#print)').addClass('print-off');
  window.print();
  //window.print()を実行した後、作成した「#print」と、非表示用のclass「print-off」を削除
  $('#print').remove();
  $('.print-off').removeClass('print-off');
}

window.onload = function () {
  // ページ読み込み時に実行したい処理
  let subForm = document.getElementById("sub-form");
  let subForm2 = document.getElementById("cp-form");

  subForm.style.display = "";
  subForm2.style.display = "none";
}

function buttonClick() {
  let btnHide = document.getElementById("hide");
  let subForm = document.getElementById("sub-form");
  let cpForm = document.getElementById("cp-form");
  //var txtArea = document.getElementById("text_box");
  if (btnHide.checked) {
    subForm.style.display = "none";
    cpForm.style.display = "";

    /*
    txtArea.textContent = "\n \n \
        名前：【名字名前】\n \
        フリガナ：【ミョウジナマエ】\n \
        本籍地：【○○県○○市○○区】\n \
        現住所：【○○県○○市○○区】\n \
        学歴：【平成○○年○○月 ○○大学○○学科 卒業】\n \
        職歴：【平成○○年○○月 株式会社○○ ○○部勤務 現在に至る】\n \
        資格：【○○取得、○○合格】\n \
        趣味：【】\n \
        特技：【】\n \
        宗教：【スパゲッティモンスター教】\n \
        身長：【105】\n \
        体重：【80】\n \
        健康状態：【良好】";
        */

    document.getElementById("text_box").value = "\n \n \
        名前：【名字名前】\n \
        フリガナ：【ミョウジナマエ】\n \
        生年月日：【令和○○年○○月○○日生】\n \
        本籍地：【○○県○○市○○区】\n \
        現住所：【○○県○○市○○区】\n \
        学歴：【平成○○年○○月 ○○大学○○学科 卒業】\n \
        職歴：【平成○○年○○月 株式会社○○ ○○部勤務 現在に至る】\n \
        資格：【○○取得、○○合格】\n \
        趣味：【】\n \
        特技：【】\n \
        宗教：【スパゲッティモンスター教】\n \
        身長：【105】\n \
        体重：【80】\n \
        健康状態：【良好】";

  } else {
    subForm.style.display = "";
    cpForm.style.display = "none";
  }
}

function getInputBox() {
  document.getElementById('01').innerHTML = document.getElementsByName("_name")[0].value;
  document.getElementById('02').innerHTML = document.getElementsByName("_hurigana")[0].value;
  document.getElementById('03').innerHTML = document.getElementsByName("_seinengappi")[0].value;
  document.getElementById('10').innerHTML = document.getElementsByName("_honseki")[0].value;
  document.getElementById('20').innerHTML = document.getElementsByName("_genjusho")[0].value;
  document.getElementById('30').innerHTML = document.getElementsByName("_gakureki")[0].value;
  document.getElementById('40').innerHTML = document.getElementsByName("_syokureki")[0].value;
  document.getElementById('50').innerHTML = document.getElementsByName("_shikaku")[0].value;
  document.getElementById('60').innerHTML = document.getElementsByName("_syumi")[0].value;
  document.getElementById('70').innerHTML = document.getElementsByName("_tokugi")[0].value;
  document.getElementById('80').innerHTML = document.getElementsByName("_syuukyou")[0].value;
  document.getElementById('90').innerHTML = document.getElementsByName("_sintyou")[0].value;
  document.getElementById('100').innerHTML = document.getElementsByName("_taijuu")[0].value;
  document.getElementById('110').innerHTML = document.getElementsByName("_kenkoujoutai")[0].value;
}

function getInputBox2_init() {


}

function getInputBox2() {
  //取得情報の格納
  var sinseisyo = document.getElementById("text_box").value;
  let sinseisyo_array = new Array();
  //各種情報の解析と配列への格納
  /*
  let sinseisyo_array = new Array(5);//要素数5の配列(array)を作成
  for (let x = 0; x < 5; x++) {
    sinseisyo_array[x] = new Array(5); //配列(array)の各要素に対して、要素数5の配列を作成
    for (let y = 0; y < 5; y++) {
      sinseisyo_array[x][y] = 0;//0で初期化
    }
  }*/

  console.log(sinseisyo);
  //申請書メモの解析ループ

  // 区切り文字に「-（ハイフン）」を指定
  var sprit1 = sinseisyo.split('】');
  console.log(sprit1);
  console.log(typeof (sprit1))

  for (ii = 0; ii < (sprit1.length - 1); ii++) {
    //console.log(ii);
    sinseisyo_array[ii] = sprit1[ii].substring(sprit1[ii].indexOf('【') + 1);//削除位置の検索 削除時は0~で実行する
  }
  //#region 
  document.getElementById('01').innerHTML = sinseisyo_array[0];
  document.getElementById('02').innerHTML = sinseisyo_array[1];
  document.getElementById('03').innerHTML = sinseisyo_array[2];
  document.getElementById('10').innerHTML = sinseisyo_array[3];
  document.getElementById('20').innerHTML = sinseisyo_array[4];
  document.getElementById('30').innerHTML = sinseisyo_array[5];
  document.getElementById('40').innerHTML = sinseisyo_array[6];
  document.getElementById('50').innerHTML = sinseisyo_array[7];
  document.getElementById('60').innerHTML = sinseisyo_array[8];
  document.getElementById('70').innerHTML = sinseisyo_array[9];
  document.getElementById('80').innerHTML = sinseisyo_array[10];
  document.getElementById('90').innerHTML = sinseisyo_array[11];
  document.getElementById('100').innerHTML = sinseisyo_array[12];
  document.getElementById('110').innerHTML = sinseisyo_array[13];
  //#endregion

  console.log(sinseisyo_array);

}
