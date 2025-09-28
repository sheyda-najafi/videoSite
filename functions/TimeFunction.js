const TimeFunction = (createdAt, t) => {
  var DateDiff = {
    inSeconds: function (d1, d2) {
      var t2 = d2.getTime();
      var t1 = d1.getTime();

      return Math.abs(parseInt((t2 - t1) / 1000));
    },

    inMinutes: function (d1, d2) {
      var t2 = d2.getTime();
      var t1 = d1.getTime();

      return Math.abs(parseInt((t2 - t1) / 60000));
    },

    inHours: function (d1, d2) {
      var t2 = d2.getTime();
      var t1 = d1.getTime();

      return Math.abs(parseInt((t2 - t1) / 3600000));
    },

    inDays: function (d1, d2) {
      var t2 = d2.getTime();
      var t1 = d1.getTime();

      return Math.abs(parseInt((t2 - t1) / (24 * 3600 * 1000)));
    },

    inWeeks: function (d1, d2) {
      var t2 = d2.getTime();
      var t1 = d1.getTime();

      return Math.abs(parseInt((t2 - t1) / (24 * 3600 * 1000 * 7)));
    },

    inMonths: function (d1, d2) {
      // var d1Y = d1.getFullYear();
      // var d2Y = d2.getFullYear();
      // var d1M = d1.getMonth();
      // var d2M = d2.getMonth();

      // console.log("tttttt",d1Y,d2Y,d1M,d2M)
      // return Math.abs((d2M + 12 * d2Y) - (d1M + 12 * d1Y));

      // var months;
      // months = (d2.getFullYear() - d1.getFullYear()) * 12;
      // months -= d1.getMonth();
      // months += d2.getMonth();
      // return months <= 0 ? 0 : months;

      return d2.getMonth() - d1.getMonth() + 12 * (d2.getFullYear() - d1.getFullYear());
    },

    inYears: function (d1, d2) {
      return Math.abs(d2.getFullYear() - d1.getFullYear());
    },
  };

  var d1 = new Date(createdAt);
  var d2 = new Date();
  console.log('time====', d1, d2);
  // Get the time zone offset of d1 and apply it to d2
  // var timezoneOffset = d1.getTimezoneOffset();
  // d2.setMinutes(d2.getMinutes() + timezoneOffset);
  // Check if d1 is greater than d2
  var dateOutput = '';
  if (d1 > d2) {
    dateOutput = t(`fewsecondsago`);
    // // Swap d1 and d2
    // var temp = d1;
    // d1 = d2;
    // d2 = temp;
  } else {
    var timeLaps = DateDiff.inSeconds(d1, d2);

    if (timeLaps < 60) {
      dateOutput = timeLaps + t(`secondsago`);
    } else {
      timeLaps = DateDiff.inMinutes(d1, d2);
      if (timeLaps < 60) {
        dateOutput = timeLaps + t(`minutesago`);
      } else {
        timeLaps = DateDiff.inHours(d1, d2);
        if (timeLaps < 24) {
          dateOutput = timeLaps + t(`hoursago`);
        } else {
          timeLaps = DateDiff.inDays(d1, d2);
          if (timeLaps < 7) {
            dateOutput = timeLaps + t(`daysago`);
          } else {
            timeLaps = DateDiff.inWeeks(d1, d2);
            if (timeLaps < 4) {
              dateOutput = timeLaps + t(`weeksago`);
            } else {
              timeLaps = DateDiff.inMonths(d1, d2);
              if (timeLaps < 12) {
                dateOutput = timeLaps + t(`monthsago`);
              } else {
                timeLaps = DateDiff.inYears(d1, d2);
                dateOutput = timeLaps + t(`yearsago`);
              }
            }
          }
        }
      }
    }
  }
  return dateOutput;
};

export default TimeFunction;
// const TimeFunction=(createdAt)=>{
// var DateDiff = {

