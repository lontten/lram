import {imgRender} from "./imgUtil";
import {ImgDto, ImgGroupDto} from "../model/token/imgToken";
import {htmlTmp} from "../../test/utils/cost";
import {writeFile} from "fs";
import {test} from 'vitest'

test('helloWorld', () => {
    let a = `https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fblog%2F202008%2F06%2F20200806001606_wwqyy.thumb.400_0.jpg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1637549239&t=a2569b417858e7c4c1cf9e3895dcf9bf`
    let b = a
    let c =a

    console.log(a);
    console.log(b);
    console.log(c);

    let imgGroupDto = new ImgGroupDto();
    let imgGroupDto2 = new ImgGroupDto();

    let imgDto = new ImgDto();
    imgDto.imgName = "a.jpg"
    // imgDto.imgInfo = "这是个xx的图片"
    imgDto.imgUrl = a
    imgDto.winPoint = 50

    let imgDto2 = new ImgDto();
    imgDto2.imgName = "c.jpg"
    // imgDto2.imgInfo = "这是个xx的图片"
    imgDto2.imgUrl = c
    imgDto2.winPoint = 50

    let imgDto3 = new ImgDto();
    imgDto3.imgName = "c.jpg"
    // imgDto3.imgInfo = "这是个xx的图片"
    imgDto3.imgUrl = c
    imgDto3.winPoint = 40


    imgGroupDto2.imgDirection = "v"
    imgGroupDto2.imgPos = "center"
    imgGroupDto2.imgList.push(imgDto2)
    imgGroupDto2.imgList.push(imgDto3)


    imgGroupDto.imgList.push(imgDto)
    imgGroupDto.imgList.push(imgGroupDto2)


    let s = imgRender(imgGroupDto, null, null);
    console.log(s);

    let html = htmlTmp.replace('tmp_data', s)
    writeFile('./tmp/img.html', html, function (err) {
        if (err) {
            throw err;
        }
    })


})
