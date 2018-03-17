const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

const app = express();
const js = '[{"title":"Dark Side of the Moon","artist":"Pink Floyd","url":"https://www.amazon.co.uk/Dark-Side-Moon-Pink-Floyd/dp/B004ZN9RWK/ref=tmm_acd_swatch_0?_encoding=UTF8&qid=1521302496&sr=8-1","image":"https://images-na.ssl-images-amazon.com/images/I/81aTawcGdmL._SL1500_.jpg","thumbnail_image":"https://upload.wikimedia.org/wikipedia/en/thumb/d/d6/Pink_Floyd_-_all_members.jpg/220px-Pink_Floyd_-_all_members.jpg"},{"title":"Fearless","artist":"Taylor Swift","url":"https://www.amazon.com/Fearless-Enhanced-Taylor-Swift/dp/B001EYGOEM","image":"https://images-na.ssl-images-amazon.com/images/I/51qmhXWZBxL.jpg","thumbnail_image":"https://i.imgur.com/K3KJ3w4h.jpg"},{"title":"Speak Now","artist":"Taylor Swift","url":"https://www.amazon.com/Speak-Now-Taylor-Swift/dp/B003WTE886","image":"https://images-na.ssl-images-amazon.com/images/I/51vlGuX7%2BFL.jpg","thumbnail_image":"https://i.imgur.com/K3KJ3w4h.jpg"},{"title":"Red","artist":"Taylor Swift","url":"https://www.amazon.com/Red-Taylor-Swift/dp/B008XNZMOU","image":"https://images-na.ssl-images-amazon.com/images/I/41j7-7yboXL.jpg","thumbnail_image":"https://i.imgur.com/K3KJ3w4h.jpg"},{"title":"1989","artist":"Taylor Swift","url":"https://www.amazon.com/1989-Taylor-Swift/dp/B00MRHANNI","image":"https://images-na.ssl-images-amazon.com/images/I/717DWgRftmL._SX522_.jpg","thumbnail_image":"https://i.imgur.com/K3KJ3w4h.jpg"}]';


app.get('/albums', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(js);
});

app.listen(PORT,() => console.log(`Listening on ${ PORT }`))