//     inSeconds: function(d1, d2) {
//           var t2 = d2.getTime();
//           var t1 = d1.getTime();

//           return parseInt((t2-t1)/1000);
//       },

//     inMinutes: function(d1, d2) {
//           var t2 = d2.getTime();
//           var t1 = d1.getTime();

//           return parseInt((t2-t1)/60000);
//       },

//     inHours: function(d1, d2) {
//           var t2 = d2.getTime();
//           var t1 = d1.getTime();

//           return parseInt((t2-t1)/3600000);
//       },

//       inDays: function(d1, d2) {
//           var t2 = d2.getTime();
//           var t1 = d1.getTime();

//           return parseInt((t2-t1)/(24*3600*1000));
//       },

//       inWeeks: function(d1, d2) {
//           var t2 = d2.getTime();
//           var t1 = d1.getTime();

//           return parseInt((t2-t1)/(24*3600*1000*7));
//       },

//       inMonths: function(d1, d2) {
//           var d1Y = d1.getFullYear();
//           var d2Y = d2.getFullYear();
//           var d1M = d1.getMonth();
//           var d2M = d2.getMonth();

//           return (d2M+12*d2Y)-(d1M+12*d1Y);
//       },

//       inYears: function(d1, d2) {
//           return d2.getFullYear()-d1.getFullYear();
//       }
//   }

//     //   var dString = "May, 20, 1984"; //will also get (Y-m-d H:i:s)

//       var d1 = new Date(createdAt)
//     //   .toLocaleDateString("fa-IR", {
//     //     year: "numeric",
//     //     month: "numeric",
//     //     day: "numeric",
//     // });
//       var d2 = new Date()
//     //   .toLocaleDateString("fa-IR", {
//     //     year: "numeric",
//     //     month: "numeric",
//     //     day: "numeric",
//     // });

//       var timeLaps = DateDiff.inSeconds(d1, d2);
//       var dateOutput = "";

//       if (timeLaps<60)
//       {
//         dateOutput = timeLaps+" seconds";
//       }
//       else
//       {
//         timeLaps = DateDiff.inMinutes(d1, d2);
//         if (timeLaps<60)
//         {
//           dateOutput = timeLaps+" minutes";
//         }
//         else
//         {
//           timeLaps = DateDiff.inHours(d1, d2);
//           if (timeLaps<24)
//           {
//             dateOutput = timeLaps+" hours";
//           }
//           else
//           {
//               timeLaps = DateDiff.inDays(d1, d2);
//               if (timeLaps<7)
//               {
//                 dateOutput = timeLaps+" days";
//               }
//               else
//               {
//                   timeLaps = DateDiff.inWeeks(d1, d2);
//                   if (timeLaps<4)
//                   {
//                     dateOutput = timeLaps+" weeks";
//                   }
//                   else
//                   {
//                       timeLaps = DateDiff.inMonths(d1, d2);
//                       if (timeLaps<12)
//                       {
//                         dateOutput = timeLaps+" months";
//                       }
//                       else
//                       {
//                         timeLaps = DateDiff.inYears(d1, d2);
//                         dateOutput = timeLaps+" years";
//                       }
//                   }
//               }
//           }
//         }
//       }
//       return dateOutput
// }
//       export default TimeFunction;
//   alert (dateOutput);

// import FormatTime from "./FormatTime";

// const TimeFunction = (dString) => {
//     let DateDiff = {

//         inSeconds: function (d1, d2) {
//             let t2 = d2.getTime();
//             let t1 = d1.getTime();

//             return parseInt((t2 - t1) / 1000);
//         },

//         inMinutes: function (d1, d2) {
//             let t2 = d2.getTime();
//             let t1 = d1.getTime();

//             return parseInt((t2 - t1) / 60000);
//         },

//         inHours: function (d1, d2) {
//             let t2 = d2.getTime();
//             let t1 = d1.getTime();

//             return parseInt((t2 - t1) / 3600000);
//         },

