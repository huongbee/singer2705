class Singer{
    constructor(_id, name, link, avatar){
        this._id = _id;
        this.name = name;
        this.link = link;
        this.avatar = avatar;
    }

}
const profileLink = "https://zingmp3.vn/nghe-si/";
const avatarLink = 'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/avatars/';

const arraySinger = [
    new Singer(1, 'Mr Siro', 'Mr-Siro', 'e/1/1/2/e1120261421cfec7513423222b0ca94c.jpg'),
    new Singer(2, 'Hương Tràm', 'Huong-Tram', 'b/f/b/9/bfb9522fe78758e81dfcb4b70d3f8f52.jpg')
]

module.exports = { arraySinger, Singer, profileLink, avatarLink}