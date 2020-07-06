"use strict";

var jq = document.createElement('script');
jq.src = "https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"; 
document.getElementsByTagName('head')[0].appendChild(jq);

let list = []

const getVideoSrc = async () => {
  const VideoList = document.getElementsByTagName('a')
  for (let e = 0; e < VideoList.length; e++) {
    if (!!VideoList[e].onclick) {
      const onclick = VideoList[e].onclick.toString()
      if (onclick.indexOf("onHandelData") != -1) {
        const data = onclick.replace(/\n/g, '').replace(/\t/g, '').split('onHandelData(')[1].split(');}')[0].replace(/'/g, '').replace(/ /g, '').split(',')
        list.push({
          cmd: data[0],
          lectPldcNo: data[1],
          tp: data[2],
          path: data[3],
          filenm: data[4],
          wd: data[5],
          ht: data[6],
          cntsId: data[7],
          hgrkLectNo: data[8],
          lectNo: data[9],
          cntsContentsflag: data[10],
          cntsIslive: data[11],
          stdyEndYn: data[12],
          fpmnginfo: data[13],
          name: VideoList[e].innerText
        })
      }
    }
  }
}

const videoLink = async () => {
  await Promise.all(list.map(async (videoData, index) => {
    const url = '/player.do?method=index&'
    const _TOK = new Date().getTime();
    const pars = `GRNOID=${escape(document.frmCon.hLmsSbjtGrnoId.value)}&CONTENTID=${escape(videoData.cntsId)}&PLDCNO=${escape(videoData.lectPldcNo)}&REGPNNO=${escape(document.frmCon.userNo.value)}&ISPROP=N&WEEK=${escape(videoData.hgrkLectNo)}&WEEKNO=${escape(videoData.lectNo)}&_TOK=${escape(_TOK)}`

    const playerDo = await axios.get(url + pars);
    const PlayerJspLink = playerDo.data.split('src="')[1].split('"')[0];
    const userKey = PlayerJspLink.split("userKey=")[1].split("&")[0];
  
    const PlayerJsp = await axios.get(PlayerJspLink);
    let Main = ''
    let Sub = ''
    try {
      Main = PlayerJsp.data.split('source.push(\"')[1].replace('");', '') + `?userKey=${userKey}`;
      Sub = PlayerJsp.data.split('source.push(\"')[2].split('");')[0] + `?userKey=${userKey}`; 
    }
    catch (error) {
      Main = PlayerJsp.data.split('source.push(\"')[1].split('");')[0] + `?userKey=${userKey}`;
      Sub = false
    }
    list[index].Main = Main
    list[index].Sub = Sub
  }))
}

const showPage = () => {
  const title = document.getElementsByTagName('h3')[0].innerText.split(' ')[0]
  let DOM = `<html><head><title>${!!title ? title : '구아캠'} 영상 리스트</title></head><body><ul>`
  for (const element of list) {
    if (!!element.Sub) {
      DOM += `
      <li style="margin-bottom: 5px;">
      ${element.name}:&nbsp;<a href="${element.Main}" onclick="window.open(this.href, '_blank'); return false;">Screen</a>&nbsp;<a href="${element.Sub}" onclick="window.open(this.href, '_blank'); return false;">Cam</a>
      </li>`
    }
    else {
      DOM += `
      <li style="margin-bottom: 5px;">
      ${element.name}:&nbsp;<a href="${element.Main}" onclick="window.open(this.href, '_blank'); return false;">Screen</a>
      </li>`
    }

  }
  DOM += `</ul></body></html>`
  const MainWin = window.open('', '')
  MainWin.document.write(DOM)
}

var start = async () => {
  try {
    await getVideoSrc();
    await videoLink();
    showPage();
    console.log('Done')
  }
  catch (error) {
    console.log(error)
    alert("Error")
  }
}