//         inDays: function (d1, d2) {
//             let t2 = d2.getTime();
//             let t1 = d1.getTime();

//             return parseInt((t2 - t1) / (24 * 3600 * 1000));
//         },

//         inWeeks: function (d1, d2) {
//             let t2 = d2.getTime();
//             let t1 = d1.getTime();

//             return parseInt((t2 - t1) / (24 * 3600 * 1000 * 7));
//         },

//         inMonths: function (d1, d2) {
//             let d1Y = d1.getFullYear();
//             let d2Y = d2.getFullYear();
//             let d1M = d1.getMonth();
//             let d2M = d2.getMonth();

//             return (d2M + 12 * d2Y) - (d1M + 12 * d1Y);
//         },

//         inYears: function (d1, d2) {
//             return d2.getFullYear() - d1.getFullYear();
//         }
//     }

//     // let dString = "May, 20, 1984"; //will also get (Y-m-d H:i:s)

//     let d1 = new Date(dString);
//     let d2 = new Date();

//     // console.log("time===", d1, d2)
//     let timeLaps = DateDiff.inSeconds(d1, d2);
//     let dateOutput = "";

//     // if (timeLaps < 0 && timeLaps < 60) {
//     //     dateOutput = 0 + " ثانیه پیش";
//     // }
//     if (timeLaps < 60) {
//         dateOutput = timeLaps + " ثانیه پیش";
//     }
//     else {
//         timeLaps = DateDiff.inMinutes(d1, d2);
//         if (timeLaps < 60) {
//             dateOutput = timeLaps + " دقیقه پیش";
//         }
//         else {
//             timeLaps = DateDiff.inHours(d1, d2);
//             if (timeLaps < 24) {
//                 dateOutput = timeLaps + " ساعت پیش";
//             }
//             else {
//                 timeLaps = DateDiff.inDays(d1, d2);
//                 if (timeLaps < 7) {
//                     dateOutput = timeLaps + " روز پیش";
//                 }
//                 else {
//                     timeLaps = DateDiff.inWeeks(d1, d2);
//                     if (timeLaps < 4) {
//                         dateOutput = timeLaps + " هفته پیش";
//                     }
//                     else {
//                         timeLaps = DateDiff.inMonths(d1, d2);
//                         if (timeLaps < 12) {
//                             dateOutput = timeLaps + " ماه پیش";
//                         }
//                         else {
//                             timeLaps = DateDiff.inYears(d1, d2);
//                             dateOutput = timeLaps + " سال پیش";
//                         }
//                     }
//                 }
//             }
//         }
//     }
//     return dateOutput
// };
// export default TimeFunction;
// alert(dateOutput);

// import FormatTime from "./FormatTime";

// const TimeFunction = (dString) => {
//     let DateDiff = {

//         inSeconds: function (d1, d2) {
//             let t2 = d2.getTime();
//             let t1 = d1.getTime();

//             return parseInt((t2 - t1) / 1000);
//         },

//         inMinutes: function (d1, d2) {
//             let t2 = d2.getTime();
//             let t1 = d1.getTime();

//             return parseInt((t2 - t1) / 60000);
//         },

//         inHours: function (d1, d2) {
//             let t2 = d2.getTime();
//             let t1 = d1.getTime();

//             return parseInt((t2 - t1) / 3600000);
//         },

//         inDays: function (d1, d2) {
//             let t2 = d2.getTime();
//             let t1 = d1.getTime();

//             return parseInt((t2 - t1) / (24 * 3600 * 1000));
//         },

//         inWeeks: function (d1, d2) {
//             let t2 = d2.getTime();
//             let t1 = d1.getTime();

//             return parseInt((t2 - t1) / (24 * 3600 * 1000 * 7));
//         },

//         inMonths: function (d1, d2) {
//             let d1Y = d1.getFullYear();
//             let d2Y = d2.getFullYear();
//             let d1M = d1.getMonth();
//             let d2M = d2.getMonth();

