import { checkNum, arrAndSet, DateUtil } from "@ziyus/toolkit";

console.log(checkNum("123456"));

console.log(arrAndSet([1, 2, 3], [2, 3]));

let date1 = DateUtil.Dayjs();
let date2 = DateUtil.Dayjs().add(7, "day");

// console.log(" date1 与 date2 相差时间：" , DateUtil.Dayjs.duration(date1.diff(date2)).days());
console.log(" date1 与 date2 相差时间：" , DateUtil.diff(date1,date2).days());
console.log("格式化时间：", DateUtil.format(date2));
