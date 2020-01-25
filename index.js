/**
 * TokoTalk OTP 🔐
 * 
 * written by alfianokt for masterkadal.com
 */

const app =  require('polka')()
const axios = require('axios')

app.use(require('cors')())

app.get('/', (req, res) => {
  res.statusCode = 200
  res.end(JSON.stringify({'msg': 'Hello there!'}))
})

app.get('/:phone', async (req, res) => {
  const data = {"value": req.params.phone}

  try {
    const request = await axios({
      url: `https://api.tokotalk.com/v1/shop/${Math.floor(Math.random()*999)}/verifications`,
      method: 'POST',
      headers: {
        'host': 'api.tokotalk.com',
        'user-agent': 'Mozilla/5.0 (Linux; Android 9; Redmi 4A) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.116 Mobile Safari/537.36',
        'sec-fetch-site': 'cross-site',
        'sec-fetch-mode': 'cors',
        'accept-language': 'id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7,ms;q=0.6',
      },
      data
    })
    request.data.ok = true
    res.end(JSON.stringify(request.data))
  } catch (e) {
    res.end(JSON.stringify({'ok': false}))
  }
})

app.listen(3000, err => {
  if (err) throw err
  console.log(`> Running on localhost:3000`)
})