import {imgRender} from "./imgUtil";
import {ImgDto, ImgGroupDto} from "../model/token/imgToken";
import {htmlTmp} from "../../test/utils/cost";
import {writeFile} from "fs";

describe('helloWorld', () => {
    it('Should return greetings', () => {
        let a = `https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fblog%2F202008%2F06%2F20200806001606_wwqyy.thumb.400_0.jpg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1637549239&t=a2569b417858e7c4c1cf9e3895dcf9bf`
        let b = "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic2.zhimg.com%2F50%2Fv2-4175772413506316c621f16b0ee5d65f_hd.jpg&refer=http%3A%2F%2Fpic2.zhimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638015792&t=1938a65bfce4da1c125455becf4049f4"
        let c = "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fedpic%2F12%2F72%2F7d%2F12727d01266da5939e2ad25819dfdb40.jpg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1637998132&t=865ec20f2245623c6a4aebddd6c022d4"

        console.log(a);
        console.log(b);
        console.log(c);

        let imgGroupDto = new ImgGroupDto();
        let imgGroupDto2 = new ImgGroupDto();

        let imgDto = new ImgDto();
        imgDto.imgName = "a.jpg"
        // imgDto.imgInfo = "这是个xx的图片"
        imgDto.imgUrl = a
        imgDto.winPoint=50

        let imgDto2 = new ImgDto();
        imgDto2.imgName = "c.jpg"
        // imgDto2.imgInfo = "这是个xx的图片"
        imgDto2.imgUrl = c
        imgDto2.winPoint=50

        let imgDto3 = new ImgDto();
        imgDto3.imgName = "c.jpg"
        // imgDto3.imgInfo = "这是个xx的图片"
        imgDto3.imgUrl = c
        imgDto3.winPoint=40


        imgGroupDto2.imgDirection = "v"
        imgGroupDto2.imgPos = "center"
        imgGroupDto2.imgList.push(imgDto2)
        imgGroupDto2.imgList.push(imgDto3)


        imgGroupDto.imgList.push(imgDto)
        imgGroupDto.imgList.push(imgGroupDto2)


        let s = imgRender(imgGroupDto, null, null);
        console.log(s);

        let html = htmlTmp.replace('tmp_data', s)
        writeFile('../tmp/img.html', html, function (err) {
            if (err) {
                throw err;
            }
        })


    })
})
