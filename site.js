// Delay loading any function until the html dom has loaded. All functions are
// defined in this top level function to ensure private scope.
jQuery(document).ready(function () {

  // Installs error handling.
  jQuery.ajaxSetup({
    error: function (resp, e) {
      if (resp.status == 0) {
        alert('You are offline!!\n Please Check Your Network.');
      } else if (resp.status == 404) {
        alert('Requested URL not found.');
      } else if (resp.status == 500) {
        alert('Internel Server Error:\n\t' + resp.responseText);
      } else if (e == 'parsererror') {
        alert('Error.\nParsing JSON Request failed.');
      } else if (e == 'timeout') {
        alert('Request timeout.');
      } else {
        alert('Unknown Error.\n' + resp.responseText);
      }
    }
  });  // error:function()


  var generate_btn = jQuery('#generate_btn');
  var sample_1_btn = jQuery('#sample_1_btn');
  var sample_2_btn = jQuery('#sample_2_btn');
  var sample_3_btn = jQuery('#sample_3_btn');
  var sample_4_btn = jQuery('#sample_4_btn');
  var sample_5_btn = jQuery('#sample_5_btn');

  var svg_div = jQuery('#graphviz_svg_div');
  var graphviz_data_textarea = jQuery('#graphviz_data');

  function InsertGraphvizText(text) {
    graphviz_data_textarea.val(text);
  }


  function UpdateGraphviz() {
    svg_div.html("");
    var data = graphviz_data_textarea.val();
    // Generate the Visualization of the Graph into "svg".
    var svg = Viz(data, "svg");
    svg_div.html("<hr>" + svg);
    let texts = svg_div[0].getElementsByTagName('text');
    [...texts].forEach(t => {
      t.innerHTML = replaces(t.innerHTML) || t.innerHTML;
    })
  }
  function replaces(s) {
    let arr = [

      ["PLAY_PL_PLAY_PL_PLAY_PL_10", "夜因 死亡"],
      ["PLAY_PL_PLAY_PL_PLAY_PL_11", "夜因 曲后碑文"],
      ["PLAY_PL_PLAY_PL_PLAY_PL_12", "焰"],
      ["PLAY_PL_PLAY_PL_PLAY_PL_13", "流产"],
      ["PLAY_PL_PLAY_PL_PLAY_PL_14", "焰 曲后碑文"],
      ["PLAY_PL_PLAY_PL_PLAY_PL_15", "焰 曲后碑文 左"],
      ["PLAY_PL_PLAY_PL_PLAY_PL_16", "焰 曲后碑文 右"],
      ["PLAY_PL_PLAY_PL_PLAY_PL_17", "流产 曲后碑文"],
      ["PLAY_PL_PLAY_PL_PLAY_PL_18", "流产 曲后碑文 左"],
      ["PLAY_PL_PLAY_PL_PLAY_PL_19", "流产 曲后碑文 右"],
      ["PLAY_PL_PLAY_PL_PLAY_PL_23", "少女的记忆"],
      ["PLAY_PL_PLAY_PL_PLAY_PL_24", "少年的记忆"],
      ["PLAY_PL_PLAY_PL_PLAY_PL_28", "少女曲"],
      ["PLAY_PL_PLAY_PL_PLAY_PL_29", "少年曲"],
      ["PLAY_PL_PLAY_PL_PLAY_PL_30", "结末1"],
      ["PLAY_PL_PLAY_PL_PLAY_PL_31", "结末2"],
      ["PLAY_PL_PLAY_PL_PLAY_PL_32", "结末3"],
      ["PLAY_PL_PLAY_PL_PLAY_PL_33", "结末4"],
      ["PLAY_PL_PLAY_PL_PLAY_PL_34", "恋爱"],
      ["PLAY_PL_PLAY_PL_PLAY_PL_35", "恋爱 死亡"],
      ["PLAY_PL_PLAY_PL_PLAY_PL_36", "摩托"],
      ["PLAY_PL_PLAY_PL_PLAY_PL_37", "摩托 死亡"],
      ["PLAY_PL_PLAY_PL_PLAY_PL_38", "恋爱 曲后碑文"],
      ["PLAY_PL_PLAY_PL_PLAY_PL_39", "恋爱 曲后碑文 左"],
      ["PLAY_PL_PLAY_PL_PLAY_PL_40", "恋爱 曲后碑文 右"],
      ["PLAY_PL_PLAY_PL_PLAY_PL_41", "摩托 曲后碑文"],
      ["PLAY_PL_PLAY_PL_PLAY_PL_42", "摩托 曲后碑文 左"],
      ["PLAY_PL_PLAY_PL_PLAY_PL_43", "摩托 曲后碑文 右"],
      ["PLAY_PL_PLAY_PL_PLAY_PL_44", "ending"],
      ["PLAY_PL_PLAY_PL_PLAY_PL_45", "夜因 曲后碑文 左"],
      ["PLAY_PL_PLAY_PL_PLAY_PL_46", "夜因 曲后碑文 右"],
      ["PLAY_PL_PLAY_PL_PLAY_PL_47", "title 不带前面动画"],
      ["PLAY_PL_PLAY_PL_PLAY_PL_48", "夜因 曲后碑文 循环"],
      ["PLAY_PL_PLAY_PL_PLAY_PL_49", "焰 曲后碑文 循环"],
      ["PLAY_PL_PLAY_PL_PLAY_PL_50", "流产 曲后碑文 循环"],
      ["PLAY_PL_PLAY_PL_PLAY_PL_51", "恋爱 曲后碑文 循环"],
      ["PLAY_PL_PLAY_PL_PLAY_PL_52", "摩托 曲后碑文 循环"],
      ["PLAY_PL_PLAY_PL_PLAY_PL_0", "ponycanion"],
      ["PLAY_PL_PLAY_PL_PLAY_PL_1", "title"],
      ["PLAY_PL_PLAY_PL_PLAY_PL_2", "4秒切换动画"],
      ["PLAY_PL_PLAY_PL_PLAY_PL_3", "星空"],
      ["PLAY_PL_PLAY_PL_PLAY_PL_4", "星空 死亡"],
      ["PLAY_PL_PLAY_PL_PLAY_PL_5", "神社"],
      ["PLAY_PL_PLAY_PL_PLAY_PL_9", "夜因"],
      ["random 1 of 4", "4选1"],
      ["left", "左"],
      ["right", "右"],
      ["nop", "30分钟无操作"],
      ["line", "路线"],
      ["ema", "绘马BD流程图"],
      ["donot", "不参拜"],
      ["do", "参拜"],
    ]
    for (const [x, y] of arr) {
      s = s.replace(x, y)
    }
    return s
  }
  // Startup function: call UpdateGraphviz
  jQuery(function () {
    // The buttons are disabled, enable them now that this script
    // has loaded.
    generate_btn.removeAttr("disabled")
      .text("Generate Graph!");

    sample_1_btn.removeAttr("disabled");
    sample_2_btn.removeAttr("disabled");
    sample_3_btn.removeAttr("disabled");
    sample_4_btn.removeAttr("disabled");
    sample_5_btn.removeAttr("disabled");
  });

  // Bind actions to form buttons.
  generate_btn.click(UpdateGraphviz);

  sample_1_btn.click(function () {
    InsertGraphvizText(jQuery("#sample1_text").html().trim());
  });

  sample_2_btn.click(function () {
    InsertGraphvizText(jQuery("#sample2_text").html().trim());
  });

  sample_3_btn.click(function () {
    InsertGraphvizText(jQuery("#sample3_text").html().trim());
  });

  sample_4_btn.click(function () {
    InsertGraphvizText(jQuery("#sample4_text").html().trim());
  });

  sample_5_btn.click(function () {
    InsertGraphvizText(jQuery("#sample5_text").html().trim());
  });

});
