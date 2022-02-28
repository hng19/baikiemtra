// Bài 1 (1 điểm). Viết function truyền vào một mảng các số. Tìm ra số lớn thứ nhì trong mảng các số.
let max2Number = arr => {
    arr.sort(function(a,b) {return a-b})
    if (arr[0] > arr[1]) {
        firstMax = arr[0];
        secondMax = arr[1];
    } else {
        firstMax = arr[1];
        secondMax = arr[0];
    }
    for (let i = 2; i < arr.length; i++) {
        if (arr[i] >= firstMax) {
            secondMax = firstMax;
            firstMax = arr[i];
        } else if (firstMax > arr[i] > secondMax) {
            secondMax = arr[i];
        }
    }
    return secondMax;
}
console.log(max2Number([2, 1, 4, 3]))
// Bài 2 (1 điểm). Viết function truyền vào mảng các chuỗi có độ dài bất kỳ. Kết quả trả về là 1 mảng các chuỗi có độ dài lớn nhất

// // Ví dụ:
// getStringHasMaxLength(['aba', 'aa', 'ad', 'c', 'vcd']) => ['aba', 'vcd'].


function getStringHasMaxLength(arr) {
    let longest = 0;
    let res = [];

    // sử dụng vòng lặp để tìm chuỗi dài nhất
    for(let i = 0; i < arr.length; i++) {
        if(arr[i].length >= longest) {
            longest = arr[i].length;
        }
    }

    // So sánh từng yếu tố trong mảng để xem nó có bằng dài nhất hay không
    // đẩy chuỗi dài nhất vào res
    for(let j = 0; j < arr.length; j++) {
        if(arr[j].length === longest) {
            res.push(arr[j]);
        }
    }
    return res;
}
console.log(getStringHasMaxLength(['aba', 'aa', 'ad', 'c', 'vcd']))


// Bài 3 (1 điểm). Viết function truyền vào một mảng. Lấy một phần tử ngẫu nhiên từ mảng đó

// // Ví dụ:
// getRandomElement([3, 7, 9, 11]) => 3
// getRandomElement([3, 7, 9, 11]) => 9

function getRandomElement(arr) {
    for (i = 0; i < arr.length; i++) {
        //random một giá trị ngẫu nhiên i ứng với vị trí 1 phần tử trong mảng
        return arr[Math.floor(Math.random() * arr.length)]
    }
}
console.log(getRandomElement([3, 7, 9, 11]))

// Bài 4 (1 điểm). Viết function truyền vào 2 mảng số bất kỳ. Lấy ra một mảng chứa các phần tử xuất hiện trong cả hai mảng đó

// // Ví dụ:
// similarity([1, 2, 3], [1, 2, 4]) => [1,2]
// similarity([1, 2, 3], [3, 4, 5]) => [3]

function similarity(arr1, arr2) {
    // Lọc ra các giá trị của arr1 nằm trong arr2
    let newArr = arr1.filter(value => arr2.includes(value))
    return newArr
}
console.log(similarity([1, 2, 3], [1, 2, 4]))
console.log(similarity([1, 2, 3], [3, 4, 5]))
// Bài 5 (2 điểm). Viết function truyền vào 2 tham số:

// Tham số 1: Là 1 chuỗi thời gian (t) có dạng “giờ:phút:giây”
// Tham số 2: Là 1 số x <= 1000
// Kết quả trả về là 1 chuỗi biểu thị thời gian sau x giây kể từ thời điểm t.

// // Ví dụ:
// getTime("9:20:56", 7) => "9:21:3"

// Gợi ý : Hãy quy đổi ra thời gian từ hh:mm:ss ra giây => tính toán => Quy đổi ngược lại từ giây ra hh:mm:ss

// Bài 6 (2 điểm). Cho mảng users như sau:

users = [
    {
        name: "Bùi Công Sơn",
        age: 30,
        isStatus: true
    },
    {
        name: "Nguyễn Thu Hằng",
        age: 27,
        isStatus: false
    },
    {
        name: "Phạm Văn Dũng",
        age: 20,
        isStatus: false
    }
]

// Viết function truyền vào 1 mảng các object user lấy ra những user có age > 25 và isStatus = true
const findUser = users.filter((user) => (user.age) > 25 && ((user.isStatus) == true))// dùng filter lọc ra những user có age>25 và isStatus = true 
console.log(findUser)
// Viết function truyền vào 1 mảng các object user. Hãy sắp xếp mảng users có age tăng dần
const arrangeAge = users.sort((a,b) => a.age-b.age)
console.log(users)
// Bài 7 (2 điểm). Viết function truyền vào 1 mảng các chuỗi. Trả về Object hiển thị xem mỗi phần tử trong mảng xuất hiện bao nhiêu lần

// getCountElement(["one", "two", "three", "one", "one", "three"])

// // Kết quả
// {
//     one: 3,
//     two : 1,
//     three : 2
// }
function getCountElement(arr){
  let res ={}
  for(i=0;i<arr.length;i++){
     if(res[arr[i]]){
        res[arr[i]]=res[arr[i]]+1
         continue
     }
     res[arr[i]]=1
  }
  return res
}
console.log(getCountElement(["one", "two", "three", "one", "one", "three"]))