//             return (d2M + 12 * d2Y) - (d1M + 12 * d1Y);
//         },

//         inYears: function (d1, d2) {
//             return d2.getFullYear() - d1.getFullYear();
//         }
//     }

// export default function TimeFunction(createdAt)
// {
//     let laterDate=new Date()
//     let earlierDate= new Date(createdAt)
//     console.log("laterdate==", laterDate.getTime(), earlierDate.getTime())
//     var oDiff = {days:null,hours:null,minutes:null,seconds:null};

//     //  Calculate Differences
//     //  -------------------------------------------------------------------  //
//     var nTotalDiff = laterDate?.getTime() - earlierDate.getTime();

//     oDiff.days = Math.floor(nTotalDiff / 1000 / 60 / 60 / 24);
//     nTotalDiff -= oDiff.days * 1000 * 60 * 60 * 24;

//     oDiff.hours = Math.floor(nTotalDiff / 1000 / 60 / 60);
//     nTotalDiff -= oDiff.hours * 1000 * 60 * 60;

//     oDiff.minutes = Math.floor(nTotalDiff / 1000 / 60);
//     nTotalDiff -= oDiff.minutes * 1000 * 60;

//     oDiff.seconds = Math.floor(nTotalDiff / 1000);
//     //  -------------------------------------------------------------------  //

//     //  Format Duration
//     //  -------------------------------------------------------------------  //
//     //  Format Hours
//     console.log("odiff",oDiff)
//     var hourtext = '00';
//     if (oDiff.days > 0){ hourtext = String(oDiff.days);
//         return hourtext + 'days ago'
//     }
//     if (hourtext.length == 1){
//         hourtext = '0' + hourtext
//     return hourtext + 'hours ago'
//     };

//     //  Format Minutes
//     var mintext = '00';
//     if (oDiff.minutes > 0){ mintext = String(oDiff.minutes); return mintext + 'minutes ago' }
//     if (mintext.length == 1) { mintext = '0' + mintext ; return mintext + 'minutes ago'};

//     //  Format Seconds
//     var sectext = '00';
//     if (oDiff.seconds > 0) { sectext = String(oDiff.seconds);; return sectext + 'minutes ago' }
//     if (sectext.length == 1) { sectext = '0' + sectext; return sectext + 'minutes ago' };

//     //  Set Duration
//     // var sDuration = hourtext + ':' + mintext + ':' + sectext;
//     // oDiff.duration = sDuration;
//     //  -------------------------------------------------------------------  //

//     return sDuration;
// }

//     // let dString = "May, 20, 1984"; //will also get (Y-m-d H:i:s)

//     let d1 = new Date(dString);
//     let d2 = new Date();

//     // console.log("time===", d1, d2)
//     let timeLaps = DateDiff.inSeconds(d1, d2);
//     let dateOutput = "";

//     // if (timeLaps < 0 && timeLaps < 60) {
//     //     dateOutput = 0 + " ثانیه پیش";
//     // }
//     console.log("mmmmmm",timeLaps)

//     if (timeLaps < 60) {
//         // dateOutput = timeLaps + " ثانیه پیش";
//         dateOutput =   "  چند ثانیه پیش";

//     }
//     else {
//         timeLaps = DateDiff.inMinutes(d1, d2);
//         if (timeLaps < 60) {
//             dateOutput = timeLaps + " دقیقه پیش";
//         }
//         else {
//             timeLaps = DateDiff.inHours(d1, d2);
//             if (timeLaps < 24) {
//                 dateOutput = timeLaps + " ساعت پیش";
//             }
//             else {
//                 timeLaps = DateDiff.inDays(d1, d2);
//                 if (timeLaps < 7) {
//                     dateOutput = timeLaps + " روز پیش";
//                 }
//                 else {
//                     timeLaps = DateDiff.inWeeks(d1, d2);
//                     if (timeLaps < 4) {
//                         dateOutput = timeLaps + " هفته پیش";
//                     }
//                     else {
//                         timeLaps = DateDiff.inMonths(d1, d2);
//                         if (timeLaps < 12) {
//                             dateOutput = timeLaps + " ماه پیش";
//                         }
//                         else {
//                             timeLaps = DateDiff.inYears(d1, d2);
//                             dateOutput = timeLaps + " سال پیش";
//                         }
//                     }
//                 }
//             }
//         }
//     }
//     return dateOutput
// };
// export default TimeFunction;

