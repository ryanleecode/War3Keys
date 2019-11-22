import cheerio from 'cheerio';
import axios from 'axios';
import url from 'url';
import { createWriteStream } from 'fs';

export async function scrapeReforgedIcons(fileName: string) {
  const resp = await axios.get(
    'https://wow.gamepedia.com/Wowpedia:Warcraft_III_Reforged_icons/Icon_list',
  );
  const $ = cheerio.load(resp.data);
  const galleryBoxes = $('.mw-parser-output a');

  const imageURLs = galleryBoxes
    .toArray()
    .map((element) =>
      url.parse(`https://wow.gamepedia.com${element.attribs['href']}`),
    );
  imageURLs.push(
    url.parse('https://wow.gamepedia.com/File:BTNHealingSpray-Reforged.png'),
  );

  const fullImageUrls: { fileName: string; imageURL: string }[] = [];

  for (const imagePageURL of imageURLs) {
    const imgPageResp = await axios.get(imagePageURL.href);
    const $$ = cheerio.load(imgPageResp.data);
    const link = $$('.fullMedia a');
    console.log(link.html());

    const fileName = link.html()!;
    const imageURL = link[0].attribs['href'];

    fullImageUrls.push({ fileName, imageURL });
  }

  const imageMap: Record<string, string> = {};
  for (const data of await Promise.all(fullImageUrls)) {
    const { fileName, imageURL } = data;
    imageMap[fileName] = imageURL;
  }

  const ws = createWriteStream(fileName);
  ws.write(JSON.stringify(imageMap));
  ws.close();
}
