let inp = document.querySelectorAll('.email')
let btn = document.querySelector('.btn1')

btn.onclick = () => {
  let inputValueOne = inp[0].value
  let inputValueTwo = inp[1].value
  let obj = { name: inputValueOne, lastname: inputValueTwo }

  fetch('http://localhost:3000/data', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(obj)
  }).then(res => {
    res.status === 201 ? alert('Bobur mezza') : alert('xato')
    inp[0].value = ''
    inp[1].value = ''
  })
}