// alert(dateOutput);
// import FormatTime from "./FormatTime";

// const TimeFunction = (dString) => {
//     let DateDiff = {

//         inSeconds: function (d1, d2) {
//             let t2 = d2.getTime();
//             let t1 = d1.getTime();

//             return Math.abs(parseInt((t2 - t1) / 1000));
//         },

//         inMinutes: function (d1, d2) {
//             let t2 = d2.getTime();
//             let t1 = d1.getTime();

//             return parseInt((t2 - t1) / 60000);
//         },

//         inHours: function (d1, d2) {
//             let t2 = d2.getTime();
//             let t1 = d1.getTime();

//             return parseInt((t2 - t1) / 3600000);
//         },

//         inDays: function (d1, d2) {
//             let t2 = d2.getTime();
//             let t1 = d1.getTime();

//             return parseInt((t2 - t1) / (24 * 3600 * 1000));
//         },

//         inWeeks: function (d1, d2) {
//             let t2 = d2.getTime();
//             let t1 = d1.getTime();

//             return parseInt((t2 - t1) / (24 * 3600 * 1000 * 7));
//         },

//         inMonths: function (d1, d2) {
//             let d1Y = d1.getFullYear();
//             let d2Y = d2.getFullYear();
//             let d1M = d1.getMonth();
//             let d2M = d2.getMonth();

//             return (d2M + 12 * d2Y) - (d1M + 12 * d1Y);
//         },

//         inYears: function (d1, d2) {
//             return d2.getFullYear() - d1.getFullYear();
//         }
//     }

//     // let dString = "May, 20, 1984"; //will also get (Y-m-d H:i:s)

//     let d1 = new Date(dString);
//     let d2 = new Date();

//     // console.log("time===", d1, d2)
//     let timeLaps = DateDiff.inSeconds(d1, d2);
//     let dateOutput = "";

//     // if (timeLaps < 0 && timeLaps < 60) {
//     //     dateOutput = 0 + " ثانیه پیش";
//     // }
//     if (timeLaps < 60) {
//         dateOutput = timeLaps + " ثانیه پیش";
//     }
//     else {
//         timeLaps = DateDiff.inMinutes(d1, d2);
//         if (timeLaps < 60) {
//             dateOutput = timeLaps + " دقیقه پیش";
//         }
//         else {
//             timeLaps = DateDiff.inHours(d1, d2);
//             if (timeLaps < 24) {
//                 dateOutput = timeLaps + " ساعت پیش";
//             }
//             else {
//                 timeLaps = DateDiff.inDays(d1, d2);
//                 if (timeLaps < 7) {
//                     dateOutput = timeLaps + " روز پیش";
//                 }
//                 else {
//                     timeLaps = DateDiff.inWeeks(d1, d2);
//                     if (timeLaps < 4) {
//                         dateOutput = timeLaps + " هفته پیش";
//                     }
//                     else {
//                         timeLaps = DateDiff.inMonths(d1, d2);
//                         if (timeLaps < 12) {
//                             dateOutput = timeLaps + " ماه پیش";
//                         }
//                         else {
//                             timeLaps = DateDiff.inYears(d1, d2);
//                             dateOutput = timeLaps + " سال پیش";
//                         }
//                     }
//                 }
//             }
//         }
//     }
//     return dateOutput
// };
// export default TimeFunction;
// // alert(dateOutput);
