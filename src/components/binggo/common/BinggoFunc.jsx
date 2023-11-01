export const FunCntList = (allCnt) =>
  Array(allCnt)
    .fill(0)
    .map((_, i) => i);

export const FunshuffleArray = (CntList) => {
  const cloneArray = [...CntList];

  for (let i = cloneArray.length - 1; i >= 0; i--) {
    let rand = Math.floor(Math.random() * (i + 1));
    // 配列の要素の順番を入れ替える
    let tmpStorage = cloneArray[i];
    cloneArray[i] = cloneArray[rand];
    cloneArray[rand] = tmpStorage;
  }

  let array = cloneArray.map((val) => ({ val: val, flag: false }));

  return array;
};

export const UpdatePanFlag = (list, clickId) => {
  let clon = [...list];
  clon[clickId] = { ...clon[clickId], flag: true };

  return clon;
};

export const selectValue = (list, value) => {
  let index = 0;
  for (let i in list) {
    if (list[i].val === value) {
      index = i;
      break;
    }
  }
  return index;
};

export const checkBinggoX = (clickId, cnt, gamePan) => {
  // console.log(clickId + " checkBinggo start ");

  let x = Math.floor(clickId / cnt);
  let y = clickId % cnt;

  let binggoFlag = true;
  // console.log("------x---");
  // x軸
  let targetList = [];
  for (let i = 0; i < cnt; i++) {
    let id = i * cnt + y;

    if (
      binggoFlag &&
      (id.toString() === clickId || gamePan[id].flag === true)
    ) {
      targetList.push(id);
      continue;
    } else {
      binggoFlag = false;
      break;
    }
  }

  // updateBinggo(binggoFlag, targetList, binggo, setBinggo);

  // console.log("x end " + JSON.stringify(targetList));

  // console.log(clickId + " checkBinggo end ");
  return { binggoFlag: binggoFlag, targetList: targetList };
};

export const checkBinggoY = (clickId, cnt, gamePan) => {
  // console.log(target + " checkBinggo start ");

  let x = Math.floor(clickId / cnt);
  let y = clickId % cnt;

  let binggoFlag = true;
  let targetList = [];
  // y軸
  for (let i = 0; i < cnt; i++) {
    let id = x * cnt + i;
    if (
      binggoFlag &&
      (id.toString() === clickId || gamePan[id].flag === true)
    ) {
      targetList.push(id);
      continue;
    } else {
      binggoFlag = false;
      break;
    }
  }
  // updateBinggo(binggoFlag, targetList, binggo, setBinggo);

  // console.log("y end " + binggoFlag);
  // console.log(target + " checkBinggo end ");
  return { binggoFlag: binggoFlag, targetList: targetList };
};

export const checkBinggoLeft = (clickId, cnt, gamePan) => {
  // console.log(target + " checkBinggo start ");

  let x = Math.floor(clickId / cnt);
  let y = clickId % cnt;

  let binggoFlag = true;
  // // console.log("------x---");
  // x軸
  let targetList = [];
  // // console.log(binggoFlag);
  // // console.log("------左 -> 右---");

  // 左 -> 右
  for (let i = 0; i < cnt; i++) {
    let id = i * cnt + i;
    if (
      binggoFlag &&
      (id.toString() === clickId || gamePan[id].flag === true)
    ) {
      targetList.push(id);
      continue;
    } else {
      binggoFlag = false;
      break;
    }
  }
  // updateBinggo(binggoFlag, targetList, binggo, setBinggo);

  // console.log("left end " + binggoFlag);

  // console.log(target + " checkBinggo end ");
  return { binggoFlag: binggoFlag, targetList: targetList };
};

export const checkBinggoRight = (clickId, cnt, gamePan) => {
  // console.log(target + " checkBinggo start ");

  let x = Math.floor(clickId / cnt);
  let y = clickId % cnt;

  let binggoFlag = true;
  // // console.log("------x---");
  // x軸
  let targetList = [];
  // 右 -> 左
  for (let i = 0; i < cnt; i++) {
    let id = i * cnt + (cnt - i - 1);
    // // console.log(id);
    // // console.log(gamePan[id]);
    if (
      binggoFlag &&
      (id.toString() === clickId || gamePan[id].flag === true)
    ) {
      targetList.push(id);
      continue;
    } else {
      binggoFlag = false;
      break;
    }
  }
  // updateBinggo(binggoFlag, targetList, binggo, setBinggo);

  // console.log("right end " + binggoFlag);

  // // console.log(binggoFlag);

  // console.log(target + " checkBinggo end ");
  return { binggoFlag: binggoFlag, targetList: targetList };
};

export const updateBinggo = (flag, targetList, binggo, setBinggo) => {
  if (flag) {
    // console.log("updateBinggo");
    if (!binggo.includes(targetList.toString())) {
      // let newBinggo = [...binggo];
      // // console.log(binggo);
      // newBinggo.push(targetList);
      setBinggo((oldArray) => [...oldArray, targetList.toString()]);
      // console.log(binggo);
    } else {
      // console.log("既にカウントしましたので、ださない");
    }
  }
};
