// Vazifa:
// var people = ["Greg", "Mary", "Devon", "James"] massivi berilgan
// 1. "Greg" ni massivdan olib tashlang
// 2. "James" ni  massivdan olib tashlang
// 3. "Matt" ni massivning boshiga qo'shing
// 4. O'z ismingizni massiv oxiriga qo'shing
// 5. slice() orqali massivdan nusxa oling, nusxada yo "Mary", yo "Matt" ismi bo'lmasligi kerak
// 6. splice() orqali massivdan "Devon" ni olib tashlang va uning o'rniga "Elizabeth" va "Artie" ni qo'shing

var qwer = ['Greg', 'Mary', 'Devon', 'James'];
console.log(qwer);
qwer.shift(['Greg'])
qwer.unshift(['Matt'])
qwer.pop(['James'])
// qwer.push(['Matt'])
qwer.push(['Elizabeth', 'Artie'])
qwer.push(['Sherjaxon'])
console.log(qwer.splice(1,1))
console.log([qwer.slice(qwer)])
console.log(qwer.splice(1,1))
