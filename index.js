
function GBK(gbk_us) {
  gbk_us = gbk_us || require('./codes');
  var arr_index = 0x8140; //33088;
  return {
    decode(arr) {
      var str = "";
      for (var n = 0, max = arr.length; n < max; n++) {
        var code = arr[n];
        if (code & 0x80) {
          code = gbk_us[(code << 8 | arr[++n]) - arr_index]
        }
        str += String.fromCharCode(code);
      }
      return str;
    },
    encode(str) {
      str += '';
      var gbk = [];
      var wh = '?'.charCodeAt(0);
      for (var i = 0; i < str.length; i++) {
        var charcode = str.charCodeAt(i);
        if (charcode < 0x80) gbk.push(charcode)
        else {
          var gcode = gbk_us.indexOf(charcode);
          if (~gcode) {
            gcode += arr_index;
            gbk.push(0xFF & (gcode >> 8), 0xFF & gcode);
          } else {
            gbk.push(wh);
          }
        }
      }
      return gbk;
    }
  }
};


module.exports = GBK;